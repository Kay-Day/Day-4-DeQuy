// Xac dinh diem dung
// Tao ra diem dung
function countDown(number) {
    if(number > 0){
        console.log(number);
        return countDown(number - 1);
    }
    return number;
   
}
countDown(3);
///////////////////
function loop(start, end, cb) {
    if(start < end){
        cb(start);
        return loop(start + 1, end, cb);

    }
    
}
var arr = [1,2,3,4,5,6,7,8,9,10];
loop(0, arr.length  , function(index) {
    console.log('index: ' + index);
    console.log(arr[index]);
});


