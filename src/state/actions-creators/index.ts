import { Dispatch } from 'redux';

import UserServices from 'services/api/UserApi';
import { catchHandler } from 'services/http';

import { ActionType } from 'state/action-types';
import { Action } from 'state/actions';

export const getUserList = () => async (dispatch: Dispatch<Action>) => {
  try {
    const userData = await UserServices.getAll();
    dispatch({
      type: ActionType.ALL_USERS,
      payload: userData.data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.ALL_USERS,
      payload: error as string,
    });
    catchHandler(error);
  }
};

export const toggleSidebar = (isOpen: boolean) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.TOGGLE_SIDEBAR,
    payload: isOpen,
  });
};
