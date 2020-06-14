import React, { ReactElement } from 'react'
import {
  MyTodo,
  MyToolbar
} from './TodoToolbar.styled'

interface ITodoToolbarProps {
  title: string
}

export const TodoToolbar = ({title}: ITodoToolbarProps): ReactElement => {
  
  return (
    <MyTodo>

      <MyToolbar >
        <h2>{title}</h2>
      </MyToolbar>

    </MyTodo>
  )
}
