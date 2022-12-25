function sortToys(toys, positions) {
    return positions
        .map( (posi, i) => ({[posi]: toys[i]}))
        .sort( (a, b) => Object.keys(a) - Object.keys(b))
        .map( toy => Object.values( toy ) )
        .flat();
}