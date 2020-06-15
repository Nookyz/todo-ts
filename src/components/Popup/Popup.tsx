import React, { ReactElement } from 'react'
import {MyPopup} from './Popup.styled'

interface IPopupProps {
  sort: React.Ref<HTMLDivElement>
  setSortBy: (value: boolean) => any
  setSortText: (value: string) => any
  setOpenPopup: (value: boolean) => any
}

export const Popup = (props: IPopupProps): ReactElement => {

  const {sort, setSortBy, setSortText, setOpenPopup} = props

  const sortHandler = (text: string) => {
    setSortText(text)
    setSortBy(true)
    setOpenPopup(false)
  }
  
  return (
    <MyPopup ref={sort}>

      <div className='popup-title'>
        Порядок сортировки
      </div>

      <div className='popup-wrap'>

        <div className='popup-item' onClick={() => sortHandler('по алфавиту')}>
          <span className="material-icons">
            text_rotate_vertical
          </span>
          <span>По алфавиту</span>
        </div>

        <div className='popup-item' onClick={() => sortHandler('по важности')}>
          <span className="material-icons">
            star_border
          </span>
          <span>По важности</span>
        </div>

        <div className='popup-item' onClick={() => sortHandler('по выполненому')}>
          <span className="material-icons">
            check_circle_outline
          </span>
          <span>По выполненому</span>
        </div>

        <div className='popup-item' onClick={() => sortHandler('по дате создания')}>
          <span className="material-icons">
            event
          </span>
          <span>По дате создания</span>
        </div>

      </div>

    </MyPopup>
  )
}
