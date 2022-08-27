import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';
function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}
const author = 'Amelia Hepworth';
const Book = () => {
  const title = 'I Love You to the Moon and Back';
  return (
    <article className='book'>
      <img
        src='https://m.media-amazon.com/images/I/91hIsjFuICL._AC_UL320_.jpg'
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
