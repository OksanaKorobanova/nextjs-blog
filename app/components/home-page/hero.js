import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/logo.webp'
          alt='My photo'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Oksana</h1>
      <p>
        A blog about Front end development (React, Typescript, Next.js, etc.)
      </p>
    </section>
  );
}

export default Hero;
