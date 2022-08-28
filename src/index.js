import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';
// setup vars
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/91hIsjFuICL._AC_UL320_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
};
const secondBook = {
  img: 'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg',
  title: 'Our Class is a Family',
  author: 'Shannon Olsen',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}
const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
