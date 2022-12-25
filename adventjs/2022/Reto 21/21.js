function printTable(gifts) {
    const tableAttrs = {
        title: ['Gift', 'Quantity'],
        mark: {
            bottom: '*',
            horizontal: '-',
            top: '+',
            vertical: '|',
        },
    }
    const res = []
    const header = ( table, maxLengths ) => {
        const {horizontal, top, vertical} = tableAttrs.mark;
        let line = '';

        tableAttrs.title.forEach( (title, i) =>
            line += `${vertical} ${title.padEnd(maxLengths[i])} `);
        line += vertical;

        table.push(top.repeat(line.length))
        table.push(line);

        line = ``
        tableAttrs.title.forEach( (title, i) => 
            line += `${vertical} ${horizontal.repeat(maxLengths[i])} `);
        line += vertical;
        table.push(line);
    }
    const body = ( table, gifts, maxLengths ) => {
        const {vertical} = tableAttrs.mark;
        gifts.forEach( gift => {
            let line = '';

            Object
                .values(gift)
                .forEach( (g, i) =>
                    line += `${vertical} ${String(g).padEnd(maxLengths[i])} `
                );
            
            line += vertical
            table.push(line);
        });
    };
    const footer = ( table, headerLineLength ) => 
        table.push( tableAttrs.mark.bottom.repeat( headerLineLength ) )
    
    const maxLengthsPerPosition = Object
        .keys(...gifts)
        .map( key => Math.max( ...gifts.map( g => String(g[key]).length) ) )
        .map( (g, i) => 
            g < tableAttrs.title[i].length ? tableAttrs.title[i].length : g
        );

    header( res, maxLengthsPerPosition );
    body( res, gifts, maxLengthsPerPosition );
    footer( res, res[0].length );

    return res.join('\n')
}
