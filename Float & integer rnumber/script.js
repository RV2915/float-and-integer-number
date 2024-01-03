function checkNumberType() {
    // Get the input value
    var inputValue = document.getElementById("numberInput").value;

    // Check if the input is a valid number
    if (!isNaN(inputValue)) {
        // Check if the number is an integer or a float
        if (Number.isInteger(parseFloat(inputValue))) {
            document.getElementById("result").innerHTML = "The number is an integer.";
        } else {
            document.getElementById("result").innerHTML = "The number is a float.";
        }
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
    }
}