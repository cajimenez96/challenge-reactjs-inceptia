import React from 'react'
import { tableHeader } from '../../utils/constats';
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { Case } from '../../api/Reports';
import Spinner from '../Spinner';

interface TableProps {
  elements: Case[];
  loading: boolean;
}

const Table = ({elements, loading}: TableProps) => {
  console.log(elements);
  
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white border border-primary">
      <table className="w-full text-sm text-left rtl:text-right">

        <thead className="text-xs uppercase">
          <tr>
            {tableHeader.map((table, index) => (
              <th scope="col" className="p-5 uppercase bg-blue text-font-white" key={index}>
                {table}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td className="p-5 text-center" colSpan={tableHeader.length}>
                <div className="w-full flex justify-center"><Spinner /></div>
                </td>
              </tr>
          ) : elements.length === 0 ? (
            <tr>
              <td className="p-5">No hay resultados.</td>
            </tr>
          ) : elements.map((element) => (
            <tr key={element.case_uuid} className="odd:bg-light even:bg-white border-b border-primary hover:bg-hover-dark">
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
              <td className="p-4 font-semibold">{element.case_result.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
