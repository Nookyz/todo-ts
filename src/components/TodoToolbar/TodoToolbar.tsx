import React, { ReactElement, useRef, useState, useEffect } from 'react'
import {
  MyToolbar,
  MyToolbarTitle,
  MyToolbarSort,
} from './TodoToolbar.styled'
import { useClose } from '../../hooks/close.hook'
import { Popup } from '../Popup/Popup'
import { useHistory } from 'react-router-dom'

interface ITodoToolbarProps {
  title: string
  setSortBy?: (value: boolean) => void 
  setSortText?: (value: string) => void 
}

export const TodoToolbar = (props: any): ReactElement => {
  
  const {title, setSortBy, setSortText} = props

  const [openPopup, setOpenPopup] = useState<boolean>(false)
  const [path, setPath] = useState<string>('')
  const sort = useRef<HTMLDivElement>(null)

  useClose(sort, () => setOpenPopup(false))

  const history = useHistory()

  useEffect(() => {
    setPath(history.location.pathname)
  }, [history])

  
  
  return (
    <MyToolbar>

      <MyToolbarTitle>
        <h2>{title}</h2>
      </MyToolbarTitle>

      <MyToolbarSort 
      onClick={() => setOpenPopup(true)} 
      disabled={openPopup}
      bg={openPopup}
      path={path === '/' ? true : false}
      >
        <span className="material-icons">
          sort
        </span>
        <span>
          Сортировка
        </span>
      </MyToolbarSort>

      {openPopup ? 
      <Popup 
      sort={sort} 
      setSortBy={setSortBy} 
      setSortText={setSortText}
      setOpenPopup={setOpenPopup}
      /> : null}
      
    </MyToolbar>
  )
}
