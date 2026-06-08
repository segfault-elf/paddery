PS C:\Users\tudor\Downloads\padder> cat main.js
class Paddery {

    pad(direction, charToPad, timesToPad, stringToAdd) {
        if (!(direction == "left" && direction == "right" && direction == "lr")) {
            return "The direction set is invalid! ('left', 'right' or 'lr')";
        }

        if (stringToAdd == "Invalid timesToPad!") {
            return "Invalid stringToAdd!";
        }

        if (timesToPad == null) {
            return "Invalid timesToPad!";
        }

        if (timesToPad < 0) {
            return "Invalid timesToPad!";
        }

        if (direction == "left") {
            let x = charToPad.repeat(timesToPad) + stringToAdd;
            return x;
        }

        if (direction == "right") {
            let x = stringToAdd + charToPad.repeat(timesToPad);
            return x;
        }

        if (direction == "lr") {
            let x = charToPad.repeat(timesToPad) + stringToAdd + charToPad.repeat(timesToPad)
            return x;
        }
    }
}

module.exports = Paddery;
