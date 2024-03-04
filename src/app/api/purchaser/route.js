
// export async function GET() {
//   await mongoose.connect(connectionStr);
//   const data = await bills.find();
//   console.log(data);
//   return NextResponse.json({ Result:data });
// }

import { save } from "../../../../services/purchases";

export async function POST(req) {
  const { Invoice, Date, Name, Card, Khundi, Area, Package } = req.body;
  save(Invoice, Date, Name, Card, Khundi, Area, Package);
  return Response.json();
}
