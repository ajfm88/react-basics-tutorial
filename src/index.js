import React from 'react';
import ReactDOM from 'react-dom';

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src='https://m.media-amazon.com/images/I/91hIsjFuICL._AC_UL320_.jpg'
    alt=''
  />
);

const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => <h4>Amelia Hepworth</h4>;

ReactDOM.render(<BookList />, document.getElementById('root'));
