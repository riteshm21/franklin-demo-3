import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const div = document.createElement('div');

 var data = fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json());
	  
	alert("data"+data);  
  block.append(data.title);
}
