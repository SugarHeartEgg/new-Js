function array(a, n) {
    return Array.prototype.slice.call(a, n || 0);
}
function left(f) {
    var args = arguments
    return function () {
        var a = array(args, 1);
        console.log(a)
    }
}
function f(x, y, z) {
    return x * (y - z)
}
left(f, 2)(3, 4)
