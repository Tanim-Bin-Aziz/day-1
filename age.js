const elderBrother = 28;
const me = 24;

const whoIsElder = me > elderBrother;
console.log(whoIsElder);

if (me > elderBrother) {
  console.log("You are elder"); // not print
}
if (me >= elderBrother) {
  console.log("ur are elder");
} else {
  console.log(" ur brother is elder");
}

if (me > elderBrother) {
  console.log("you are elder");
} else if (elderBrother > me) {
  console.log("you're brother is elder");
} else {
  console.log("You're both same");
}
