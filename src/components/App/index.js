import React, {Component} from 'react';

//data
import books from 'data/books.json';

//components
import Book from 'components/Book';

//styles
import * as S from './styles';
import * as A from 'styles/shared-components';

class App extends Component {
  render() {
    console.log(books);
    return (
      <S.Home className="">
        <S.Header>
          <S.Links>
            <S.Logo href="/">
              <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png" />
            </S.Logo>
            <S.Link href="www.google.com">
              view books
            </S.Link>
            <S.Link href="www.google.com">Order</S.Link>
            <S.Link href="www.google.com">Contact</S.Link>
            <S.Link href="www.google.com">Location</S.Link>
          </S.Links>
        </S.Header>
        <S.Content>
          {books.map(book => (
            <Book
              key={book.id}
              title={book.title}
              genre={book.genre}
              author={book.author}
              price={book.price}
              image={book.image}
            />
          ))}
        </S.Content>
      </S.Home>
    );
  }
}

export default App;
