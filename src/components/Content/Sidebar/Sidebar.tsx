import React from 'react'

const SectionLeftMenu = [
   'По проекту',
   'Объекты',
   'РД',
   'МТО',
   'СМР',
   'График',
   'МиМ',
   'Рабочие',
   'Капвложения',
   'Бюджет',
   'Финансирование',
   'Панорамы',
   'Камеры',
   'Поручения',
   'Контрагенты',
]

const Sidebar = () => {
   return (
      <div className="content__left-menu">
         {
            SectionLeftMenu.map(s =>
               <div className="left-menu__item">
                  <div className="item__icon">
                     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z" fill="white" />
                     </svg>
                  </div>
                  <div className="item__title">
                     {s}
                  </div>
               </div>)
         }
      </div>
   )
}

export default Sidebar
