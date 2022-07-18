module.exports = function toReadable (number) {
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) return units[number];
    else if (number < 100) {
        if (number % 10 === 0) return dozens[number/10 - 2];
        else return dozens[Math.floor(number/10 - 2)] + ' ' + units[number%10];
    } else if (number >= 100) {
        if (number % 100 === 0) {
            return units[number/100] + ' hundred';
        } else {
            let total = units[Math.floor(number/100)] + ' hundred';
            if (Math.floor(number % 100) < 20) {
                total += ' ' + units[number % 100];
            } else if (Math.floor(number % 100) % 10 === 0) {
                total += ' ' + dozens[Math.floor(number % 100) / 10 - 2];
            } else {
                total += ' ' + dozens[Math.floor(Math.floor(number % 100) / 10) - 2] + ' ' + units[number%10];
            }
            return total;
        }
    }
}
