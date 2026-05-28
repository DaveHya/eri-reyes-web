import "./globals.css";

export const metadata = {
  title: "Soy Erí Reyes | Event Designer & Dirección Creativa",
  description: "Dirección Creativa | Event Designer | Founder Agencia Experiences 360",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Lato', sans-serif" }}>{children}</body>
    </html>
  );
}
