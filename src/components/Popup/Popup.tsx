import React, { ReactElement } from 'react'
import {MyPopup} from './Popup.styled'

interface IPopupProps {
  sort: React.Ref<HTMLDivElement>
}

export const Popup = ({sort}: IPopupProps): ReactElement => {
  return (
    <MyPopup ref={sort}>

      <div className='popup-title'>
        Порядок сортировки
      </div>

      <div className='popup-wrap'>

        <div className='popup-item'>
          <span className="material-icons">
            text_rotate_vertical
          </span>
          <span>По алфавиту</span>
        </div>

        <div className='popup-item'>
          <span className="material-icons">
            star_border
          </span>
          <span>Важность</span>
        </div>

        <div className='popup-item'>
          <span className="material-icons">
            check_circle_outline
          </span>
          <span>Выполненые</span>
        </div>

        <div className='popup-item'>
          <span className="material-icons">
            event
          </span>
          <span>По дате создания</span>
        </div>

      </div>

    </MyPopup>
  )
}
