import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'

interface ITodoSortProps {
  setSortBy(value: boolean): void
  sortText: string
}

const MyTodoSort = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #34373d;

  p{
    font-size: 14px;
  }
  span{
    cursor: pointer;
  }
  .close{
    font-size: 18px;
  }
`

export const TodoSort = (props: ITodoSortProps): ReactElement => {

  const {setSortBy, sortText} = props

  const [sortRevers, setSortRevers] = useState<boolean>(false)

  return (
    <MyTodoSort>
      {sortRevers ?
        <span className="material-icons" onClick={() => setSortRevers(!sortRevers)}>
          keyboard_arrow_down
        </span>
        :
        <span className="material-icons" onClick={() => setSortRevers(!sortRevers)}>
          keyboard_arrow_up
        </span>
      }
      
      <p>Сортировка {sortText}</p>
      <span className="material-icons close" onClick={() => setSortBy(false)}>
        close
      </span>
    </MyTodoSort>
  )
}
