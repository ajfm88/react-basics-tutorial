import React from 'react';
import ReactDOM from 'react-dom';

// JSX Rules
// return single element
// div /  selection / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function Greeting() {
  return (
    <section>
      <article>
        <h3>Hello people</h3>
        <ul>
          <li>
            <a href='#'>hello world</a>
          </li>
        </ul>
        <h1>Hello World!</h1>
      </article>
    </section>
  );
}

ReactDOM.render(<Greeting />, document.getElementById('root'));
