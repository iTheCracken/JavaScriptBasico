var moment = require('moment');

moment.locale('es');

console.log(`Fecha Actual: ${moment().format(('LLLL'))}`);
