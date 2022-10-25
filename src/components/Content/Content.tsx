import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../../page/Layout'
import ItemsList from './ItemsList/ItemsList'
import Sidebar from './Sidebar/Sidebar'

const Content = () => {
   return (
      <Routes>
         <Route path='*' element={<Layout />}>
            <Route path='*' element={<ItemsList />} />
         </Route>
      </Routes>
   )
}

export default Content

{/* <div className="content">
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
            <ItemsList />
         </div>
      </div> */}