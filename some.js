// some : true/false
var courses = [
    {
        name: 'Javascript',
        coin: 250,
        isFinish: false,

    },
    {
        name: 'PHP',
        coin: 150,
        isFinish: true,
    },
    {
        name: 'NodeJs',
        coin: 0,
        isFinish: false,
    },
 
    ];

    Array.prototype.some2 = function (callback) {
        for(var index in this) {
            if(this.hasOwnProperty(index)){
               if(callback(this[index],index,this)){
                return true;
               };
            }

    }
    return false;
};

    var results = courses.some2(function (course, index,array) {
        return course.isFinish === true;
    });
    console.log(results);