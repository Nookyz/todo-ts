import React, { ReactElement, useState } from 'react'
import { connect } from 'react-redux'
import { MyTodoSort } from './TodoSort.styled'
import { 
  sortByTitle,
  sortByImp,
  sortByCompleted,
  sortByDate
} from '../../store/actions/todo'
import {ITodo} from '../../store/types/types'

interface ITodoSortProps {
  sortText: string
  setSortBy: (value: boolean) => any
  sortByTitle: (value: string) => ITodo[]
  sortByImp: (value: string) => ITodo[]
  sortByCompleted: (value: string) => ITodo[]
  sortByDate: (value: string) => ITodo[]
}

const TodoSort: React.FC<ITodoSortProps> = (props): ReactElement => {

  const {
    setSortBy, sortText, sortByTitle, 
    sortByImp, sortByCompleted, sortByDate
  } = props

  const [sortIcon, setSortIcon] = useState<boolean>(false)
  
  const sortHandler = (orderBy: string) => {
    if(sortText === 'по алфавиту'){
      sortByTitle(orderBy) 
    }else if(sortText === 'по важности'){
      sortByImp(orderBy)
    }else if(sortText === 'по выполненому'){
      sortByCompleted(orderBy)
    }else{
      sortByDate(orderBy)
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

const mapDispatchToProps = (dispatch: any) => ({
  sortByTitle: (orderBy: string) => dispatch(sortByTitle(orderBy)),
  sortByImp: (orderBy: string) => dispatch(sortByImp(orderBy)),
  sortByCompleted: (orderBy: string) => dispatch(sortByCompleted(orderBy)),
  sortByDate: (orderBy: string) => dispatch(sortByDate(orderBy))
})

export default connect(null, mapDispatchToProps)(TodoSort)
