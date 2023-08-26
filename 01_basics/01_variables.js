const accountId = 238712
var accountEmail = "rachit@gmail.com"
let accountPassword = "2876"
accountCity = 'pilibhit'
let accountState;

// accountId = 2 // not allowed

accountEmail = "rawat@gmail.com"
accountPassword = '1221'
accountCity = "bareilly"

console.table([accountEmail,accountPassword,accountCity,accountState])
/*
prefer not to use var
 because of issue in block scope and functional scope.
*/

console.log(accountId);