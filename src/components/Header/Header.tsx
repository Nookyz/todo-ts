import React, { ReactElement } from 'react'
import {
  MyHeader,
  MyHeaderTitle
} from './Header.styled'

export const Header: React.FC = (): ReactElement => {
  return (
    <MyHeader>
      <MyHeaderTitle>
        To Do
      </MyHeaderTitle>
    </MyHeader>
  )
}
