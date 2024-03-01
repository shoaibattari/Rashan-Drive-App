import { getAll, save } from "../../../../services/purchases";

export async function GET() {
  const purchases = getAll();
  return Response.json(purchases);
}

// export async function POST(req) {
//   const { Invoice, Date, Name, Card, Khundi, Area, Package } = req.body;
//   save(Invoice, Date, Name, Card, Khundi, Area, Package);
//   return Response.json();
// }
