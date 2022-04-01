
const nums = [1,2,4,4]

let requiredSum = 8


function operacionUno () {
for(i=0; i< nums.length; i ++)
if(nums[0] + nums[1] === requiredSum){
    return true 
}else
    return false
}

console.log(operacionUno());

function operacionDos () {
    for(i=0; i< nums.length; i ++)
    if(nums[2] + nums[3] === requiredSum){
    return true 
    }else
    return false
    }

console.log(operacionDos());
