// * Solución 1
function getCompleted(part, total) {
    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    const getValueInSecs = ( val ) => {
        const [ hours, minutes, seconds ] = val.split(':');

        return Number( seconds ) + ( 60 * Number( minutes ) ) + ( 60 * 60 * Number( hours ) );    
    };
    const getMCD = ( secs ) => {
        let res = {};
        let primeIndex = 0;

        while ( secs > 1 ) {
            const prime = primeNumbers[primeIndex];
            while ( secs % prime === 0 ) {
                secs /= prime;

                if ( !res[prime] ) res[prime] = 0;
                res[prime]++;
            }

            if ( primeIndex < primeNumbers.length - 1 )
                primeIndex++ ;
            else {
                res[secs] = 1;
                break;
            }
        }

        return res;
    };
    const getDivider = (a, b) => {
        // const keys = Object.keys({ ...a, ...b});
        const keys = [ ...new Set( Object.keys(a).concat( Object.keys( b )) )]
        const mcd = keys.map( key => {
            if ( !a[`${key}`] || !b[`${key}`] ) return 0;
            
            const minValueKey = Math.min( a[`${key}`], b[`${key}`] );
            return Number( key ) ** minValueKey;
        })
            .filter( n => n > 0)
            .reduce( (acc, value) => acc * value);

        return mcd;
    };
    
    const timePart = {
        value: part,
        valueInSecs: getValueInSecs(part),
        mcd: {}
    };
    const timeTotal = {
        value: total,
        valueInSecs: getValueInSecs(total),
        mcd: {}
    };

    timePart.mcd = getMCD( timePart.valueInSecs )
    timeTotal.mcd = getMCD( timeTotal.valueInSecs )

    const num = getDivider( timePart.mcd, timeTotal.mcd );

    return `${ timePart.valueInSecs / num }/${ timeTotal.valueInSecs / num }`;
}

// * Solución 1B: adaptada con clases, al probarla da error por usar "this"
function getCompleted(part, total) {
    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    class Time {
        constructor( value ) {
            this.value = value;
            this.valueInSecs = this.#getValueInSecs();
            this.mcd = this.#getMCD( this.valueInSecs );
        }

        #getValueInSecs() {
            const [ hours, minutes, seconds ] = this.value.split(':');
    
            return Number( seconds ) + ( 60 * Number( minutes ) ) + ( 60 * 60 * Number( hours ) );    
        }


        #getMCD = ( secs ) => {
            let res = {};
            let primeIndex = 0;

            while ( secs > 1 ) {
                const prime = primeNumbers[primeIndex];
                while ( secs % prime === 0 ) {
                    secs /= prime;

                    if ( !res[prime] ) res[prime] = 0;
                    res[prime]++;
                }

                if ( primeIndex < primeNumbers.length - 1 )
                    primeIndex++ ;
                else {
                    res[secs] = 1;
                    break;
                }
            }

            return res;
        };
    }
    
    const timePart = new Time( part );
    const timeTotal = new Time( total );
   
    const getDivider = (a, b) => {
        const keys = Object.keys({ ...a, ...b});
        // const keys = [ ...new Set( Object.keys(a).concat( Object.keys( b )) )]
        const mcd = keys.map( key => {
            if ( !a[`${key}`] || !b[`${key}`] ) return 0;
            
            const minValueKey = Math.min( a[`${key}`], b[`${key}`] );
            return Number( key ) ** minValueKey;
        })
            .filter( n => n > 0)
            .reduce( (acc, value) => acc * value);

        return mcd;
    };

    const num = getDivider( timePart.mcd, timeTotal.mcd );

    return `${ timePart.valueInSecs / num }/${ timeTotal.valueInSecs / num }`;
}
