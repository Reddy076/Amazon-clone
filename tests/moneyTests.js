import {formatMoney} from '../scripts/utils/money.js';

console.log('convert cents to dollars');

if(formatMoney(2095)==='20.95'){
  console.log('pass');
}else{console.log('fail');}

console.log('works with 0');

if(formatMoney(0)==='0.00'){
  console.log('pass');
}else{console.log('fail');}

console.log('works to the nearest cent');

if(formatMoney(2000.5)==='20.01'){
  console.log('pass');
}else{console.log('fail');}