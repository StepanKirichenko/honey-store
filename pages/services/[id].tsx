import { getAllServices, Service } from "@/utils/services";

export async function getStaticPaths() {
  const allServices = await getAllServices();
  const ids = allServices.map((service) => service.id);
  const paths = ids.map((id) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const allServices = await getAllServices();
  const service = allServices.find(
    (service) => service.id === context.params.id
  );

  return {
    props: {
      allServices,
      service,
    },
  };
}

export default function ServicePage(props: {
  allServices: Service[];
  service: Service;
}) {
  return (
    <div className="mt-page-start mb-page-end">
      <h1>{props.service.title}</h1>
    </div>
  );
}
