function getFilesToBackup(lastBackup, changes) {
    const results = changes
        .filter( ([, change]) => change > lastBackup)
        .map( ([id]) => id )
        .sort( (a, b) => a - b );

    return [...new Set( results )];
}