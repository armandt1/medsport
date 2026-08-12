import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Centro Medsport Temuco",
    short_name: "Medsport",
    description: "Kinesiología, rehabilitación y entrenamiento deportivo en Temuco.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#081521",
    lang: "es-CL"
  };
}
