import React, { ReactElement, useRef, useState, useEffect } from 'react'
import {
  MyToolbar,
  MyToolbarTitle,
  MyToolbarSort,
} from './TodoToolbar.styled'
import { useClose } from '../../hooks/close.hook'
import { Popup } from '../Popup/Popup'
import { useHistory } from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'


interface ITodoToolbarProps {
  title: string
  setSortBy?: (value: boolean) => void 
  setSortText?: (value: string) => void 
}

export const TodoToolbar: React.FC<any> = (props): ReactElement => {
  
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

      
      <CSSTransition
        in={openPopup}
        timeout={500}
        classNames='popup'
        unmountOnExit
      >
        <Popup 
          sort={sort} 
          setSortBy={setSortBy} 
          setSortText={setSortText}
          setOpenPopup={setOpenPopup}
        /> 
      </CSSTransition>
      
    </MyToolbar>
  )
}
