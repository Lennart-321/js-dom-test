let nodelist = document.querySelectorAll("h1");
let htmlcoll = document.getElementsByClassName("c1");
let array = [1];

let obj = {
    zero: 0,
    5.01: "Minus five",
    first: "Nummer ett",
    0: "Zero",
    second: 2,
    false: "FALSETX",
    true: "TRUETX",
    17: "Sjutton",
    3: "Three",
    "-5.01": "-5 / 01",
};

var object = {
    "120": "def",
    .12e3: "abc",
    "120.0": "wut",
    first: "1",
    first: "2",
    first: "3",
};
console.log(object[120]); // 'wut'
console.log(object[0.10e3+0.02e3]); // 'wut'
console.log(object[".12e3"]); // undefined
console.log(object["120"]); // 'wut'
console.log(object["first"]);

console.log(array);
console.log(nodelist);
console.log(typeof nodelist);
console.log(nodelist[0]);

console.log(htmlcoll);
console.log(htmlcoll[0].attributeStyleMap);
console.log(typeof htmlcoll);
htmlcoll.header_1 = 5;
console.log(htmlcoll.header_1);
console.log(obj[17]);
console.log(obj["17"]);
console.log(obj[0]);
console.log(obj["0"]);
console.log(obj[false]);
console.log(obj.false);
console.log(obj["false"]);
console.log(obj[true]);
console.log(obj.true);
console.log(obj["true"]);
console.log(obj["zero"]);
console.log(obj[-(-5.01)]);
console.log(obj.first);
console.log(obj[5.01]);
console.log(obj[-5.01]);

console.log("-----------");
for (let m in obj) console.log(m);
console.log("-----------");
//console.log(true.toString());
let h1 = document.getElementById("header_1");
console.log(document);
console.log(h1 instanceof Document);
console.log(h1);
//console.log(getElementsByClassName);
console.log(obj["noMemberX"]);
console.log(obj[1]);
console.log(array["0"]);
document.myInfo = obj;
console.log(document.myInfo);

h1.onclick = function (ev) {
    console.log(document.myInfo);
};
