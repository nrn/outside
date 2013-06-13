var through = require('through')

var st = through(function (a, b) {
 postMessage(a, b)
})

module.exports = st

onmessage = function (ev) {
  return st.emit('data', ev.data, ev)
}

