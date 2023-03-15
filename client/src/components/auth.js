import jwt from 'jsonwebtoken';

export const createToken = (data, secret, options = {}) => {
  return jwt.sign(data, secret, options);
};

export const verifyToken = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};
