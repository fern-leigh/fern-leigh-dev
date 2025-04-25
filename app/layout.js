import Image from 'next/image';
import { Poppins } from "next/font/google";
import "./global.scss";



const poppins = Poppins({
  weight: ['200', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "fern-leigh.dev",
  description: "Showcasing my career as a freelance web dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>
          <div className='logo-container'>
            <Image
              src='/logo.png'
              fill={true}
              alt='company log showing the company name, fern-leigh.dev, and a tagline with the words we dev / consultant / mentor'></Image>
          </div>
        </header>
        {children}
        <footer >

        </footer>
      </body>
    </html>
  );
}
