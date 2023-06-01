Array.prototype.forEach2 = function (callback) {
    for(var index in this) {
        // console.log(index);
        if(this.hasOwnProperty(index)){
            callback(this[index],index,this);
        }
}};

var courses = [
    'Java',
    'PHP',
    'Ruby',
];
// var courses = new Array(100);
// courses = courses.push('Javascript');
 
 courses.forEach2(function (course, index, array) {
    console.log(course, index, array);
    
});
