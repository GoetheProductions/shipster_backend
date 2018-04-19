export default (req, res, next) => {
  // if no auth header AND request is not log in
  // send user a 500 error
  // else if auth header
  // validate it (jwt) and allow the proccess to move on
  // if (!req.headers.authorization) {
  //   // res.send('sorry pal, you`re not getting in');
  // }
  next();
};
