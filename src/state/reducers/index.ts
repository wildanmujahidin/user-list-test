import { combineReducers } from 'redux';
import { userList } from 'state/reducers/userReducer';
import { isSidebarClose } from 'state/reducers/toggleReducer';

const rootReducer = combineReducers({
  userList,
  isSidebarClose,
});

export default rootReducer;
export type IRootReducer = ReturnType<typeof rootReducer>;