import { getAll, save } from "@/services/Members";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
     getAll();
    return res.status(200).json(purchases);
  } 
  return res.status(404).send();
}