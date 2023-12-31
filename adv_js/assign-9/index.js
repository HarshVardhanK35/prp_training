const arr ={
    "orange": 2,
    "apple": 3,
    "banana": 4,
    "papaya": 5,
    "pear": 6,
}


let newArr = [];

Object.keys(arr).forEach((key)=>{
    for(let i = 0; i < 2; i++){
        newArr.push(arr[key] - 1)
    }
})
console.log(newArr)