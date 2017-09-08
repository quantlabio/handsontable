import {fastInnerText, addClass, removeClass} from './../helpers/dom/element';
import {stringify} from './../helpers/mixed';
import {getRenderer} from './index';

function isFormula(value) {
  if (value) {
    if (value[0] === '=') {
      return true;
    }
  }
  return false;
}

/**
 * @private
 * @renderer formulaRenderer
 * @param instance
 * @param TD
 * @param row
 * @param col
 * @param prop
 * @param value
 * @param cellProperties
 */
function formulaRenderer(instance, TD, row, col, prop, value, cellProperties) {
  getRenderer('base').apply(this, arguments);

  //set cellProperties
  if(cellProperties.fontWeight != null)
    TD.style.fontWeight = cellProperties.fontWeight;
  if(cellProperties.fontStyle != null)
    TD.style.fontStyle = cellProperties.fontStyle;
  if(cellProperties.color != null)
    TD.style.color = cellProperties.color;
  if(cellProperties.background != null)
    TD.style.background = cellProperties.background;

  if (isFormula(value)) {
    // translate coordinates into cellId
    var cellId = instance.formula.utils.translateCellCoords({
          row: row,
          col: col
        }),
        prevFormula = null,
        formula = value.substr(1).toUpperCase(),
        needUpdate = false,
        newValue = null,
        currentItem = null,
        error, result;

    // try formula matrix, see if it's already in it
    var item = instance.formula.matrix.getItem(cellId);

    if (item) { // formula in matrix
      needUpdate = !! item.needUpdate;
      prevFormula = item.formula;
      error = item.error;

      if (needUpdate) {
        error = null;
        currentItem = item;

        // parse formula
        newValue = instance.formula.parse(formula, {
          row: row,
          col: col,
          id: cellId
        });

      } else {
        value = item.error || item.value;
      }

    } else { // formula not in matrix yet

      // parse formula
      newValue = instance.formula.parse(formula, {
        row: row,
        col: col,
        id: cellId
      });

      item = {
        id: cellId,
        formula: formula,
        error: newValue.error,
        value: newValue.result
      };

      // add item to matrix
      currentItem = instance.formula.matrix.addItem(item);

    }

    if(newValue){
      if(newValue.result != null && typeof newValue.result == 'object'){ // kernel async formula
        if(typeof newValue.result.onIOPub == 'object'){
          // kernel formula
          newValue.result.onIOPub = function(msg){
            if(msg.content){
              if(msg.content.hasOwnProperty('data')){
                var result = JSON.parse(msg.content.data['text/plain'].replace(/\'/g,'"'));

                  // only set left upper corner of matrix
                  var leftUp = result[1];
                  if(Array.isArray(leftUp)){
                    leftUp = leftUp[0];
                    if(Array.isArray(leftUp)){
                      leftUp = leftUp[0];
                    }
                  }

                  instance.formula.matrix.updateItem(currentItem, {
                    formula: formula,
                    value: leftUp,
                    error: newValue.error,
                    needUpdate: false
                  });

                  // for now only kernel async formulas might return matrix
                  if(Array.isArray(result[1])){

                    var matrix;

                    if(Array.isArray(result[1][0])){
                      matrix = result[1];
                    }
                    else{
                      matrix = [result[1]];
                    }

                    matrix[0][0] = value;

                    instance.populateFromArray(row,col,matrix);

                    //value = newValue.error || leftUp;

                  } else {  // scalar
                    var escaped = stringify(result.join(''));
                    fastInnerText(TD, escaped);
                  }
              }
            }
          }
        }else{ // regular sync matrix formulas

          // only set left upper corner of matrix
          var leftUp = newValue.result;
          if(Array.isArray(leftUp)){
            leftUp = leftUp[0];
            if(Array.isArray(leftUp)){
              leftUp = leftUp[0];
            }
          }

          instance.formula.matrix.updateItem(currentItem, {
            formula: formula,
            value: leftUp,
            error: newValue.error,
            needUpdate: false
          });

          var matrix;

          if(Array.isArray(newValue.result[0])){
            matrix = newValue.result;
          }
          else{
            matrix = [newValue.result];
          }

          matrix[0][0] = value;

          instance.populateFromArray(row,col,matrix);

          value = newValue.error || leftUp;

        }
      }else{ // regular sync scalar forumula
        instance.formula.matrix.updateItem(currentItem, {
          formula: formula,
          value: newValue.result,
          error: newValue.error,
          needUpdate: needUpdate
        });

        error = newValue.error;
        result = newValue.result;

        value = error || result;
      }
    }


    if (error) {
      // clear cell value
      if (!value) {
        // reset error
        error = null;
      } else {
        // show error
        value = error;
      }
    }

    // change background color
    if (instance.formula.utils.isSet(error)) {
      addClass(TD, 'formula-error');
    } else if (instance.formula.utils.isSet(result)) {
      removeClass(TD, 'formula-error');
      addClass(TD, 'formula');
    }
  }

  var escaped = stringify(value);
  fastInnerText(TD, escaped);

}

export default formulaRenderer;
