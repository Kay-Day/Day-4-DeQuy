// filter
var courses = [
{
    name: 'Javascript',
    coin: 250
},
{
    name: 'PHP',
    coin: 150
},
{
    name: 'NodeJs',
    coin: 0
},
{
    name: 'Java',
    coin: 50
},
{
    name: 'C',
    coin: 900
},
];

Array.prototype.filter2 = function (callback) {
    var output = [];
    for(var index in this) {
        if(this.hasOwnProperty(index)){
           var result = callback(this[index],index,this);
              if(result){
                output.push(this[index]);
              }
        }
      
    }
    return output;
}
 var filterCourses = courses.filter2(function (course, index,array) {

    return course.coin > 100;

 });
 console.log(filterCourses);