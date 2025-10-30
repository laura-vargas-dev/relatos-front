import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-image">
        {book.imagen_url ? (
          <img src={book.imagen_url} alt={book.titulo} />
        ) : (
          <div className="no-image">Sin imagen</div>
        )}
      </div>
      <div className="book-info">
        <h3>{book.titulo}</h3>
        <p className="author">Por: {book.autor}</p>
        <p className="description">{book.descripcion}</p>
        <p className="price">€{book.precio}</p>
      </div>
    </div>
  );
};

export default BookCard;