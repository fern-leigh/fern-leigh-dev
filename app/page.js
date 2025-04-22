import Image from 'next/image';
import './global.scss';

export default function Home() {
  return (
    <div >
      <header>
        <div className='logo-container'>
          <Image
            src='/logo.png'
            // className='logo' 
            sizes="(max-width: 768px) 100vw, (max-width: 2000px) 50vw, 33vw"
            // width='600'
            // height='250'
            fill={true}
            alt='company log showing the company name, fern-leigh.dev, and a tagline with the words we dev / consultant / mentor'></Image>
        </div>
      </header>
      <main >
        <h1>Full website coming soon!</h1>
      </main>
      <footer >

      </footer>
    </div>
  );
}
