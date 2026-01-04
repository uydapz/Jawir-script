const fs = require("fs");

let vars = {};

function evalCond(expr) {
    try {
        return Function(...Object.keys(vars), "return " + expr)(...Object.values(vars));
    } catch {
        return false;
    }
}

function runLines(lines, start = 0, end = lines.length) {
    let i = start;

    while (i < end) {
        let line = lines[i].trim();
        if (line === "" || line.startsWith("#")) { i++; continue; }

        // PRINT
        if (line.startsWith("nyocot ")) {
            console.log(line.slice(7).replace(/"/g, ""));
            i++;
            continue;
        }

        // VARIABLE
        if (line.startsWith("nyawang ")) {
            let m = line.match(/nyawang\s+(\w+)\s*=\s*(.*)/);
            vars[m[1]] = isNaN(m[2]) ? m[2].replace(/"/g, "") : Number(m[2]);
            i++;
            continue;
        }

        // LOOP
        if (line.startsWith("baleni ")) {
            let m = line.match(/baleni\s+(\w+|\d+)\s+times/);
            let count = isNaN(m[1]) ? vars[m[1]] : Number(m[1]);

            let blockStart = i + 1;
            let blockEnd = blockStart;

            while (lines[blockEnd].trim() !== "mandekolehmubaleni") {
                blockEnd++;
            }

            for (let j = 0; j < count; j++) {
                runLines(lines, blockStart, blockEnd);
            }

            i = blockEnd + 1;
            continue;
        }

        // IF
        if (line.startsWith("umpamane ")) {
            let m = line.match(/umpamane\s+(.*)\s+then/);
            let cond = evalCond(m[1]);

            let ifStart = i + 1;
            let elseStart = -1;
            let endIf = ifStart;

            while (lines[endIf].trim() !== "mandekngayal") {
                if (lines[endIf].trim() === "coro gak") elseStart = endIf + 1;
                endIf++;
            }

            if (cond) {
                let stop = elseStart === -1 ? endIf : elseStart - 1;
                runLines(lines, ifStart, stop);
            } else if (elseStart !== -1) {
                runLines(lines, elseStart, endIf);
            }

            i = endIf + 1;
            continue;
        }

        i++;
    }
}

// RUN FROM CLI
const file = process.argv[2];
const code = fs.readFileSync(file, "utf8");
runLines(code.split("\n"));