import { ActionType } from 'state/action-types';

interface AllUsersAction {
  type: ActionType.ALL_USERS,
  payload: {}
}

interface ToggleSidebarAction {
  type: ActionType.TOGGLE_SIDEBAR,
  payload: boolean
}

export type Action = AllUsersAction | ToggleSidebarAction;