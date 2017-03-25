# recursive-array-concat
  Recursively Concats values in arrays to one single array

```shell
npm install --save recursive-array-concat
```

## Examples

```js
var concat = require('recursive-array-concat');

concat([1, 2], [3, 4]);
//=> [1, 2, 3, 4]

concat([1, 2], [3, [4, 5]]);
//=> [1, 2, 3, 4, 5]

concat([], [1], [2, [3, 4], [[5]]]);
//=> [1, 2, 3, 4, 5]

concat({}, [1, 2, undefined], [3, null, 4.5])
//=> [{}, 1, 2, undefined, 3, null, 4.5]

concat(1)
//=> [1]

concat()
//=> []

```

## API

### `concat(values...)`

#### arguments

- `values (any)`

#### returns
- `(array)`