import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        media="screen"
        href="https://fontlibrary.org//face/droid-arabic-kufi"
        type="text/css"
      />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
