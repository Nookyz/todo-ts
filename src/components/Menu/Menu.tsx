import React, { ReactElement } from 'react'
import {NavLink} from 'react-router-dom'
import {ITodo} from '../../store/types/types'
import {
  MyMenu,
  MyMenuHeader,
  MyMenuNav
} from './Menu.styled'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../../store/actions/helper'

interface IMenuProps {
  openMenu: boolean
  todos: ITodo[]
}

const Menu: React.FC<IMenuProps> = (props): ReactElement => {

  const {openMenu, todos} = props
  const dispatch = useDispatch()

  const toggleMenuHandler = () => dispatch(toggleMenu(!openMenu))
  
  return (
    <MyMenu open={openMenu}>

      <MyMenuHeader >
        <span className="material-icons" onClick={() => toggleMenuHandler()}>
          menu
        </span>
      </MyMenuHeader>

      <MyMenuNav open={openMenu}>

      <NavLink to='/' exact activeClassName='active-link'>
          <span className="material-icons">
            house
          </span>
          <span className='title-todo'>
            Задачи
          </span>
          <span className='count-todo'>
            {todos.length}
          </span>
        </NavLink>

        <NavLink to='/important' activeClassName='active-link'>
          <span className="material-icons">
            star_border
          </span>   
          <span className='title-todo'>
            Важно
          </span>
          <span className='count-todo'>
            {todos.filter((todo: ITodo) => todo.imp).length}
          </span>
        </NavLink>
        
      </MyMenuNav>

    </MyMenu>
  )
}

export default Menu