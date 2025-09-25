import { useTranslation } from "react-i18next";
import { BreadcrumbType, PathObject } from "../../utils/types";
import { Link, useLocation } from "react-router";
import Breadcrumbs from "../../utils/hardCodedData/breadcrumb";
import { useRoute } from "../../context/RouteContext";

const Breadcrumb = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const routeNameMap = Breadcrumbs(i18n.t);
  const { path } = useRoute();

  const segments = location.pathname.split("/");

  segments.forEach(segment => console.log(segment));

  const breadcrumbs: PathObject[] = [];

  segments.forEach((segment) => {
    let modifiedSegment = segment;
    if (segment.startsWith(":")) {
      modifiedSegment = segment.slice(1); // Remove the leading ':'
    }
    const matchedRoute: BreadcrumbType | undefined = routeNameMap.find(route => route.id === modifiedSegment);
    if (matchedRoute) {
      console.log(matchedRoute.title);
      breadcrumbs.push({ name: matchedRoute.title, link: matchedRoute.url });
    };
  });

  // Always include Home at the start
  const fullBreadcrumbs = [{ name: i18n.t("routesName.home"), link: "/" }, ...breadcrumbs];


  return (
    <nav className="w-full bg-white h-5 pl-2">
      {fullBreadcrumbs.map((crumb, index) => (
        <span key={crumb.link}>
          <Link
            to={crumb.link}
            style={{
              color: index === fullBreadcrumbs.length - 1 ? "black" : "blue",
              textDecoration: "none",
            }}
          >
            {crumb.name}
          </Link>
          {index < fullBreadcrumbs.length - 1 && " › "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;