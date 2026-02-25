import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

// Provide a minimal pages/_document to satisfy Next's check on Html imports.
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

