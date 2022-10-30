import Nav from './nav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
