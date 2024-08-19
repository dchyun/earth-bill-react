import "./organizations-grid.component.scss";
import { getOrganizations } from "@/app/_api/getOrganizations"

type OrganizationsGridProps = {
  children?: any,
  className?: string,
}

export default function OrganizationsGrid ({
  children,
  className,
}: OrganizationsGridProps) {

  const organizations = getOrganizations({limit: 150})

  return (
    <div className={"orgs-grid" + (className ? ' ' + className : '')}>
      {children}
      {organizations.map((org, index) => (
        <span className="orgs-grid__name" key={index}>
          {org.org_name}
        </span>
      ))}
    </div>
  )
}
