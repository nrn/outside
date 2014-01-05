var outside = require('../')
  , through = require('through')

outside.pipe(through(function (data) {
  this.queue(data.toUpperCase())
})).pipe(outside)

