// File: src/app/layout.js
import React from 'react';

// Using Tailwind CSS via CDN to avoid PostCSS configuration errors
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
