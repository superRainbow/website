export const isLocalUrl = (url = '') => {
  return /(:\/\/)/.test(url) ? false : true;
};
