const prepare = (o) => {
  o._id = o._id.toString();
  return o;
};
module.exports = prepare;
