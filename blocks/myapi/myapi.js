import { createOptimizedPicture } from '../../scripts/aem.js';

export default async function decorate(block) {
  /* change to ul, li */
  const div = document.createElement('div');


          div.className  = 'myapi-class';
        
		
 fetchData(block);

	
}


async function fetchData(block) {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.clone().json())
block.append(response.title);
  console.log(response);
}



