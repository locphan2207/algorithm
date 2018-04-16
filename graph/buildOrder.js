// Given list of projects and list of dependencies (it shows which project is
// dependent on which project). Write a function to show the build order
// Assume project list is an array of projects,
// and dependencies is nx2 arrays with n is number of dependencies.

const Queue = require('../stack_queue/Queue');

function buildOrder(projects, dependencies) {
  let result = '';
  // Scan through dependencies list and store which depending projects to hash
  const hash1 = {};
  const hash2 = {};
  dependencies.forEach(dependency => {
    if (hash1[dependency[0]]) hash1[dependency[0]].push(dependency[1]);
    else hash1[dependency[0]] = [dependency[1]];
    hash2[dependency[1]] = true;
  });

  // Interating through project list to see which project is not depending
  // by checking with the hash that we stored above.
  // Then enqueue that project
  const queue = new Queue();
  projects.forEach(project => {
    if (!hash2[project]) {
      queue.enqueue(project);
    }
  });

  if (queue.length() < 1) return 'Cycle order, cannot build';

  while (queue.length() > 0) {
    const current = queue.dequeue();
    result += ` ${current}`;
    if (hash1[current]) {
      hash1[current].forEach(project => {
        if (queue.peak() !== project) queue.enqueue(project);
      });
    }
  }

  return result.slice(1);
}

const projects = ['a','b','c','d','e','f'];
const dependencies = [['a','d'],['f','b'],['b','d'],['f','a'],['d','c']];
console.log(buildOrder(projects, dependencies));
