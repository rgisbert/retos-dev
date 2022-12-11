// * Solución 1
function countTime(leds) {
    const turnLightsOn = [ leds ];

    while( turnLightsOn.at(-1).includes(0)) {
        turnLightsOn.push(
            turnLightsOn
                .at(-1)
                .map( ( light, i, arr ) => {
                    if (light) return light;

                    // return arr[i - 1] ?? arr.at(-1)

                    const indexReference = ( i === 0) ? arr.length - 1 : i - 1;
                    return arr[indexReference]
                })
        );
    }

    return (turnLightsOn.length - 1) * 7;
}

// * Solución 2
function countTime(leds) {
    let tries = 0;
    leds = leds.map( led => Boolean( led ) );

    while ( leds.includes( false ) ) {
        const original = [...leds];

        leds.forEach( ( led, i ) => {
            const prevValue = original[i - 1] ?? original.at(-1);

            leds[i] = ( led || prevValue ) ? true : false;
        } );

        tries++;
    }

    return tries * 7;
}