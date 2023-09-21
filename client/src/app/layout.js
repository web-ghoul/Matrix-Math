import Main from "./Main";

export const metadata = {
  title: "Matrix Math",
  description: "App For Manage Students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
        </>
      </head>
      <body className={`body`}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
