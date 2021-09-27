//Exercise 1

(() => {
    const result = [1, 1];
    /**
     * 
     * @param {Number} length Fibonnacci sequence length
     * @returns {Function} returns itself
     */
    const getFibonacciSequance = (length) => {
        if (result.length < length) {
            result[result.length] = result[result.length - 1] + result[result.length - 2];
            return getFibonacciSequance(length);
        } else
            return console.log(result[length - 1]);
    }
    getFibonacciSequance(6); //=> [1, 1, 2, 3, 5, 8, 13, ...]    
})();

//Exercise 2
(() => {
    const compose = (...functions) => x => functions.reduceRight((acc, fn) => fn(acc), x);

    const getSquare = (arr) => {
        const result = [];
        arr.map(item => result.push(item * item));
        return result;
    }
    const getEven = (arr) => {
        const result = [];
        arr.map(element => {
            if (element % 2 === 0)
                return result.push(element);
        });
        return result;
    }
    const getSum = (arr) => {
        let result = 0;
        arr.map(item => result += item);
        return console.log (result);
    }
    compose(getSum, getEven, getSquare)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
})();


//Exercise 3
(()=> {
    const customMap = (arr, fn) => {     
        return arr.reduce((acc, item) => {
            acc.push(fn(item)); 
            return acc}, []);
    }
    const result1 = customMap ([1,2,3,4,5], item => item*3);
    
    
    
    const customFilter = (arr, fn) => arr.reduce((acc, item) => fn(item) ? [...acc, item]: [...acc],[]);   
    const result2 = customFilter(["aasd", "ad", "aasdd", "a"], elem => elem.length>1);
    
    const customEvery = (arr,fn) => {
        let result = true;
        arr.reduce((acc, element) => {
            fn(element) ? acc = true : result = false;
        });
        return result;    
    }
    const result3 = customEvery([5,1,7,0], item => item>-1)
    
    
    const customSome = (arr, fn) => {
        let result = false;
        arr.reduce((acc, element) => {
            fn(element) ? result = true : acc = false;
        });
        return result;        
    }
    const result4 = customSome([5,1,7,0], item => item>7);    
})();




