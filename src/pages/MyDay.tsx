import React, { ReactElement, useEffect } from 'react'
import { TodoToolbar } from '../components/TodoToolbar/TodoToolbar'

interface IMyDayProps {
  
}

const MyDay = (): ReactElement => {
  
  useEffect(() => {
    document.title = `Сегодня`
  })

  return (
    <React.Fragment>
      <TodoToolbar title='Мой день'/>
    </React.Fragment>
  )
}

export default MyDay
