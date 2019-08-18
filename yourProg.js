require('dotenv').config()

if(process.env.NAME_ABCD === "jiber-jaber") {
  console.log("name checked");
}

if(process.env.PASS_1111 === "12345678") {
  console.log("first pw checked");
}

if(process.env.PASS_2222 === "87654321") {
  console.log("second pw checked");
}