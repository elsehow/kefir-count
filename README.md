# kefir-count

count the number of values that come over a kefir stream

get back a kefir stream of counts

## installation

`npm install kefir-count`

## usage

```javascript
count = require('kefir-count')
count(sensorReadings.throttle(50))
count.log()
// > 1
// > 2
// > 3
// > ...
```

## license

MIT
