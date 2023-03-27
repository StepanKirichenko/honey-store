// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { CatalogPageRequest, CatalogPageResponse } from "@/utils/products";
import { getCatalogPage } from "@/utils/products";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CatalogPageResponse>
) {
  const result = getCatalogPage({
    limit: 16,
    page: 1,
    sortingMethod: "cheapest",
    category: "honey",
    year: "2022",
    weight: "350",
    honeyType: "liquid",
    packaging: "glass",
  });
  res.status(200).json(result);
}
