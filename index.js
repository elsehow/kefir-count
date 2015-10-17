module.exports = function (stream) {
  function count (acc, _) {
    return acc+1
  }
  return stream.scan(count,0)
}
