let nums = [1,4,3,9];

let requiredSum = 8

function sum () {
    for(i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(nums[i] + nums[j] === requiredSum)
            return true
        }
        return false
    }
}

console.log(sum());
