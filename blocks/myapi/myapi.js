import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const div = document.createElement('div');

const title = printTitle();

	alert("title"+title);  
  block.append(title);
}


async function printTitle() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  
  response.ok;     // => false
  response.status; // => 404

  const text = await response.title();
  return text;
}



