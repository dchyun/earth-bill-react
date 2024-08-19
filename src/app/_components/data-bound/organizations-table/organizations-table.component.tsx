import { getOrganizations } from "@/app/_api/getOrganizations"

type OrganizationsTableProps = {
  className?: string,
}

export default function OrganizationsTable ({
  className,
}: OrganizationsTableProps) {

  const organizations = getOrganizations({limit: 25})

  return (
    <div className={className}>
      {organizations.map(org => (
        <div className="org" key={org.org_name}>
          <span>{org.org_name}</span>
        </div>
      ))}
    </div>
  )
}
