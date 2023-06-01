function giaithua(number){
     if(number > 0){
        return number * giaithua(number - 1);
     }
     return 1;
}
console.log(giaithua(4));
/**
 * 
 giaithua(4) = 4 * giaithua(3)

 giaithua(3) = 3 * giaithua(2)

 giaithua(2) = 2 * giaithua(1)

 giaithua(1) = 1 * giaithua(0)

 giaithua(0) = 1
 */