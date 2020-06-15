import React, { ReactElement, useRef, useState } from 'react'
import {
  MyToolbar,
  MyToolbarTitle,
  MyToolbarSort,
} from './TodoToolbar.styled'
import { useClose } from '../../hooks/close.hook'
import { Popup } from '../Popup/Popup'

interface ITodoToolbarProps {
  title: string
  openPopup?: boolean
  //setOpenPopup(value: boolean): void
  setSortText(value: string): void
}

export const TodoToolbar = (props: any): ReactElement => {
  
  //const {title, openPopup, setOpenPopup} = props
  const {title, setSortBy, setSortText} = props

  const [openPopup, setOpenPopup] = useState<boolean>(false)
  
  const sort = useRef<HTMLDivElement>(null)

  useClose(sort, () => setOpenPopup(false))

  
  
  return (
    <MyToolbar>

      <MyToolbarTitle>
        <h2>{title}</h2>
      </MyToolbarTitle>

      <MyToolbarSort 
      onClick={() => setOpenPopup(true)} 
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

      {openPopup ? <Popup sort={sort} setSortBy={setSortBy} setSortText={setSortText}/> : null}
      
    </MyToolbar>
  )
}
