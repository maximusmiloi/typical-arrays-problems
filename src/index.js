
exports.min = function min(array) {
    a = array.sort((a, b) => a - b);
    b = a[0];
    return b;
}

exports.max = function max (array) {
    a = array.sort((a, b) => b - a);
    b = a[0];
    return b;
}

exports.avg = function avg(array) {
    var summ = 0;
    for (var i = 0; i < array.length; i++) {
        a = summ += array[i];
    }
    return a / array.length;
}
