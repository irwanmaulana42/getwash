import { Providers } from "./providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactNode } from "react";
import { fonts } from "./fonts";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './assets/css/index.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <html lang="en" className={fonts.rubik.variable}>
        <body>
          <Providers>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </Providers>
        </body>
      </html>
    </>
  );
}
