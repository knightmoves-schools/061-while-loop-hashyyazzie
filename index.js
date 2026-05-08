/**
 * Prepends 'done - ' to each todo description using a while loop.
 * @param {string[]} todos - An array of todo descriptions.
 * @returns {string[]} - A new array with modified descriptions.
 */
function markAsDone(todos) {
  const modifiedTodos = [];
  let i = 0;

  // Loop as long as the counter is less than the array length
  while (i < todos.length) {
    modifiedTodos.push('done - ' + todos[i]);
    i++; // Increment the counter to avoid an infinite loop
  }

  return modifiedTodos;
}

// Example usage:
const tasks = ['water plants', 'pay bills'];
const result = markAsDone(tasks);

console.log(result); 
// Output: ['done - water plants', 'done - pay bills']
