import {Helpers} from '../types/types'

export type ToggleMenu = {
  type: typeof Helpers.TOGGLE_MENU,
  payload: boolean
}

export type HelpersAction = ToggleMenu