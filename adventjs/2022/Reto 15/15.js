// * Solución 1
function decorateTree(base) {
    const initial = base.split(' ');
    let res = new Array(initial.length).fill(undefined);
    
    const newDecorator = (a, b) => {
        return (a === b) 
            ? a
            : ['P', 'B', 'R'].filter( opt => ![a, b].includes(opt))[0];
    }

    let prevLine = [];
    res = res.map( (_, index) => {
        if (index === 0) {
            prevLine = initial
            return initial
        };

        const newLine = [];
        for (let i = 0; i < prevLine.length - 1; i++) {
            newLine.push( newDecorator(prevLine[i], prevLine[i+1]) )
        }

        prevLine = newLine;
        return newLine;
    });

    return res.reverse().map( line => line.join(' '));
}

// * Solución 2
function decorateTree(base) {
    const newDecorator = (a, b) => {
        return (a === b) 
            ? a
            : ['P', 'B', 'R'].filter( opt => ![a, b].includes(opt))[0];
    }
    
    const res = [ base.split(' ') ];

    while( res[0].length > 1 ) {
        res.unshift(
            new Array(res[0].length - 1)
                .fill(undefined)
                .map( (_, i) => newDecorator( res[0][i], res[0][i+1] ))
        );
    }

    return res.map( line => line.join(' '));
}
