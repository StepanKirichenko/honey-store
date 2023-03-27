import type { NextApiRequest, NextApiResponse } from "next";
import type {
  CatalogPageRequest,
  CatalogPageResponse,
  HoneyType,
  Packaging,
  ProductCategory,
  Weight,
} from "@/utils/products";
import { getCatalogPage } from "@/utils/products";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CatalogPageResponse>
) {
  const limit = Number(req.query["limit"]);
  const page = Number(req.query["page"]);
  const sortingMethod = req.query["sorting-method"];
  const category = req.query["category"] as ProductCategory;

  const yearQuery = req.query["year"];
  const year =
    yearQuery === undefined
      ? null
      : yearQuery instanceof Array
      ? yearQuery
      : [yearQuery];

  const weightQuery = req.query["weight"];
  const weight =
    weightQuery === undefined
      ? null
      : weightQuery instanceof Array
      ? (weightQuery as Weight[])
      : ([weightQuery] as Weight[]);

  const honeyTypeQuery = req.query["honeyType"];
  const honeyType =
    honeyTypeQuery === undefined
      ? null
      : honeyTypeQuery instanceof Array
      ? (honeyTypeQuery as HoneyType[])
      : ([honeyTypeQuery] as HoneyType[]);

  const packagingQuery = req.query["packaging"];
  const packaging =
    packagingQuery === undefined
      ? null
      : packagingQuery instanceof Array
      ? (packagingQuery as Packaging[])
      : ([packagingQuery] as Packaging[]);

  const result = getCatalogPage({
    limit: 16,
    page: 1,
    sortingMethod: "cheapest",
    category: category,
    year,
    weight,
    honeyType,
    packaging,
  });
  res.status(200).json(result);
}
