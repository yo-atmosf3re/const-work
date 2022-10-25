import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Content/Sidebar/Sidebar'
import Header from '../components/Header/Header'

const Layout = () => {
   return (
      <div>
         {/* <Header /> */}
         <div className="content">
            <Sidebar />
            <div className="content__main-section">
               <div className="main-section__title-lists">
                  <div className='title-list__level'>Уровень</div>
                  <div className='title-list__name-work'>Наименование работ</div>
                  <div className='title-list__basic-salary'>Основная з/п</div>
                  <div className='title-list__eqipment'>Оборудование</div>
                  <div className='title-list__overheads'>Накладные расходы</div>
                  <div className='title-list__estimated-profit'>Сметная прибыль</div>
               </div>
               <Outlet />
            </div>
         </div>
      </div>
   )
}

export default Layout
