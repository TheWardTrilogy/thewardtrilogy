// File: src/app/layout.js
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Load our local Tailwind build */}
        <link
          rel="stylesheet"
          href="/tailwind.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
