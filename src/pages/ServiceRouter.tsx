import { useParams, Navigate } from "react-router-dom";
import { services, serviceCategories } from "@/data/services";
import ServiceDetailPage from "./ServiceDetailPage";
import ServiceCategoryPage from "./ServiceCategoryPage";

const ServiceRouter = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const category = serviceCategories.find((c) => c.slug === slug);

  // If it's a category, show the category page
  if (category) {
    return <ServiceCategoryPage />;
  }

  // If it's a service, show the service detail page
  if (service) {
    return <ServiceDetailPage />;
  }

  // If neither, redirect to services overview
  return <Navigate to="/services" replace />;
};

export default ServiceRouter;
