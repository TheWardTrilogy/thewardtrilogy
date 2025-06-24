'use client';
import React, { useState, useEffect } from 'react';

const books = [
  {
    id: 1,
    title: 'An End to a Silence',
    link: 'https://amzn.to/4lZBnll',
    img: 'https://m.media-amazon.com/images/I/81AdEVHSKML._SL1500_.jpg',
  },
  {
    id: 2,
    title: 'If I Scream',
    link: 'https://amzn.to/43gQqiY',
    img: 'https://m.media-amazon.com/images/I/81bBro8tX-L._SL1500_.jpg',
  },
  {
    id: 3,
    title: 'Made in Blood',
    link: 'https://amzn.to/4jzDLg5',
    img: 'https://m.media-amazon.com/images/I/81sX9Q0lgEL._SL1500_.jpg',
  },
];

const characters = [
  { id: 1, img: '/images/Ward-and-Jesus.png', caption: 'Ward and Jesús' },
  { id: 2, img: '/images/McNeely.png', caption: 'McNeely' },
  { id: 3, img: '/images/Randall.png', caption: 'Randall' },
  { id: 4, img: '/images/Larsson.png', caption: 'Larsson' },
  { id: 5, img: '/images/ParisaSafi.png', caption: 'Parisa Safi' },
  { id: 6, img: '/images/cherry2.png', caption: 'Cherry' },
  { id: 7, img: '/images/AliceWhite.png', caption: 'Alice' },
  { id: 8, img: '/images/Jesus2.png', caption: 'Jesús' },
  { id: 9, img: '/images/Newton.png', caption: 'Newton' },
  { id: 10, img: '/images/Mary.png', caption: 'Mary' },
];

export default function PageClient() {
  const [showChars, setShowChars] = useState(false);
  const [currentChar, setCurrentChar] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextChar = () =>
    setCurrentChar((prev) => (prev + 1) % characters.length);
  const prevChar = () =>
    setCurrentChar((prev) => (prev - 1 + characters.length) % characters.length);

  const handleLinkClick = (link) => {
    console.log(`Attempting to navigate to: ${link}`);
    window.location.href = link; // Force navigation to ensure it works
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-24 sm:py-32"
        style={{
          backgroundImage: 'url(/images/title-image4.png), linear-gradient(to right, rgba(28, 0, 135, 0.6), rgba(135, 0, 47, 0.6))',
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            The Ward Trilogy by W.H. Clark
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white drop-shadow">
            A gripping mystery thriller trilogy that will take you to the darkest places.
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
          <h2 className="text-2xl font-bold text-gray-600">W.H. Clark</h2>
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
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-400 pb-2">
            It's here!
          </h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-inner hover:shadow-xl transition">
            <a
              href={books[2].link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); handleLinkClick(books[2].link); }}
            >
              <img
                src="/images/kindle-and-pback-mockup.png"
                alt={`${books[2].title} mockup`}
                className="w-64 sm:w-80 h-auto mx-auto object-cover transition-transform hover:scale-105"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl sm:text-3xl font-medium text-gray-800 mb-4 hover:text-purple-700 transition-colors">
                  {books[2].title}
                </h3>
                <p className="text-lg text-center sm:text-xl text-gray-900 mb-6 leading-relaxed">
                  <em>The thrilling conclusion to The Ward Trilogy is here!</em>
                </p>
                <p className="text-lg sm:text-xl text-left text-gray-600 mb-6 leading-relaxed">
                  2011. Seven years after a disastrous operation in Afghanistan, ex-sniper Detective Ward receives a crushing call: his spotter, Randall—<em>his one true love</em>—is dead. Grief-stricken and driven by a relentless pursuit of justice, Ward is forced to confront the devastating memories of Koh-e-Umid. His search for answers unveils a deadly conspiracy, pitting him against mercenary killer Tyler Ewart in a cat-and-mouse game that stretches from the mountains of Afghanistan to the highest levels of power.
                </p>
                <p className="text-lg sm:text-xl text-left text-gray-600 mb-6 leading-relaxed">
                  As the bodies pile up, Ward fights for his life to unearth the chilling truth about what happened that fateful day in 2004.
                </p>
                <p className="text-lg sm:text-xl text-center text-gray-900 mb-6 leading-relaxed">
                  <em>Experience the pulse-pounding finale of The Ward Trilogy today!</em>
                </p>
                <span className="inline-block bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105">
                  Get it Now
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Books Section */}
        <section id="books" className="bg-gray-50 rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-400 pb-2">
            Read the Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {books.map((book) => (
              <a
                key={book.id}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); handleLinkClick(book.link); }}
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
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-400 pb-2">
            Listen to the Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-gray-50 rounded-lg shadow-md p-6 text-center transition-shadow hover:shadow-lg"
              >
                <h3 className="text-xl sm:text-2xl font-medium text-gray-500 mb-2">
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
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-400 pb-2">
            Characters
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-4 text-gray-700">
            Click the button below if you would like to see some visualizations of some of the characters in The Ward Trilogy. This is how the characters were pictured in the author’s imagination. You are invited to imagine the characters exactly how you want to.
          </p>
          <button
            onClick={() => setShowChars(!showChars)}
            className="mb-4 px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105"
          >
            {showChars ? 'Hide Characters' : 'Show Characters'}
          </button>
          <p className="text-sm sm:text-base italic text-gray-600 mb-6">
            The visuals were created with the assistance of AI to bring the world of The Ward Trilogy to life. All characters are fictional, and any resemblance to real persons is purely coincidental.
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

        {/* About Section with Reviews */}
        <section id="about" className="bg-gray-100 rounded-xl shadow-lg p-6 sm:p-8">
          <div className="flex gap-8">
            <div className="w-1/2">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-400 pb-2">
                About the Author
              </h2>
              <div className="flex justify-center mb-6">
                <img
                  src="/images/whclark2.png"
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
            </div>
            <div className="w-1/2 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-800 mb-6 border-b-2 border-gray-400 pb-2">
                Praise for The Ward Trilogy
              </h2>
              <div className="bg-white rounded-lg shadow-md p-4 relative">
                <span className="absolute text-4xl text-gray-300 -top-4 -left-4">“</span>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed pl-6 font-serif">
                  <em>Kept you guessing until the last page.</em> Great characters. Story never falters and leads you down many paths and possibilities.
                </p>
                <span className="absolute text-4xl text-gray-300 -bottom-4 -right-4">”</span>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 relative">
                <span className="absolute text-4xl text-gray-300 -top-4 -left-4">“</span>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed pl-6 font-serif">
                  <em>This book was a surprise.</em> One of the best of the year. Literally hard to put down. Each chapter made me want to read the next. Full of surprises and turns. No part of it disappointed.
                </p>
                <span className="absolute text-4xl text-gray-300 -bottom-4 -right-4">”</span>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 relative">
                <span className="absolute text-4xl text-gray-300 -top-4 -left-4">“</span>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed pl-6 font-serif">
                  <em>OUTSTANDING DEBUT NOVEL.</em> I loved everything about this book, the great characters, the totally cool dog and the great story. I can't wait to read the second installment, IF I SCREAM. I highly recommend this book.
                </p>
                <span className="absolute text-4xl text-gray-300 -bottom-4 -right-4">”</span>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 relative">
                <span className="absolute text-4xl text-gray-300 -top-4 -left-4">“</span>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed pl-6 font-serif">
                  <em>This was a 25 star book.</em> I loved AN END TO SILENCE, the first book, but IF I SCREAM literally had me screaming. A totally to-die-for book. I can't wait for the final installment. Thanks author Clark for two - so far - totally fantastic books.
                </p>
                <span className="absolute text-4xl text-gray-300 -bottom-4 -right-4">”</span>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 relative">
                <span className="absolute text-4xl text-gray-300 -top-4 -left-4">“</span>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed pl-6 font-serif">
                  <em>Really great tale.</em> Powerful characters and great police procedures. A very twisted plot and ending. Our hero is a mystery but a very real human. Love the Ward stories.
                </p>
                <span className="absolute text-4xl text-gray-300 -bottom-4 -right-4">”</span>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 relative">
                <span className="absolute text-4xl text-gray-300 -top-4 -left-4">“</span>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed pl-6 font-serif">
                  <em>This is the first book by W. H. Clark that I have read.</em> It won't be the last. The storyline was great. Many twists and turns throughout the book. You won't be sorry if thrillers are what you like.
                </p>
                <span className="absolute text-4xl text-gray-300 -bottom-4 -right-4">”</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {isClient && (
              <div id="mc_embed_shell" className="mb-8">
                <div id="mc_embed_signup" className="bg-gray-700 rounded-lg p-6 max-w-md mx-auto">
                  <form
                    action="https://whclarkauthor.us10.list-manage.com/subscribe/post?u=77cc1b9022d8e56a2d5b84930&id=8beab79974&f_id=007d4ee4f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate space-y-4"
                    target="_self"
                    noValidate
                  >
                    <div id="mc_embed_signup_scroll">
                      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 text-center">
                        Newsletter Sign-up
                      </h2>
                      <div className="indicates-required text-gray-300 text-sm mb-2 text-center">
                        <span className="asterisk text-red-400">*</span> indicates required
                      </div>
                      <div className="mc-field-group">
                        <label htmlFor="mce-EMAIL" className="block text-gray-200 text-sm font-medium mb-1">
                          Email Address <span className="asterisk text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="EMAIL"
                          className="required email w-full px-4 py-2 bg-gray-600 text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                          id="mce-EMAIL"
                          required
                        />
                      </div>
                      <div id="mce-responses" className="clear foot space-y-2">
                        <div className="response text-red-400 text-sm" id="mce-error-response" style={{ display: 'none' }}></div>
                        <div className="response text-green-400 text-sm" id="mce-success-response" style={{ display: 'none' }}></div>
                      </div>
                      <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                        <input type="text" name="b_77cc1b9022d8e56a2d5b84930_8beab79974" tabIndex="-1" />
                      </div>
                      <div className="optionalParent">
                        <div className="clear foot text-center space-y-4 mt-6">
                          <input
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="button bg-teal-400 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-teal-500 transition-transform transform hover:scale-105 cursor-pointer"
                            value="Subscribe"
                          />
                          <p className="mt-4">
                            <a href="http://eepurl.com/jdR7D-" title="Mailchimp - email marketing made easy and fun">
                              <span className="inline-block bg-transparent rounded">
                                <img
                                  className="refferal_badge h-8 w-auto"
                                  src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                                  alt="Intuit Mailchimp"
                                />
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
            <div className="text-center text-sm sm:text-base">
              © {new Date().getFullYear()} W.H. Clark. All rights reserved. |{' '}
              <a
                href="https://twitter.com/whclarkauthor"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); handleLinkClick("https://twitter.com/whclarkauthor"); }}
                className="text-teal-300 hover:text-teal-400 transition"
              >
                Twitter (@whclarkauthor)
              </a>
              <p className="text-xs text-gray-400 mt-2">As an Amazon Associate, I earn from qualifying purchases.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}