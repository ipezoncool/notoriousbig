var muvelet = require('fs');

muvelet.appendFile('xd.txt', 'bigasdlol', function(err){
    if(err) throw err;
    console.log('uj fájl kész buzika')
});

muvelet.writeFile('xd.txt', 'lololool', function(err){
    if(err) throw err;
});

muvelet.copyFile('xd.txt', 'result.txt', function(err){
    if(err) throw err;
});