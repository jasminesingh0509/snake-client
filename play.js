const  connect  = require('./client');

const handleUserInput = function(data) {
    if (data === '\u0003') {
      process.exit();
    } 
};


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

console.log('Connecting ...');
connect();
setupInput();



// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
