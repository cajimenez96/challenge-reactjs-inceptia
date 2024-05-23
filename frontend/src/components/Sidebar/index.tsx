import React, {ReactNode, useState} from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { Client } from '../../api/type';
import Spinner from '../Spinner';

interface SidebarProps {
  children: ReactNode;
  loading: boolean;
  elements: Client[];
  setElement: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar = ({children, loading, elements, setElement}: SidebarProps) => {
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

        <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${!openNav && '-translate-x-full'} sm:translate-x-0 bg-dark text-font-light`} aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto">
            <div className="mb-5 flex justify-between items-center md:mt-20 md:mb-12">
              <h3 className="text-xl font-bold tracking-widest">CLIENTES</h3>
              <Button>
                <FaAngleDoubleLeft size={20} />
              </Button>
            </div>
              <ul className="space-y-2 font-medium">
                {loading ? <Spinner/> 
                : elements.map((element, index) => (
                  <li key={index}>
                    <button
                      className="w-full flex items-center p-2 rounded-lg border-transparent transition hover:bg-hover hover:text-font-white"
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
