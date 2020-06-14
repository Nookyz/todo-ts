import React, { ReactElement, useState, useRef } from 'react'
import {
  MyToolbar,
  MyToolbarTitle,
  MyToolbarSort,
} from './TodoToolbar.styled'
import { useClose } from '../../hooks/close.hook'
import { Popup } from '../Popup/Popup'

interface ITodoToolbarProps {
  title: string
}

export const TodoToolbar = ({title}: ITodoToolbarProps): ReactElement => {
  
  const [openPopup, setOpenPopup] = useState<boolean>(false)

  const sort = useRef<HTMLDivElement>(null)

  useClose(sort, () => setOpenPopup(false))
  
  return (
    <MyToolbar>

      <MyToolbarTitle >
        <h2>{title}</h2>
      </MyToolbarTitle>

      <MyToolbarSort 
      onClick={() => setOpenPopup(!openPopup)} 
      disabled={openPopup}
      bg={openPopup}
      >
        <span className="material-icons">
          sort
        </span>
        <span>
          Сортировка
        </span>
      </MyToolbarSort>

      {openPopup ? <Popup sort={sort}/> : null}
      
    </MyToolbar>
  )
}
