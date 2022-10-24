import React from 'react'
import Level from './Level/Level'

const NameWorks = [
   'Южная строительная площадка',
   'Фундаментальные работы',
   'Статья работы № 1',
   'Статья работы № 2',
]

const BasicSalaryValue = [
   '20 348',
   '20 348',
   '20 348',
   '38 200',
]

const EquipmentValue = [
   '1 750',
   '1 750',
   '1 750',
   '1 200',
]

const OverheadsValue = [
   '108,07',
   '108,07',
   '108,07',
   '850',
]

const EstimatedProfitValue = [
   '1 209 122,5',
   '1 209 122,5',
   '189 122,5',
   '1 020 000',
]

const ItemsList = () => {
   return (
      <div className='main-section__items-list'>
         <Level />
         <div className="item-list__name-works">
            {
               NameWorks.map(n =>
                  <div className='name-works__item'>
                     <span>{n}</span>
                  </div>)
            }
         </div>
         <div className="item-list__basic-salary">
            {
               BasicSalaryValue.map(b =>
                  <div className='basic-salary__item'>
                     <span>{b}</span>
                  </div>)
            }
         </div>
         <div className="item-list__equipment">
            {
               EquipmentValue.map(e =>
                  <div className='equipment__item'>
                     <span>{e}</span>
                  </div>)
            }
         </div>
         <div className="item-list__overheads">
            {
               OverheadsValue.map(o =>
                  <div className='overheads__item'>
                     <span>{o}</span>
                  </div>)
            }
         </div >
         <div className="item-list__estimated-profit">
            {
               EstimatedProfitValue.map(e =>
                  <div className='estimated-profit__item'>
                     <span>{e}</span>
                  </div>)
            }
         </div>
      </div>
   )
}

export default ItemsList
