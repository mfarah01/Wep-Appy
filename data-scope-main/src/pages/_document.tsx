import Document, { Html, Head, Main, NextScript } from "next/document"

import React from "react"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Data Analytics Services | Datascope Analytics"
          />
          <meta
            name="twitter:description"
            content="We identify trends & patterns to convert raw business data into actionable insights."
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dw9t4raq4/image/upload/v1664472615/datascope/2_uhwg9o.png"
          />
          <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/favicons/favicon.ico?"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
