import React from 'react'
import SidebarHR from '../../components/SidebarHR'
import Header from '../../components/Header'
import HolidayTable from '../../components/HolidayTable'

export default function RequestHoliday() {
  return (
    <div className='flex'>
        <SidebarHR />
        <div className='flex flex-col w-screen'>
            <Header />
            <HolidayTable/>
        </div>
    </div>
  )
}
