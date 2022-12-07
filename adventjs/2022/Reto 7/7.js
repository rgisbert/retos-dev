// * Solución 1
function getGiftsToRefill(a1, a2, a3) {
    const res = [];
    const checkStore = (a, x, y) => {
        const storeX = new Set(x);
        const storeY = new Set(y);

        new Set(a).forEach( gift => {
            if ( !res.includes( gift ) && !storeX.has( gift ) && !storeY.has( gift ) )
                res.push( gift )
        });
    }

    checkStore( a1, a2, a3 );
    checkStore( a2, a1, a3 );
    checkStore( a3, a1, a2 );

    return res
}

// * Solución 2
function getGiftsToRefill(a1, a2, a3) {
    const res = []
    const stock = [
      [...new Set(a1)],
      [...new Set(a2)],
      [...new Set(a3)],
    ];
  
    stock.forEach( (store, i, arrStore) => {
      const otherStores = arrStore.filter( (_, idx) => idx != i).flat()

      store.forEach( gift => {
        if ( !res.includes( gift ) && !otherStores.includes( gift ) )
          res.push( gift )
      })
    });
    
    return res;
}

// * Solución 3
function getGiftsToRefill(a1, a2, a3) {
    const res = []
    const products = {}
    const stock = [
      [...new Set(a1)],
      [...new Set(a2)],
      [...new Set(a3)],
    ];
  
    stock.forEach( store => {
      store.forEach( gift => {
        if ( !products[gift] ) products[gift] = 0
        
        products[gift]++
      })
    });
  
    Object.entries( products ).forEach( ( [ gift, units ] ) => {
      if ( units === 1) res.push( gift )
    } )
    
    return res;
}

// ! Solución DE LA COMUNIDAD
function getGiftsToRefill(a1, a2, a3) {
    return [...new Set([...a1, ...a2, ...a3])]
        .filter( gift => {
            return a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1
        });
}
