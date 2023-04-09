import type { NextApiRequest, NextApiResponse } from "next";
import type { Product } from "@/utils/products";
import { getProductsById } from "@/utils/products";
import { unescape } from "querystring";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const idsReq = req.query["id"];
  const ids =
    idsReq === undefined ? [""] : idsReq instanceof Array ? idsReq : [idsReq];
  getProductsById(ids).then((products) => {
    res.status(200).json(products);
  });
}
