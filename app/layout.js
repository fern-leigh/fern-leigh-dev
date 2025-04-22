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
        {children}
      </body>
    </html>
  );
}
