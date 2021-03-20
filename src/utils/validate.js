export const isLocalUrl = (url = '') => {
  return /(:\/\/)/.test(url) ? false : true;
};

export const isArray = (data) => Array.isArray(data);
