import React, { ReactElement } from 'react'
import {MyTodoEmpty} from './TodoEmpty.styled'

interface ITodoEmptyProps {
  
}

const TODO_PNG = `https://static.vecteezy.com/system/resources/previews/000/622/840/
non_2x/to-do-list-page-with-check-marks-and-pencil-concept-illustration-for-time-and-
project-management-vector-illustration-template-in-flat-style.jpg`

export const TodoEmpty = (): ReactElement => {
  return (
    <MyTodoEmpty>
      <h1>To Do пустой</h1>
      <img src={TODO_PNG} alt='img_todo'/>
    </MyTodoEmpty>
  )
}
