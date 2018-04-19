export default list => async (req, res) => list.find((err, data) => {
  // if (req.headers.authorization) {
  res.json({ data, headers: req.headers });
  // } else {
  // res.json({ error: 'not authorized' });
  // }
});

