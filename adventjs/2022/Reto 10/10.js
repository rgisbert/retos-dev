function checkJump(heights) {
    const maxIndex = heights.findIndex( h => h === Math.max(...heights) );

    if (maxIndex === 0 || maxIndex === heights.length - 1) return false;
    
    const checkEvery = (num, i, arr) => (i === 0) ? true : (arr[i - 1] <= num);

    const firstHalf = heights.slice( 0, maxIndex );
    const isUpOk = firstHalf.every( checkEvery );
    if ( !isUpOk ) return false; 

    const secondHalf = heights.slice( maxIndex ).reverse();
    const isDownOk = secondHalf.every( checkEvery );
    return isDownOk;
}