import { createOptimizedPicture } from '../../scripts/aem.js';

export default async function decorate(block) {
  /* change to ul, li */
  const div = document.createElement('div');


          div.classList.add('myapi-class');
        
		
const title = printTitle();

	alert("title"+title);  
  block.append(title);
}


async function printTitle() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');


  const text = await response.title();
  
  $('#myapi-class').add(text);
  return text;
}



