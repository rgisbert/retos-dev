function executeCommands(commands) {
    const cpu = {
        V00: 0,
        V01: 0,
        V02: 0,
        V03: 0,
        V04: 0,
        V05: 0,
        V06: 0,
        V07: 0,
    }
    const preventOverflow = key => {
        if (cpu[key] < 0) return cpu[key] += 256;
        if (cpu[key] > 255) return cpu[key] -= 256;
    }

    const command = {
        MOV: register => {
            const [a, b] = register.split(',');
            cpu[b] = ( isNaN(Number(a)) )
                ? cpu[a]
                : Number(a);

            preventOverflow(b);
        },

        ADD: register => {
            const [x, y] = register.split(',');
            cpu[x] += cpu[y];

            preventOverflow(x);
        },

        DEC: register => {
            cpu[register]--;

            preventOverflow(register);
        },

        INC: register => {
            cpu[register]++;

            preventOverflow(register);
        },

        JMP: (num, positionJMP) => {
            const i = Number(num);
            const newCommands = commands.slice(i, positionJMP);

            while (cpu.V00 !== 0) {
                newCommands
                    .forEach( cmd => {
                        const [operation, args] = cmd.split(' ');
                        command[operation](args);
                    });
            }
        },
    }

    commands.forEach( (cmd, i) => {
        const [operation, args] = cmd.split(' ');

        operation === 'JMP'
            ? command[operation](args, i)
            : command[operation](args)
    });

    return Object.values(cpu) 
}
