
type UserRole = 'admin' | 'user' | 'guest';
type UserResource = 'document' | 'user' | 'adminPanel';

const userRolePermissions: Record<UserRole, Array<UserResource>> = {
  admin: ['document', 'user', 'adminPanel'],
  user: ['document', 'user'],
  guest: ['document'],
};

const createAccessChecker = <T extends string, K>(permissions: Record<T, Array<K>>) => {
  return (role: T, resourse: K) => {
    if (permissions[role] && permissions[role].includes(resourse)) {
      return true;
    } else {
      return false;
    }
  }
}

const checkUserAccess = createAccessChecker<UserRole, UserResource>(userRolePermissions);

const isAdminAllowed = checkUserAccess('admin', 'adminPanel');
console.log(isAdminAllowed);

const isUserAllowed = checkUserAccess('user', 'adminPanel');
console.log(isUserAllowed);