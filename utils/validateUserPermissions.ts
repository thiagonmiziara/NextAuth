type User = {
  permissions: string[];
  roles: string[];
};

type ValidateUserPermissionsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
};

export function validateUserPermissions({
  user,
  permissions,
  roles,
}: ValidateUserPermissionsParams) {
  if (permissions?.length > 0) {
    //verifica se todas as permission são verdadeira
    const hasAllPermissions = permissions.every((permission) => {
      return user.permissions.includes(permission);
    });
    // se não tiver todas as permission necessárias return false
    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    //verifica se todas as roles são verdadeira
    const hasAllRoles = roles.some((role) => {
      return user.permissions.includes(role);
    });
    // se não tiver todas as role necessárias return false
    if (!hasAllRoles) {
      return false;
    }
  }

  return true;
}
