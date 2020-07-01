import {Helpers} from '../types/types'
import {HelpersAction} from '../types/helperActions'

export const toggleMenu = (open: boolean): HelpersAction => ({
  type: Helpers.TOGGLE_MENU,
  payload: open
})