export default list => async (req, res) => list.find((err, data) => {
  console.log('token on list: ', res.token);
  res.json({ data });
});

