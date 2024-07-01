// middleware/auth.js

export const authorize = (roles = []) => {
  if (typeof roles === 'string') {
      roles = [roles];
  }

  return (req, res, next) => {
      const userRole = req.headers['user-role']; // Role should be passed in headers
      if (!roles.length || roles.includes(userRole)) {
          return next();
      } else {
          return res.status(403).json({ message: 'Forbidden' });
      }
  };
};
