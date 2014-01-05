var workerstream = require('workerstream')
  , worker = window.worker = workerstream('worker.js')

worker.on('data', function(data) {
  console.log(data)
})

worker.write('This is horribly unnecessary.')

