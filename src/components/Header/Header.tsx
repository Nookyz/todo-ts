import React, { ReactElement } from 'react'
import {
  MyHeader,
  MyHeaderTitle
} from './Header.styled'

export const Header = (): ReactElement => {
  return (
    <MyHeader>
      <MyHeaderTitle>
        To Do
      </MyHeaderTitle>
    </MyHeader>
  )
}
