var x = prompt("Enter the Numbers", "500");
try {
    alert(eval(x));
} catch (e) {
    alert("Alphabets are Invalid", +e.description);
} finally {
    alert("Result dis");
}
alert("Thank You");