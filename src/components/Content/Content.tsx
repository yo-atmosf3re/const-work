import React from 'react'
import ItemsList from './ItemsList/ItemsList'
import Sidebar from './Sidebar/Sidebar'





const Content = () => {
   return (
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
            <ItemsList />
         </div>
      </div>
   )
}

export default Content
