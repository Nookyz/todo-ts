import React, { ReactElement, useRef, useState } from 'react'
import {ITodo} from '../../store/types/types'
import { MyInput } from './TodoInput.styled'

interface ITodoInputProps {
  addTodo: (todo: ITodo) => void,
  todoItem: (title: string) => ITodo
}

const TodoInput: React.FC<ITodoInputProps> = (props): ReactElement => {

  const {addTodo, todoItem} = props
  const [title, setTitle] = useState<string>('')
  const refInput = useRef<HTMLInputElement>(null)

  const focuseInputHandler = () => {
    refInput.current!.focus()  
  }
  
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onKeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && title.trim().length){ 
      addTodo(todoItem(title))
      setTitle('')
    }
  }

  return (
    <MyInput>
      <span className="material-icons" onClick={() => focuseInputHandler()}>
        add
      </span>
      
      <input 
        placeholder='Добавить' 
        ref={refInput}
        value={title}
        onChange={onChangeHandler}
        onKeyPress={onKeyPressHandler}
        maxLength={255}
      />
    </MyInput>
  )
}

export default TodoInput