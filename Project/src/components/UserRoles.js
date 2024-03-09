// UserRole.js

import { useState, useEffect } from 'react';

export function useUserRole() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    checkUserToken();
  }, []);

  function checkUserToken() {
    const userRole = sessionStorage.getItem('user-role');
    if (userRole === 'admin' || userRole === 'user') {
      setUserRole(userRole);
    } else {
      setUserRole(null);
    }
  }

  return userRole;
}
