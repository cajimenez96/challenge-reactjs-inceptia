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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            <tr key={element.case_uuid} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-4 py-2 flex items-center gap-2">
                <FaCalendarAlt /> {element.last_updated}
              </td>
              <td className="px-4 py-2">{element.case_uuid}</td>
              <td className="px-4 py-2">{element.phone}</td>
              <td className="px-4 py-2">{element.extra_metadata.dni}</td>
              <td className="px-4 py-2">{element.extra_metadata.grupo}</td>
              <td className="px-4 py-2">{element.extra_metadata.orden}</td>
              <td className="px-4 py-2 flex items-center gap-2">
                <FaClock /> {element.case_duration}
              </td>
              <td className="px-4 py-2">{element.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
