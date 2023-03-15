import cookie from 'cookie';

export const setCookie = (res, name, value, options = {}) => {
  const serializedValue = typeof value === 'object' ? JSON.stringify(value) : String(value);
  const serializedOptions = cookie.serialize(name, serializedValue, options);

  res.setHeader('Set-Cookie', serializedOptions);
};

export const getCookie = (req, name) => {
  if (!req.headers.cookie) {
    return null;
  }

  const cookies = cookie.parse(req.headers.cookie);
  const value = cookies[name];

  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};
