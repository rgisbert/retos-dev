function howManyReindeers(reindeerTypes, gifts) {
    return gifts
        .map( gift => {
            let weightToAssign = gift.weight;
            let reindeersFiltered = reindeerTypes
                .filter( r => r.weightCapacity < gift.weight )
                .map( r => ({ 
                    // ...r,
                    type: r.type,
                    weightCapacity: r.weightCapacity,
                    num: 0
                }) )
                .sort( (a, b) => a.weightCapacity - b.weightCapacity);

            while (weightToAssign > 0) {
                reindeersFiltered = reindeersFiltered
                    .map( r => {
                        if (r.weightCapacity <= weightToAssign) {
                            weightToAssign -= r.weightCapacity;

                            return {
                                // ...r,
                                type: r.type,
                                weightCapacity: r.weightCapacity,
                                num: r.num += 1
                            }
                        }

                        return r
                    });
            }

            return {
                country: gift.country,
                reindeers: reindeersFiltered
                    .filter( r => r.num > 0 )
                    .sort( (a, b) => b.weightCapacity - a.weightCapacity)
                    .map( ({ type, num }) => ({ type, num }) )
            }
        });
}