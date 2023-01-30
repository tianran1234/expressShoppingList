function findMean(nums) {
    let sum = 0;
    for (let i=0; i<nums.length-1; i++) {
        sum = sum + nums[i];
    }
    mean = sum/nums.length;
    return mean;
}

function findMedian(nums) {
    nums.sort();
   
    let len = nums.length;
    if (len % 2 === 0) {
        let median = (nums[len/2 - 1] + nums[len/2]) / 2;
        return median;
    }
    let i = Math.floor(len/2);
    return median = nums[i];
}

function findMode(nums) {
    let  numFrq= {};
    for (let i=0; i<nums.length-1; i++) {
        if (!Object.keys(numFrq).includes(numbers[i])) {
            nums[i] == 1;
        }else {
            nums[i] += 1;
        }
    }
    let counter = 0;
    for (let key in numFrq) {
        if (numFrq[key] > counter) {
            counter = numFrq[key];
            mode = key;
        }
    }
    return mode;
}





module.exports = {
    findMean,
    findMedian,
    findMode,
};
