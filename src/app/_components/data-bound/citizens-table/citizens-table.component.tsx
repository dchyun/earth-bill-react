import "./citizens-table.component.scss"
import { getCitizens } from "@/app/_api/getCitizens"

type CitizensTableProps = {
  className?: string,
}

export default function CitizensTable ({
  className,
}: CitizensTableProps) {

  const citizens = getCitizens({limit: 25})

  return (
    <div className={"citizen-table-wrapper" + (className ? ' ' + className : '')}>
      <table className="table citizen-table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Congressional District</th>
            <th scope="col">Group Affiliation, if any</th>
          </tr>
        </thead>
        <tbody>
          {citizens.map(citizen => (
            <tr key={citizen.last_name}>
              <td>{citizen.first_name}</td>
              <td>{citizen.last_name}</td>
              <td>{citizen.district}</td>
              <td>{citizen.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
