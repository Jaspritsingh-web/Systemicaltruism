import React, { useState } from 'react';

const Datepicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (date > endDate) {
      setEndDate(null); // Reset end date if it becomes before start date
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="flex justify-center ">
        <div className='mr-2'>
        <label htmlFor="startDate" className="text-sm font-medium">Check_In Date:</label>
      <input
        id="startDate"
        type="date"
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={startDate}
        onChange={(e) => handleStartDateChange(e.target.value)}
        min={new Date().toISOString().split('T')[0]} // Set minimum to today
      />
        </div>
      <div>
      <label htmlFor="endDate" className="text-sm font-medium">Check_Out Date:</label>
      <input
        id="endDate"
        type="date"
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={endDate}
        onChange={(e) => handleEndDateChange(e.target.value)}
        min={startDate || new Date().toISOString().split('T')[0]} // Set minimum to start date or today
      />
      </div>
     
    </div>
  );
};

export default Datepicker;