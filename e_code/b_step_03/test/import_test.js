// import_test.js

import codeFile from "./import_before.js";

const elWrap = document.querySelector("#wrap");
console.log(codeFile());

elWrap.innerHTML = codeFile();