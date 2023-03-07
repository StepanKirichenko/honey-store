export interface Service {
  id: string;
  title: string;
  image: string;
}

const allServices: Service[] = [
  {
    id: "packaging_with_your_trademark",
    title: "Расфасовка мёда под вашей торговой маркой",
    image: "/images/services/1.png",
  },
  {
    id: "your_own_trademark",
    title: "собственная торговая марка",
    image: "/images/services/2.png",
  },
  {
    id: "honey_compositions",
    title: "разработка и выпуск медовых композиций",
    image: "/images/services/3.png",
  },
  {
    id: "individual_order",
    title: "разработка индивидуального заказа",
    image: "/images/services/4.png",
  },
  {
    id: "labeling",
    title: "этикетирование",
    image: "/images/services/5.png",
  },
  {
    id: "processing_into_cream",
    title: "переработка мёда в крем",
    image: "/images/services/6.png",
  },
];

export async function getAllServices(): Promise<Service[]> {
  return allServices;
}
