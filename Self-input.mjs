import readline from 'readline';
import romanNumeralConverter from './romanNumeral.mjs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function promptUser() {
    rl.question("Enter a number between 1 and 1000 (or 'exit' to quit) ", (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log("Bye!");
            rl.close();
            return;
        }

        const num = parseInt(input, 10);

        if (isNaN(num) || num < 1 || num > 1000) {
            console.log("Invalid input");
        } else {
            const result = romanNumeralConverter(num);
            console.log(`Roman numeral for ${num}: ${result}`)
        }

        promptUser();
    });
}

promptUser();