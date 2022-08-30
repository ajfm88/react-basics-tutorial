import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';
// setup vars
const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/91hIsjFuICL._AC_UL320_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/81ICvbFe2+L._AC_UY218_.jpg',
    title: 'The Vanishing Half: A Novel',
    author: 'Brit Bennett',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
