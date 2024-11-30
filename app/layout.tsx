import "@/app/global.scss";
import {ReactNode} from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
