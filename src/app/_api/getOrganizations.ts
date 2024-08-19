import { organizations, Organization } from "../_data/organizations";

export const getOrganizations = ({
  limit = 10000,
  offset = 0,
}) => {

  let filteredList: Organization[];
  filteredList = organizations.filter((org) =>
    org.use_logo === true
  ).sort((a, b) => {
    if (a.org_name < b.org_name) {
      return -1;
    }

    if (a.org_name > b.org_name) {
      return 1;
    }

    return 0;
  });

  return filteredList.slice(offset, offset + limit).map((row: Organization) => ({
    org_name: row.org_name,
    url: row.url,
  }));
}
