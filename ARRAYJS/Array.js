const number = [2, 3, 5, 7, 1, 6];
document.getElementById("arrange").innerHTML = number;

const names = ["Sai", "aar", "Priya", "kaviya", "Asvika"];
document.getElementById("arrangename").innerHTML = names;
const age = ["10,45,12,23,12,46"];
//document.getElementById("age").innerHTML = age;

function myFunction() {
    number.sort();
    document.getElementById("arrange").innerHTML = number;
}

function myFunctions() {
    names.sort();
    document.getElementById("arrangename").innerHTML = names;
}

function myFunction2() {
    document.writeln(number.reverse() + "<br>")
    document.writeln(names.reverse() + "<br>")
}

function myFunction3() {
    number.shift();
    alert(number);
}

function myFunction4() {
    document.getElementById("adding").innerHTML = number.concat(names, age);
}