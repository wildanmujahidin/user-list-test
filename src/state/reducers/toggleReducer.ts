import { ActionType } from 'state/action-types';
import { Action } from 'state/actions';

export const isSidebarClose = (state: boolean = true, action: Action) => {
  switch (action.type) {
    case ActionType.TOGGLE_SIDEBAR:
      return action.payload;
    default:
      return state;
  }
};
