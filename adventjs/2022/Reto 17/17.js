// * Solución 1
function carryGifts(gifts, maxWeight) {
    const res = [];
    let actualWeight = 0;

    gifts
        .filter( gift => gift.length <= maxWeight )
        .forEach( gift => {
            if (actualWeight === 0 || (actualWeight + gift.length > maxWeight)) {
                res.push( [gift] );
                actualWeight = gift.length;
            } else {   
                res.at(-1).push(gift)
                actualWeight += gift.length
            }
        });
    
    return res.map( line => line.join(' '));
}

// * Solución 1B
function carryGifts(gifts, maxWeight) {
    const res = [];

    gifts
        .filter( gift => gift.length <= maxWeight )
        .forEach( gift => {
            if (res.length === 0 ||
                (res.at(-1).join('').length + gift.length > maxWeight)) {
                res.push( [gift] );
            } else {   
                res.at(-1).push(gift);
            }
        })
    
    return res.map( line => line.join(' '));
}

// * Solución 2 (peor resultado)
function carryGifts(gifts, maxWeight) {
    const res = [];
    
    gifts
        .filter( gift => gift.length <= maxWeight)
        .forEach( gift => {
            const weight = res.at(-1)?.reduce( (accum, current) => accum + current.length, 0) ?? 0;

            if (weight === 0 || weight + gift.length > maxWeight) {
                res.push([gift])
            } else {
                res.at(-1).push(gift)
            }
        });
    
    return res.map( line => line.join(' ') );
}