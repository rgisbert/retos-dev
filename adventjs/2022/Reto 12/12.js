function selectSleigh(distance, sleighs) {
    const battery = 20;
    const res = sleighs
        .map( ({ name, consumption }) => 
            ({
                name,
                total: consumption * distance
            })
        )
        .filter( sleigh => sleigh.total <= battery)
        .at(-1);

    if (res && res.name) return res.name
    return null;
}
