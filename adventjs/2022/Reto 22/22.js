// * Solución 1
function checkStepNumbers(systemNames, stepNumbers) {
    const numbersByNames = {};

    systemNames
        .forEach( (name, i) =>
            Boolean( numbersByNames[name] )
                ? numbersByNames[name].push( stepNumbers[i] )
                : numbersByNames[name] = [ stepNumbers[i] ]
            );

    const eachNameAscendent = Object
        .values( numbersByNames )
        .map( nums => 
            nums.every( (n, i) => ( i === 0 ) ? true : nums[i-1] < n )
        );

    return eachNameAscendent.every( n => n );
}

// * Solución 2
function checkStepNumbers(systemNames, stepNumbers) {
    return [...new Set(systemNames)]
        .map( name => {
            const nums = []
            systemNames.forEach( (n, i) => {
                if (name === n) nums.push(stepNumbers[i])
            })

            return nums;
        })
        .map( nums => nums.every( (n, i) => (i === 0) ? true : nums[i-1] < n) )
        .every( bool => bool)
}