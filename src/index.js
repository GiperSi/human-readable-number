module.exports = function toReadable (number) {
    var numb = ['zero','one','two','three','four','five','six','seven','eight','nine','ten',
             'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    var tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var hundred = 'hundred';
    var biggest = ['thousand', 'million', 'billion'];
    let nameNumber;
    num = number.toString();
    if (number < 100) {
        if (number >= 20) {
            if (number % 10 === 0) {
                nameNumber = `${tens[(num / 10) - 2]}`;
                return nameNumber;
            } else {
                nameNumber = `${tens[num[0] - 2]} ${numb[(num % 10)]}`;
                return nameNumber;
            }
        } else {
            nameNumber = `${numb[num]}`;
            return nameNumber;
        }
    } else if (number >= 100) {
        if (number % 100 < 20 && number % 100 !== 0) {
            nameNumber = `${numb[num[0]]} ${hundred} ${numb[num % 100]}`;
            return nameNumber;
        } else if (number % 100 >= 20 && (number % 100) % 10 === 0) {
            nameNumber = `${numb[num[0]]} ${hundred} ${tens[num[1] - 2]}`;
            return nameNumber;
        } else if (number % 100 == 0) {
            nameNumber = `${numb[num[0]]} ${hundred}`;
            return nameNumber;
        } else {
            nameNumber = `${numb[num[0]]} ${hundred} ${tens[num[1] - 2]} ${numb[num[2]]}`;
            return nameNumber;
        } 
    } 
}
