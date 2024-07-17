import { createOptimizedPicture } from '../../scripts/aem.js';

export default async function decorate(block) {
  /* change to ul, li */
  const div = document.createElement('div');


          div.className  = 'myapi-class';
        
		
const title = fetchData();

	alert("title"+title);  
  block.append(title);
}


async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // waits until the request completes...
  console.log(response);
}



