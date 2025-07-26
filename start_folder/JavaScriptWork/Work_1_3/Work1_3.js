// 下記コードを1_3.jsファイルにコピペし、正しい結果が得られるようにコードを修正してください。

const getTotalPrice = (price, quantity) => { return price * quantity; };

const addTax = total => { return total * 1.1; };

const total = getTotalPrice(1000, 2); // → 2000

console.log(`税抜き金額は${total}円です`);

const taxedTotal = addTax(total);     // → 2200

console.log(`税込金額は${taxedTotal}円です`);