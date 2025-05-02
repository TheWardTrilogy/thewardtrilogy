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
  { id: 2, img: '/images/McNeely.png', caption: 'McNeely' },
  { id: 3, img: '/images/Randall.png', caption: 'Randall' },
  { id: 4, img: '/images/Larsson.png', caption: 'Larsson' },
  { id: 5, img: '/images/ParisaSafi.png', caption: 'Parisa' },
  { id: 6, img: '/images/cherry2.png', caption: 'Cherry' },
  { id: 7, img: '/images/AliceWhite.png', caption: 'Alice' },
  { id: 8, img: '/images/Jesus2.png', caption: 'Jesús' },
  { id: 9, img: '/images/Mary.png', caption: 'Mary' },
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
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-24 sm:py-32">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Dive into the Devious Criminal Mind of W.H. Clark
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            The Ward Trilogy: A gripping mystery thriller trilogy that will take you to the darkest places.
          </p>
          <a
            href="#books"
            className="inline-block bg-teal-400 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-teal-500 transition-transform transform hover:scale-105"
          >
            Explore the Books
          </a>
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-purple-700">W.H. Clark</h2>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            {['books', 'listen', 'characters', 'about'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="hover:text-purple-700 transition-colors capitalize"
                >
                  {section === 'listen' ? 'Listen' : section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* New Release Section */}
        <section id="new-release" className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
            New Release
          </h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-inner hover:shadow-xl transition">
            <a
              href={books[2].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={books[2].img}
                alt={`${books[2].title} cover`}
                className="w-full h-64 sm:h-80 object-cover object-top transition-transform hover:scale-105"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl sm:text-3xl font-medium text-gray-800 mb-4 hover:text-purple-700 transition-colors">
                  {books[2].title}
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
                  The thrilling conclusion to The Ward Trilogy is here! The mystery of Ward's past unravels as we discover what happened on that fateful day in Afghanistan. Find out what moulded Ward into the man he is and finally understand the meaning of the little girl tattooed on his chest. <em>Made in Blood</em> is a rollercoaster journey into the darkness of war and the everlasting consequences of our actions.
                </p>
                <span className="inline-block bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105">
                  Get It Now
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Books Section */}
        <section id="books" className="bg-gray-50 rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 border-b-2 border-teal-200 pb-2">
            Buy the Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {books.map((book) => (
              <a
                key={book.id}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <img
                  src={book.img}
                  alt={`${book.title} cover`}
                  className="w-full h-64 sm:h-80 object-cover object-top transition-transform hover:scale-105"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 hover:text-purple-700 transition-colors">
                    {book.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Listen Section */}
        <section id="listen" className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
            Listen to the Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-gray-50 rounded-lg shadow-md p-6 text-center transition-shadow hover:shadow-lg"
              >
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-2">
                  {book.title}
                </h3>
                <img
                  src="/images/AudibleLogo.jpg"
                  alt="Audible logo"
                  className="mx-auto mb-2 h-12 sm:h-14 w-auto transition-transform hover:scale-110"
                />
                <p className="text-gray-600 text-base sm:text-lg">Audiobook version coming soon.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Characters Section */}
        <section id="characters" className="bg-gray-50 rounded-xl shadow-lg p-6 sm:p-8 overflow-visible">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 border-b-2 border-teal-200 pb-2">
            Characters
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-4 text-gray-700">
            Click the button below if you would like to see some visualizations of some of the characters in The Ward Trilogy. This is how the characters were pictured in the author’s imagination. You are allowed to imagine the characters totally differently.
          </p>
          <button
            onClick={() => setShowChars(!showChars)}
            className="mb-4 px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105"
          >
            {showChars ? 'Hide Characters' : 'Show Characters'}
          </button>
          <p className="text-sm sm:text-base italic text-gray-600 mb-6">
            The visuals were created with AI to bring the world of The Ward Trilogy to life. All characters are fictional, and any resemblance to real persons is purely coincidental.
          </p>
          {showChars && (
            <div className="relative flex items-center justify-center px-16 overflow-visible">
              <button
                onClick={prevChar}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-110 z-20"
              >
                ‹
              </button>
              <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <img
                  src={characters[currentChar].img}
                  alt={characters[currentChar].caption}
                  className="w-48 sm:w-64 mx-auto rounded-lg shadow-inner transition-transform hover:scale-105"
                />
                <p className="mt-4 text-lg sm:text-xl font-medium text-gray-800">
                  {characters[currentChar].caption}
                </p>
              </div>
              <button
                onClick={nextChar}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-110 z-20"
              >
                ›
              </button>
            </div>
          )}
        </section>

        {/* About Section */}
        <section id="about" className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
            About the Author
          </h2>
          <div className="flex justify-center mb-6">
            <img
              src="/images/whclark.png"
              alt="W.H. Clark"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-lg object-cover"
            />
          </div>
          <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-700">
            Wayne, AKA W.H. Clark, is the author behind <em>The Ward Trilogy</em>, a captivating series that blends traditional crime fiction with elements of dark mystery and high-stakes thrills. With a passion for storytelling and a unique voice, Wayne has crafted a world that will thrill and unsettle you.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-700">
            His own story, usually filled with fun and laughter, took a turn after a portentous encounter between his parents and his school teacher. After his teacher informed his parents that Wayne would one day use his intelligence to commit crime, his destiny seemed set. He began plotting the demise of his teacher, but the scheme never moved beyond planning, and he realized his true calling was writing about crime rather than living it.*
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-700">
            Recently described as aloof, Wayne continues to craft compelling stories. Perhaps one day he will resurrect his plot against that teacher, but for now, he channels his creativity into bringing <em>The Ward Trilogy</em> to readers around the world.
          </p>
          <p className="text-sm sm:text-base text-gray-600 mt-4">*Based on a true story.</p>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="max-w-6xl mx-auto text-center text-sm sm:text-base">
            © {new Date().getFullYear()} W.H. Clark. All rights reserved. |{' '}
            <a href="https://twitter.com/whclarkauthor" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-400 transition">
              Twitter (@whclarkauthor)
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}