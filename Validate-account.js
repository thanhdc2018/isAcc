function isAcc (str){
    regex = /^[A-Za-z0-9_]{6,23}$/;
    if (regex.test(str)) {
        return true;
    }else {return false;}
}

let accs = [
    "123abc_",
    "_abc123",
    "______",
    "123456",
    "abcdefg"
];
let notaccs = [
    ".@",
    "12345",
    "1234_",
    "abcde"
];
console.log("TRUE acc");
for (acc of accs) {
   console.log(acc + ": " + isAcc(acc));
}
console.log("FALSE acc");
for (notacc of notaccs) {
    console.log(notacc + ": " + isAcc(notacc))
};