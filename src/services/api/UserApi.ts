
import { http } from 'services/http';

const getAll = async () => {
  return http.get('users');
};

const UserServices = {
  getAll,
};

export default UserServices;