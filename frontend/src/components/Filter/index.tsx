import React from 'react';
import Datepicker from "react-tailwindcss-datepicker";

interface Time {
  startDate: string;
  endDate: string;
}

interface FilterProps {
  date: Time;
  setDate: (value: Time) => void;
}

const INITIAL_STATE = {
  startDate: "2021-03-01",
  endDate: "2022-03-25"
}

const Filter = ({setDate, date}: FilterProps) => {
    
    const handleValueChange = (newValue: any | Time) => {
    if (newValue.endDate === null || newValue.startDate === null) setDate(INITIAL_STATE)
    else setDate(newValue); 
    } 

  return (
    <>
      <p className="mb-2">Filtro por fecha</p>
      <Datepicker
        primaryColor={"sky"} 
        value={date}
        onChange={handleValueChange}
        displayFormat={"YYYY-MM-DD"}
        separator='hasta'
      /> 
    </>
  )
}

export default Filter;
