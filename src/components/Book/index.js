import React from 'react';

import * as S from './styles';

function Book({title, genre, author, price, image}) {
  return (
    <S.Book>
      <S.Image src={image} />
      <S.TextContainer>
        <S.Text>{title}</S.Text>
        <S.Price>{price}</S.Price>
        <br />
        <br />
        <S.Text>
          <i>{genre}</i> by <b>{author}</b>
        </S.Text>
      </S.TextContainer>
    </S.Book>
  );
}

export default Book;
