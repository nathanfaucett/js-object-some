object-some
=======

tests whether one element in the object pass the test implemented by the provided function.


```javascript
var objectSome = require("@nathanfaucett/object-some");


objectSome({
        a: "a",
        b: "b",
        c: "c"
    },
    function(value, key) {
        return value === "c";
    }
) === true;
```
