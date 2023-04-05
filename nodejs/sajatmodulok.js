exports.randomizator = function(){
    var tomb = [];
    for (let i = 0; i < 10; i++) {
        var elem = Math.round(Math.random()*10);
        tomb.push(elem);
    }
    return tomb;
};