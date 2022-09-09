import { ActionType } from 'state/action-types';
import { Action } from 'state/actions';

export const userList = (state: [] = [], action: Action) => {
  switch (action.type) {
    case ActionType.ALL_USERS:
      return action.payload;
    default:
      return state;
  }
};
