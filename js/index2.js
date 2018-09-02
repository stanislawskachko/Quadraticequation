// 

const A = parseFloat(prompt('Enter number coefficient A'));
const B = parseFloat(prompt('Enter number coefficient B'));
const C = parseFloat(prompt('Enter number coefficient C'));
var X = 0;

if (indexA === 0) {
    var indexX= -Math.abs(indexC/indexB);
} 
else { 
    var discD= indexB*indexB - 4*indexA*indexC
    
    if (discD === 0) {var indexX = -Math.abs(indexB/(2*indexA))} 
    
    else var indexX1=(-Math.abs(indexB)-Math.abs(Math.sqrt(discD))/(2*indexA))
    var indexX2=(-Math.abs(indexB)+Math.abs(Math.sqrt(discD))/(2*indexA))
    
}


alert(indexX);
alert(indexX1);
alert(index2);//


function solve(A, B, C) {
    var result = (-1 * B + Math.sqrt(Math.pow(B, 2) - (4 * A * C))) / (2 * A);
    var result2 = (-1 * B - Math.sqrt(Math.pow(B, 2) - (4 * A * C))) / (2 * A);
    return result + "<br>" + result2;
}

//