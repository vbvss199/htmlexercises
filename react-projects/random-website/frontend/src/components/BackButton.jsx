import React from 'react';
import { Link } from 'react-router-dom';

export default function BackButton({ destination = '/' }) {

  return (
    <Link to={destination}>
      <button
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
      >
        Back
      </button>
    </Link>
  );
}

// this is used inside the show.jsx to show the book details 