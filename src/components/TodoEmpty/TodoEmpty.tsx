import React, { ReactElement } from 'react'
import {MyTodoEmpty} from './TodoEmpty.styled'

export const TodoEmpty = (): ReactElement => {
  return (
    <MyTodoEmpty>
      To Do пустой
    </MyTodoEmpty>
  )
}
