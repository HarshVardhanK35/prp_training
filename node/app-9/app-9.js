const {readFile} = require('fs');

readFile('./textfiles/sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    else{
        console.log(data);
        console.log('Successful Completion');
    };
});