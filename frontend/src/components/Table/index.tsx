import React from 'react'
import { tableHeader } from '../../utils/constats';
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { Case } from '../../api/Reports';

interface TableProps {
  elements: Case[]
}

const Table = ({elements}: TableProps) => {

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-bg-white border border-border-primary">
      <table className="w-full text-sm text-left rtl:text-right">

        <thead className="text-xs uppercase">
          <tr>
            {tableHeader.map((table, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {table}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {elements.length === 0 ? (
            <tr>
              <td className="p-5">No hay resultados.</td>
            </tr>
          ) : elements.map((element) => (
            <tr key={element.case_uuid} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b border-border-primary dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 flex items-center gap-2">
                <FaCalendarAlt /> {element.last_updated}
              </td>
              <td className="p-4">{element.case_uuid}</td>
              <td className="p-4">{element.phone}</td>
              <td className="p-4">{element.extra_metadata.dni}</td>
              <td className="p-4">{element.extra_metadata.grupo}</td>
              <td className="p-4">{element.extra_metadata.orden}</td>
              <td className="p-4 flex items-center gap-2">
                <FaClock /> {element.case_duration}
              </td>
              <td className="p-4">{element.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
