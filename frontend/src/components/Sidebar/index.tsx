import React, {ReactNode, useEffect, useState} from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { Client } from '../../api/interface';

interface SidebarProps {
  children: ReactNode;
  elements: Client[];
  setElement: React.Dispatch<React.SetStateAction<number>>;
}


const Sidebar = ({children, elements, setElement}: SidebarProps) => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const Button = ({children}) => {
    return (
      <button onClick={() => setOpenNav(!openNav)} type="button" className="w-10 h-10 flex items-center justify-center m-3 text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        {children}
      </button>
    )
  }


  return (
    <>
      <div>
        <Button>
          <FaAlignLeft size={20} />
        </Button>

        <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${!openNav && '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <div className="mb-5 flex justify-between items-center">
              <h3 className="">CLIENTE</h3>
              <Button>
                <FaAngleDoubleLeft size={20} />
              </Button>
            </div>
              <ul className="space-y-2 font-medium">
                {elements.map((element, index) => (
                  <li key={index}>
                    <button
                      className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      onClick={() => setElement(element.id)}>
                      <FaRegUser />
                      <span className="ms-3">{element.name}</span>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>


      <div className="p-4 sm:ml-64">
        <div className="p-4">
          {children}
        </div>
      </div>
    </>
  )
}

export default Sidebar;
