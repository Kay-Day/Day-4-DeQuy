//every : true/false thoa man het tat ca dieu kien
var courses = [
    {
        name: 'Javascript',
        coin: 250,
        isFinish: true,

    },
    {
        name: 'PHP',
        coin: 150,
        isFinish: true,
    },
    {
        name: 'NodeJs',
        coin: 400,
        isFinish: false,
    },
 
    ];
    Array.prototype.every2 = function (callback) {
        for(var index in this) {
            if(this.hasOwnProperty(index)){
               if(!callback(this[index],index,this)){
                return false;
               };
            }

    }
    return true;
};

    var results = courses.every2(function (course, index,array) {
        return course.coin < 500;

    });
    console.log(results);