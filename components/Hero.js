import Image from "next/image";

const Hero = () => (
  <div className='hero'>
    <h1> im h1 hereo </h1>
    <Image
      alt='Housewares hero image'
      src='/images/concrete_pot_098754.jpeg'
      layout='fill'
      // objectFit='cover'
      quality={100}
    />
  </div>
);

export default Hero;
