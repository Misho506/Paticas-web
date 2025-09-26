import { useTranslation } from "react-i18next";
import { BreadcrumbType, PathObject } from "../../utils/types";
import { Link } from "react-router";
import Breadcrumbs from "../../utils/hardCodedData/breadcrumb";

const Breadcrumb = ({ path }: { path: string }) => {
  const { i18n } = useTranslation();
  const routeNameMap = Breadcrumbs(i18n.t);

  const breadcrumbs: PathObject[] = [];

  path.split("/").forEach((segment) => {
    let modifiedSegment = segment.startsWith(":") ? segment.slice(1) : segment;
    const matchedRoute: BreadcrumbType | undefined = routeNameMap.find(route => route.id === modifiedSegment);
    if (matchedRoute) {
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