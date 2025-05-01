'use client';
import React, { useState } from 'react';

const books = [
  {
    id: 1,
    title: 'An End to a Silence',
    link: 'https://a.co/d/0u6Bv5M',
    img: 'https://m.media-amazon.com/images/I/81cDlXSjJLL._SY522_.jpg',
  },
  {
    id: 2,
    title: 'If I Scream',
    link: 'https://a.co/d/5aeZ6uP',
    img: 'https://m.media-amazon.com/images/I/71n-MNRaJGL._SY522_.jpg',
  },
  {
    id: 3,
    title: 'Made in Blood',
    link: 'https://a.co/d/YOUR_ASIN3',
    img: '/images/made-in-blood-cover-kindle-2.jpg',
  },
];

const characters = [
  { id: 1, img: '/images/Ward-and-Jesus.png', caption: 'Ward and Jesús' },
  { id: 2, img: '/images/McNeely.png',        caption: 'McNeely' },
  { id: 3, img: '/images/Randall.png',        caption: 'Randall' },
  { id: 4, img: '/images/Larsson.png',        caption: 'Larsson' },
  { id: 5, img: '/images/ParisaSafi.png',     caption: 'Parisa' },
  { id: 6, img: '/images/cherry2.png',     caption: 'Cherry' },
  { id: 7, img: '/images/Alice.png',     caption: 'Alice' },
];

export default function PageClient() {
  const [showChars, setShowChars] = useState(false);
  const [currentChar, setCurrentChar] = useState(0);

  const nextChar = () =>
    setCurrentChar((prev) => (prev + 1) % characters.length);
  const prevChar = () =>
    setCurrentChar((prev) => (prev - 1 + characters.length) % characters.length);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Dive into the Devious Criminal Mind of W.H. Clark
          </h1>
          <p className="text-lg mb-6">
            The Ward Trilogy: A gripping mystery thriller trilogy that will take you to the darkest places.
          </p>
          <a
            href="#books"
            className="inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Explore the Books
          </a>
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-white shadow sticky top-0 z-20">
        <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-purple-600">W.H. Clark</h2>
          <ul className="flex space-x-6 text-gray-700">
            {['books', 'listen', 'characters', 'about'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="hover:text-purple-600 transition capitalize"
                >
                  {section === 'listen' ? 'Listen' : section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Books Section */}
        <section id="books">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Buy the Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <a
                key={book.id}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={book.img}
                  alt={`${book.title} cover`}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-4">
                  <h3 className="text-xl font-medium text-gray-800 hover:text-purple-600 transition">
                    {book.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </section>

{/* Listen Section */}
<section id="listen">
  <h2 className="text-3xl font-semibold text-gray-800 mb-8">
    Listen to the Books
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {books.map((book) => (
      <div
        key={book.id}
        className="bg-white rounded-lg shadow p-6 text-center"
      >
        <h3 className="text-xl font-medium text-gray-800 mb-2">
          {book.title}
        </h3>
        {/* Audible Logo */}
        <img
          src="/images/AudibleLogo.jpg"
          alt="Audible logo"
          className="mx-auto mb-2 h-12 w-auto"
        />
        <p className="text-gray-600">Audiobook version coming soon.</p>
      </div>
    ))}
  </div>
</section>

        {/* Characters Section */}
        <section id="characters">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Characters
          </h2>
          <p className="text-lg leading-relaxed mb-2">
            Click the button below if you would like to see some visualizations of
            some of the characters in The Ward Trilogy. This is how the characters
            were pictured in the author’s puny brain. Your larger brain might
            picture the characters totally differently.
          </p>
          <button
            onClick={() => setShowChars(!showChars)}
            className="mb-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            {showChars ? 'Hide Characters' : 'Show Characters'}
          </button>
          <p className="text-sm italic text-gray-600 mb-4">
            The visuals were created with AI to bring the world of The Ward Trilogy
            to life. All characters are fictional, and any resemblance to real
            persons is purely coincidental.
          </p>
          {showChars && (
            <div className="relative flex items-center justify-center">
              <button
                onClick={prevChar}
                className="absolute left-0 p-3 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition"
              >
                ‹
              </button>
              <img
                src={characters[currentChar].img}
                alt={characters[currentChar].caption}
                className="w-64 mx-8 rounded shadow"
              />
              <button
                onClick={nextChar}
                className="absolute right-0 p-3 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition"
              >
                ›
              </button>
            </div>
          )}
        </section>

        {/* About Section */}
        <section id="about">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            About the Author
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Wayne, AKA W.H. Clark, is the author behind <em>The Ward Trilogy</em>,
            a captivating series that blends traditional crime fiction with elements
            of dark mystery and high-stakes thrills. With a passion for storytelling
            and a unique voice, Wayne has crafted a world that will thrill and
            unsettle you.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            His own story, usually filled with fun and laughter, took a turn after a
            portentous encounter between his parents and his school teacher. After
            his teacher informed his parents that Wayne would one day use his
            intelligence to commit crime, his destiny seemed set. He began plotting
            the demise of his teacher, but the scheme never moved beyond planning,
            and he realized his true calling was writing about crime rather than
            living it.*
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Recently described as aloof, Wayne continues to craft compelling
            stories. Perhaps one day he will resurrect his plot against that
            teacher, but for now, he channels his creativity into bringing
            <em>The Ward Trilogy</em> to readers around the world.
          </p>
          <p className="text-sm text-gray-600 mt-4">*Based on a true story.</p>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 py-6">
          <div className="max-w-5xl mx-auto text-center text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} W.H. Clark. All rights
            reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
