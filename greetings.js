const getFlagValue = require('./export_fuction_get_flag');

console.log(`Hi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`);