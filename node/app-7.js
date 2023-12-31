function printNum(callback){

    let i = 1;
    const interval = setInterval(()=>{
        console.log(i);
        i++;
    },100);

    process.on('SIGINT',()=>{
        clearInterval(interval);
        callback();
    });
};

printNum(()=>{
    console.log('Program Terminated')
});