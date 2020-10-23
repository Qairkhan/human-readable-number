module.exports = function toReadable (number) {
    const numbers = [
        [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        [" ", " ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    ]
    return sotni(number).trim();
    function sotni(number) {
        if (number === 0) {
            return 'zero';
        } else if (number >= 100) {
            return numbers[0][Math.floor(number / 100)] + ' hundred' + " " + desyat(Math.floor(number % 100));
        }
        else {
            return desyat(number);
        }
    }
    function desyat(number) {
        if (number < 10) {
            return numbers[0][number]
        } else if (number <= 99 && number >= 20) {
            return numbers[2][Math.floor(number / 10)] + unit(number);
        } else {
            return numbers[1][number - 10];
        }
    }

    function unit(number) {
        if (!number % 10) {
            return;
        } else {
            return ' ' + numbers[0][number % 10];
        }
    }
}
