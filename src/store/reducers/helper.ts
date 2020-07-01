import {IHelperState, Helpers} from '../types/types'
import {HelpersAction} from '../types/helperActions'

const initialState: IHelperState = {
  openMenu: false
}

export const helperReducer = (state = initialState, action: HelpersAction) => {
  switch(action.type){
    case Helpers.TOGGLE_MENU:
      return {
        ...state,
        openMenu: !state.openMenu
      }
    default:
      return state
  }
}