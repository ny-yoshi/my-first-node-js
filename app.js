'use strict';
const number = process.argv[2] || 0; //コマンドライン上で入力した数字[引数]を(テキストでは100)をprocess.argvの配列3つ目に入れ読み込めるようにしているコード
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);