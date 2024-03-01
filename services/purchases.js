import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "database", "purchases.json");

export function getAll() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

export function getById(number) {
  const data = getAll();
  return data.find((p) => p.number === number);
}

// export function save() {
//   const data = getAll();
//   console.log(`dataaa ${data}`);
//   data.push({
//     Invoice,
//     Date,
//     Name,
//     Card,
//     Khundi,
//     Area,
//     Package,
//   });
//   fs.writeFileSync(filePath, JSON.stringify(data));
// }


export function save(newPurchase) {
  const data = getAll();
  data.push(newPurchase);
  fs.writeFileSync(filePath, JSON.stringify(data));
}
