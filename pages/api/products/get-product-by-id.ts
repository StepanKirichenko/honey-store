import type { NextApiRequest, NextApiResponse } from "next";
import type { Product } from "@/utils/products";
import { getProductById } from "@/utils/products";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
  const id = req.query["id"] as string;
  getProductById(id).then((product) => {
    res.status(200).json(product!);
  });
}
