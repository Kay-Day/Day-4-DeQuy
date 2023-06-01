// Giai thua cua 3  = 3x2x1 = 6
function giaithua(number) {
   var output = 1;
   for (var i = number; i > 0; i--) {
    output = output*i;

   }
   return output;
}
console.log(giaithua(4));
  