import React, { ReactElement, useState } from 'react'
import { useDispatch } from 'react-redux'
import { MyTodoSort } from './TodoSort.styled'
import { 
  sortByTitle,
  sortByImp,
  sortByCompleted,
  sortByDate
} from '../../store/actions/todo'

interface ITodoSortProps {
  sortText: string
  setSortBy: (value: boolean) => any
}

const TodoSort: React.FC<ITodoSortProps> = (props): ReactElement => {

  const {setSortBy, sortText} = props

  const [sortIcon, setSortIcon] = useState<boolean>(false)
  
  const dispatch = useDispatch()

  const sortHandler = (orderBy: string) => {
    if(sortText === 'по алфавиту'){
      dispatch(sortByTitle(orderBy))
    }else if(sortText === 'по важности'){
      dispatch(sortByImp(orderBy))
    }else if(sortText === 'по выполненому'){
      dispatch(sortByCompleted(orderBy))
    }else{
      dispatch(sortByDate(orderBy))
    }
    setSortIcon(!sortIcon)
  }

  return (
    <MyTodoSort>

      {sortIcon ?
        <span className="material-icons" onClick={() => sortHandler('asc')}>
          keyboard_arrow_down
        </span>
        :
        <span className="material-icons" onClick={() => sortHandler('desc')}>
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

export default TodoSort