import { citizens, Citizen } from "../_data/citizens";

const getWinner = (citizen: Citizen): boolean => {
  if (!citizen.show_name) {
    return false;
  } else {
    let winPercentage = .04;
    let dieRoll = Math.random();
    if (dieRoll < winPercentage) {
      return true;
    }
  }
  return false;
}

export const getCitizens = ({
  limit = 10000,
  offset = 0,
}) => {

  let filteredList: Citizen[];
  filteredList = citizens.filter(getWinner).sort((a, b) => {
    if (a.last_name < b.last_name) {
      return -1;
    }

    if (a.last_name > b.last_name) {
      return 1;
    }

    return 0;
  });

  return filteredList.slice(offset, offset + limit).map((row: Citizen) => ({
    first_name: row.first_name,
    last_name: row.last_name,
    district: row.district,
    group: row.group,
  }));
}
