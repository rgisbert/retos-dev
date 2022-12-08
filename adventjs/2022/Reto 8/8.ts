function checkPart(part: string): boolean {
    const turn = ( wordToReverse: string ): string => [...wordToReverse].reverse().join('');

    const word = part.toLowerCase();
    const reverseWord = turn( word );

    if ( word === reverseWord ) return true;
    
    /**
     * Para cada letra del array, se elimina y se compara palíndromo
     * Estos booleanos se guardan en un array y se comprueba si hay alguno verdadero
     */
    const res = [...word].map( (_, i) => {
        // Nueva palabra sin la letra de esta iteración
        const tmpWord = [...word].filter( (_, j) => i != j ).join('');
        const tmpReverseWord = turn( tmpWord );

        return tmpWord === tmpReverseWord;
    });
    
    return res.some(el => el);
}