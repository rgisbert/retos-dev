// * Solución 1
function getOptimalPath(path) {
    let prevLine = [0];

    const addNums = path.map( line => {
        prevLine = line.map( (num, i) => {
            if (i === 0) return num += prevLine[0];
            if (i === line.length - 1) return num += prevLine.at(-1);
            
            return prevLine
                .slice(i - 1, i + 1)
                .map( aux => {
                    if (typeof aux === 'number') return num + aux;

                    return aux.map( n => n + num);
                })
                .flat();
        });
        
        return prevLine;
    });

    return Math.min( ...addNums.at(-1).flat() );
}

// * Solución 2
function getOptimalPath(path) {
    let prevLine = [[0]];

    const addNums = path.map( line => {
        prevLine = line.map( (num, i) => {
            const newArr = (i === 0)
                ? prevLine[0]
                : (i >= line.length - 1)
                    ? prevLine.at(-1) : prevLine.slice(i-1, i+1);

            return newArr.flat().map( n => n + num);
        });
        
        return prevLine;
    });

    return Math.min( ...addNums.at(-1).flat() );
}
