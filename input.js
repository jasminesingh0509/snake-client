let connection;

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  } else if (data === 'w') {
    connection.write('Move: up');
  } else if (data === 's') {
    connection.write('Move: down');
  } else if (data === 'a') {
    connection.write('Move: left');
  } else if (data === 'd') {
    connection.write('Move: right');
  }
};


const setupInput = function(conn) {
  connection = conn;
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.resume();
stdin.on('data', handleUserInput);
return stdin;
};

setupInput();

module.exports = setupInput; 

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)