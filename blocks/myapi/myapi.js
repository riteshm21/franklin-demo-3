import { createOptimizedPicture } from '../../scripts/aem.js';
const a = "";
const title = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    return data.title;
  });

const printTitle = async () => {
   a = await title;
  console.log(a);
};


export default function decorate(block) {
  /* change to ul, li */
  const div = document.createElement('div');

printTitle();

	alert("printTitle"+a);  
  block.append(a);
}





