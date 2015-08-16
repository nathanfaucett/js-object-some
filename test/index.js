var tape = require("tape"),
    objectSome = require("..");


tape("objectSome(object, callback) tests whether some element in the object passes the test implemented by the provided function", function(assert) {
    function fn(value, index) {
        return value === index;
    }

    assert.equals(objectSome({
        a: "c",
        b: "b",
        c: "a"
    }, fn), true);
    assert.equals(objectSome({
        a: "b",
        b: "c",
        c: "a"
    }, fn), false);

    assert.end();
});
