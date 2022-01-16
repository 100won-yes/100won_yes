// import_before.js

const data = ["banana", "melon"];

const codeFile = () => {
  const fnLI = (data) => {
    data.forEach((rel, idx) => {
      let li = document.createElement("li");
      li.innerText = rel;
      // console.log(li);
    });
  };

  return `
  <h1>hello</h1>
  <ul>
    ${fnLI(data)}
  </ul>
  `;
};

export default codeFile;