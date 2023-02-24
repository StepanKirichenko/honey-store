import type { Product } from "@/utils/products";
import { getProductById } from "@/utils/products";

interface Props {
  product: Product;
}

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const product = await getProductById(Number(id));
  return {
    props: {
      product: product,
    },
  };
}

export default function ProductPage({ product }: Props) {
  return (
    <h1
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {product.id}
    </h1>
  );
}
