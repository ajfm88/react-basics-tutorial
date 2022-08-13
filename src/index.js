import React from 'react';
import ReactDOM from 'react-dom';

// stateless functional component
// always return JSX

function Greeting() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   );
// };

ReactDOM.render(<Greeting />, document.getElementById('root'));
