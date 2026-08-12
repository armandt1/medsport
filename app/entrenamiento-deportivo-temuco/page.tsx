import { JsonLd } from "@/components/json-ld";
import { ServiceLanding } from "@/components/service-landing";
import { serviceLandings } from "@/lib/services";
import { metadataForService, schemaForService } from "@/lib/seo";

const service = serviceLandings["entrenamiento-deportivo-temuco"];

export const metadata = metadataForService(service);

export default function Page() {
  return (
    <>
      <JsonLd data={schemaForService(service)} />
      <ServiceLanding service={service} />
    </>
  );
}
