import "./globals.css";
import HeaderController from "@/components/Header/HeaderController";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <HeaderController/>
        {children}
      </body>
    </html>
  );
}
