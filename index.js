var through = require('through')

var st = through(function (a, b) {
 postMessage(a, b)
})

module.exports = st

self.addEventListener('message', function (ev) {
  st.emit('data', ev.data, ev)
})

self.addEventListener('error', function (err) {
  st.emit('error', err)
})

