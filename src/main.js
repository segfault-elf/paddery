class Paddery {
    
    pad(direction, charToPad, timesToPad, stringToAdd) {

        timesToPad = Math.round(timesToPad);
        
        if (direction !== "left" && direction !== "right" && direction !== "lr") {
            return "The direction set is invalid! ('left', 'right' or 'lr')";
        }

        if (timesToPad == null || timesToPad < 0) {
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

    pad_c(config, stringToAdd) {
        let leftchar = config.left.char;
        let leftTimesToPad = Math.round(config.left.timesToPad);
        let rightchar = config.right.char;
        let rightTimesToPad = Math.round(config.right.timesToPad);

        let x = leftchar.repeat(leftTimesToPad) + stringToAdd + rightchar.repeat(rightTimesToPad);
        return x;
    }
}

module.exports = Paddery;