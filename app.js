const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { findMode, findMean, findMedian } = require('./calculations');

app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('Numbers are required.', 400);
    }
    let numsString = req.query.nums.split(',');
    let numbers = [];
    for (let i = 0; i < numsString.length-1; i++) {
        let number = Number(numsString[i]);
        if (Number.isNaN(number)) {
            return new ExpressExpressError(
              `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`, 400
            );
          }
        numbers.push(number);
    }
    let result = {
        operation: "mean",
        result: findMean(numbers),
    }
    
    return res.json(result);
})

app.get('/median', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('Numbers are required.', 400);
    }
    let numsString = req.query.nums.split(',');
   
    for (let i = 0; i < numsString.length-1; i++) {
        let number = Number(numsString[i]);
        if (Number.isNaN(number)) {
            return new ExpressExpressError(
              `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`, 400
            );
        }
    } 
    let result = {
        operation: "median",
        result: findMedian(numbers),
    }
    return res.json(result);
})


app.get('/mode', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('Numbers are required.', 400);
    }
    let numsString = req.query.nums.split(',');
   
    for (let i = 0; i < numsString.length-1; i++) {
        let number = Number(numsString[i]);
        if (Number.isNaN(number)) {
            return new ExpressExpressError(
              `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`, 400
            );
        }
        let result = {
            operation: "median",
            result: findMode(numbers),
        }
        return res.json(result);
    }
})


app.use((err, req, res, next) => {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message: err.message
    });
  });


app.listen(3000, ()=> {
    console.log('Server running on port 3000');
})