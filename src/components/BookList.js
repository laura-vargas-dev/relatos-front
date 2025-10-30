import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/libros`);
        setBooks(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los libros');
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="book-list">
      <h2>Catálogo de Libros</h2>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;