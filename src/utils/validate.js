export const isLocalUrl = (url = '') => {
  return /(:\/\/)/.test(url) ? false : true;
};

export const isURL = (url) => {
  const urlPattern = new RegExp('(http|ftp|https)://?');
  return urlPattern.test(url) ? true : false;
};

export const isArray = (data) => Array.isArray(data);
