
const nums = [1,2,4,4]

let requiredSum = 8

const filtrado = nums.filter(function(valor){
    return valor ===4
})

/*
function operacionUno () {
for(i=0; i< nums.length; i ++)
if(nums[0] + nums[1] === requiredSum){
    return true 
}else
    return false
}

console.log(operacionUno());

*/

function operacionDos () {
    for(i=0; i< filtrado.length; i ++)
    if(filtrado[0] + filtrado[1] === requiredSum){
    return true 
    }else
    return false
    }

console.log(operacionDos());
