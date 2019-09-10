export const saveToCache = (key, val) => {
  if (process.browser) {
    return localStorage.setItem(key, val);
  }
  return;
};

export const getFromCache = key => {
  if (process.browser) {
    const val = localStorage.getItem(key);
    return val;
  }
};

export const clearFromCache = key => {
  if (process.browser) {
    return localStorage.setItem(key, '');
  }
};

// export const setAuthUser = authUser => {
//   if (process.browser) {
//     localStorage.setItem('authUser', authUser);
//   }
//   return;
// };

// export const getAuthUser = () => {
//   if (process.browser) {
//     const val = localStorage.getItem('authUser');
//     return val;
//   }
// };
