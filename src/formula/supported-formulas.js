const SUPPORTED_FORMULAS = [
  'ABS',
  'ACCRINT',
  'ACCRINTM',
  'ACOS',
  'ACOSH',
  'ACOT',
  'ACOTH',
  'ADD',
  'AGGREGATE',
  'AMORDEGRC',
  'AMORLINC',
  'AND',
  'anyIsError',
  'ARABIC',
  'ARGS2ARRAY',
  'argsToArray',
  'arrayEach',
  'arrayValuesToNumbers',
  'ASC',
  'ASIN',
  'ASINH',
  'ATAN',
  'ATAN2',
  'ATANH',
  'AVEDEV',
  'AVERAGE',
  'AVERAGEA',
  'AVERAGEIF',
  'AVERAGEIFS',
  'BAHTTEXT',
  'BASE',
  'BESSELI',
  'BESSELJ',
  'BESSELK',
  'BESSELY',
  'BETA',
  'BETA.DIST',
  'BETA.INV',
  'BETADIST',
  'BETAINV',
  'BIN2DEC',
  'BIN2HEX',
  'BIN2OCT',
  'BINOM',
  'BINOM.DIST',
  'BINOM.DIST.RANGE',
  'BINOM.INV',
  'BINOMDIST',
  'BITAND',
  'BITLSHIFT',
  'BITOR',
  'BITRSHIFT',
  'BITXOR',
  'CEILING',
  'CEILING.MATH',
  'CEILING.PRECISE',
  'CEILINGMATH',
  'CEILINGPRECISE',
  'CELL',
  'CHAR',
  'CHIDIST',
  'CHIDISTRT',
  'CHIINV',
  'CHIINVRT',
  'CHISQ',
  'CHISQ.DIST',
  'CHISQ.DIST.RT',
  'CHISQ.INV',
  'CHISQ.INV.RT',
  'CHISQ.TEST',
  'CHITEST',
  'CHOOSE',
  'CLEAN',
  'cleanFloat',
  'CODE',
  'COLUMN',
  'COLUMNS',
  'COMBIN',
  'COMBINA',
  'COMPLEX',
  'CONCATENATE',
  'CONFIDENCE',
  'CONFIDENCE.NORM',
  'CONFIDENCE.T',
  'CONVERT',
  'CORREL',
  'COS',
  'COSH',
  'COT',
  'COTH',
  'COUNT',
  'COUNTA',
  'COUNTBLANK',
  'COUNTIF',
  'COUNTIFS',
  'COUNTIN',
  'COUNTUNIQUE',
  'COUPDAYBS',
  'COUPDAYS',
  'COUPDAYSNC',
  'COUPNCD',
  'COUPNUM',
  'COUPPCD',
  'COVAR',
  'COVARIANCE',
  'COVARIANCE.P',
  'COVARIANCE.S',
  'COVARIANCEP',
  'COVARIANCES',
  'CRITBINOM',
  'CSC',
  'CSCH',
  'CUMIPMT',
  'CUMPRINC',
  'data',
  'DATE',
  'DATEVALUE',
  'DAVERAGE',
  'DAY',
  'DAYS',
  'DAYS360',
  'DB',
  'DBCS',
  'DCOUNT',
  'DCOUNTA',
  'DDB',
  'DEC2BIN',
  'DEC2HEX',
  'DEC2OCT',
  'DECIMAL',
  'DEGREES',
  'DELTA',
  'DEVSQ',
  'DGET',
  'DISC',
  'div0',
  'DIVIDE',
  'DMAX',
  'DMIN',
  'DOLLAR',
  'DOLLARDE',
  'DOLLARFR',
  'DPRODUCT',
  'DSTDEV',
  'DSTDEVP',
  'DSUM',
  'DURATION',
  'DVAR',
  'DVARP',
  'EDATE',
  'EFFECT',
  'EOMONTH',
  'EQ',
  'ERF',
  'ERF.PRECISE',
  'ERFC',
  'ERFC.PRECISE',
  'ERFCPRECISE',
  'ERFPRECISE',
  'error',
  'ERROR.TYPE',
  'EVEN',
  'EXACT',
  'EXP',
  'EXPON',
  'EXPON.DIST',
  'EXPONDIST',
  'F',
  'F.DIST',
  'F.DIST.RT',
  'F.INV',
  'F.INV.RT',
  'F.TEST',
  'FACT',
  'FACTDOUBLE',
  'FALSE',
  'FDIST',
  'FDISTRT',
  'FIND',
  'FINDFIELD',
  'FINV',
  'FINVRT',
  'FISHER',
  'FISHERINV',
  'FIXED',
  'flatten',
  'flattenShallow',
  'FLOOR',
  'FLOOR.MATH',
  'FLOOR.PRECISE',
  'FLOORMATH',
  'FLOORPRECISE',
  'FORECAST',
  'FREQUENCY',
  'FTEST',
  'FV',
  'FVSCHEDULE',
  'GAMMA',
  'GAMMA.DIST',
  'GAMMA.INV',
  'GAMMADIST',
  'GAMMAINV',
  'GAMMALN',
  'GAMMALN.PRECISE',
  'GAMMALNPRECISE',
  'GAUSS',
  'GCD',
  'GEOMEAN',
  'GESTEP',
  'GROWTH',
  'GTE',
  'HARMEAN',
  'HEX2BIN',
  'HEX2DEC',
  'HEX2OCT',
  'HOUR',
  'HTML2TEXT',
  'HYPGEOM',
  'HYPGEOM.DIST',
  'HYPGEOMDIST',
  'IF',
  'IFERROR',
  'IFNA',
  'IMABS',
  'IMAGINARY',
  'IMARGUMENT',
  'IMCONJUGATE',
  'IMCOS',
  'IMCOSH',
  'IMCOT',
  'IMCSC',
  'IMCSCH',
  'IMDIV',
  'IMEXP',
  'IMLN',
  'IMLOG10',
  'IMLOG2',
  'IMPOWER',
  'IMPRODUCT',
  'IMREAL',
  'IMSEC',
  'IMSECH',
  'IMSIN',
  'IMSINH',
  'IMSQRT',
  'IMSUB',
  'IMSUM',
  'IMTAN',
  'INFO',
  'initial',
  'INT',
  'INTERCEPT',
  'INTERVAL',
  'INTRATE',
  'IPMT',
  'IRR',
  'ISBINARY',
  'ISBLANK',
  'ISERR',
  'ISERROR',
  'ISEVEN',
  'isFlat',
  'ISFORMULA',
  'ISLOGICAL',
  'ISNA',
  'ISNONTEXT',
  'ISNUMBER',
  'ISO',
  'ISODD',
  'ISOWEEKNUM',
  'ISPMT',
  'ISREF',
  'ISTEXT',
  'JOIN',
  'KURT',
  'LARGE',
  'LCM',
  'LEFT',
  'LEN',
  'LINEST',
  'LN',
  'LN2',
  'LN10',
  'LOG',
  'LOG2E',
  'LOG10',
  'LOG10E',
  'LOGEST',
  'LOGINV',
  'LOGNORM',
  'LOGNORM.DIST',
  'LOGNORM.INV',
  'LOGNORMDIST',
  'LOGNORMINV',
  'LOWER',
  'LT',
  'LTE',
  'MATCH',
  'MAX',
  'MAXA',
  'MDETERM',
  'MDURATION',
  'MEDIAN',
  'MID',
  'MIN',
  'MINA',
  'MINUS',
  'MINUTE',
  'MINVERSE',
  'MIRR',
  'MMULT',
  'MOD',
  'MODE',
  'MODE.MULT',
  'MODE.SNGL',
  'MODEMULT',
  'MODESNGL',
  'MONTH',
  'MROUND',
  'MULTINOMIAL',
  'MULTIPLY',
  'MUNIT',
  'N',
  'na',
  'name',
  'NE',
  'NEGBINOM',
  'NEGBINOM.DIST',
  'NEGBINOMDIST',
  'NETWORKDAYS',
  'NETWORKDAYS.INTL',
  'NETWORKDAYSINTL',
  'nil',
  'NOMINAL',
  'NORM',
  'NORM.DIST',
  'NORM.INV',
  'NORM.S',
  'NORM.S.DIST',
  'NORM.S.INV',
  'NORMDIST',
  'NORMINV',
  'NORMSDIST',
  'NORMSINV',
  'NOT',
  'NOW',
  'NPER',
  'NPV',
  'num',
  'numbers',
  'NUMBERVALUE',
  'NUMERAL',
  'OCT2BIN',
  'OCT2DEC',
  'OCT2HEX',
  'ODD',
  'ODDFPRICE',
  'ODDFYIELD',
  'ODDLPRICE',
  'ODDLYIELD',
  'OR',
  'parseBool',
  'parseDate',
  'parseDateArray',
  'parseMatrix',
  'parseNumber',
  'parseNumberArray',
  'PDURATION',
  'PEARSON',
  'PERCENTILE',
  'PERCENTILE.EXC',
  'PERCENTILE.INC',
  'PERCENTILEEXC',
  'PERCENTILEINC',
  'PERCENTRANK',
  'PERCENTRANK.EXC',
  'PERCENTRANK.INC',
  'PERCENTRANKEXC',
  'PERCENTRANKINC',
  'PERMUT',
  'PERMUTATIONA',
  'PHI',
  'PI',
  'PMT',
  'POISSON',
  'POISSON.DIST',
  'POISSONDIST',
  'POW',
  'POWER',
  'PPMT',
  'PRICE',
  'PRICEDISC',
  'PRICEMAT',
  'PROB',
  'PRODUCT',
  'PRONETIC',
  'PROPER',
  'PV',
  'QUARTILE',
  'QUARTILE.EXC',
  'QUARTILE.INC',
  'QUARTILEEXC',
  'QUARTILEINC',
  'QUOTIENT',
  'RADIANS',
  'RAND',
  'RANDBETWEEN',
  'RANK',
  'RANK.AVG',
  'RANK.EQ',
  'RANKAVG',
  'RANKEQ',
  'RATE',
  'RECEIVED',
  'ref',
  'REFERENCE',
  'REGEXEXTRACT',
  'REGEXMATCH',
  'REGEXREPLACE',
  'REPLACE',
  'REPT',
  'rest',
  'RIGHT',
  'ROMAN',
  'ROUND',
  'ROUNDDOWN',
  'ROUNDUP',
  'ROW',
  'ROWS',
  'RRI',
  'RSQ',
  'SEARCH',
  'SEC',
  'SECH',
  'SECOND',
  'SERIESSUM',
  'SHEET',
  'SHEETS',
  'SIGN',
  'SIN',
  'SINH',
  'SKEW',
  'SKEW.P',
  'SKEWP',
  'SLN',
  'SLOPE',
  'SMALL',
  'SPLIT',
  'SQRT',
  'SQRTPI',
  'STANDARDIZE',
  'STDEV',
  'STDEV.P',
  'STDEV.S',
  'STDEVA',
  'STDEVP',
  'STDEVPA',
  'STDEVS',
  'STEYX',
  'SUBSTITUTE',
  'SUBTOTAL',
  'SUM',
  'SUMIF',
  'SUMIFS',
  'SUMPRODUCT',
  'SUMSQ',
  'SUMX2MY2',
  'SUMX2PY2',
  'SUMXMY2',
  'SWITCH',
  'SYD',
  'T',
  'T.DIST',
  'T.DIST.RT',
  'T.DIST.2T',
  'T.INV',
  'T.INV.2T',
  'T.TEST',
  'TAN',
  'TANH',
  'TBILLEQ',
  'TBILLPRICE',
  'TBILLYIELD',
  'TDIST',
  'TDISTRT',
  'TEXT',
  'TIME',
  'TIMEVALUE',
  'TINV',
  'TODAY',
  'TRANSPOSE',
  'TREND',
  'TRIM',
  'TRIMMEAN',
  'TRUE',
  'TRUNC',
  'TTEST',
  'TYPE',
  'UNICHAR',
  'UNICODE',
  'UNIQUE',
  'UPPER',
  'value',
  'VAR',
  'VAR.P',
  'VAR.S',
  'VARA',
  'VARP',
  'VARPA',
  'VARS',
  'VDB',
  'WEEKDAY',
  'WEEKNUM',
  'WEIBULL',
  'WEIBULL.DIST',
  'WEIBULLDIST',
  'WORKDAY',
  'WORKDAY.INTL',
  'WORKDAYINTL',
  'XIRR',
  'XNPV',
  'XOR',
  'YEAR',
  'YEARFRAC',
  'YIELD',
  'YIELDDISC',
  'YIELDMAT',
  'Z',
  'Z.TEST',
  'ZTEST',
  'VLOOKUP',
  'HLOOKUP',
];

export default SUPPORTED_FORMULAS;
