const accountId = 14453;
let accountEmail = "kaifmondal@gmail.com"
var accountPassword = "12345"
  accountCity = "Kolkata"
  let accountState;

// accountId = 2 // not allowed

accountEmail = "hccc@gmail.com"
accountPassword = "2134"
accountCity = "Bengaluru"
 
console.log(accountId);
/*
Prefernot to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
