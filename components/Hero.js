import Image from "next/image";

const Hero = () => (
  <div className='hero'>
    <h1> im h1 hereo </h1>
    <Image
      alt='Housewares hero image'
      src='/images/modern-cubic-concrete-planter-with-pink-succulent-plant-painted-concrete-pot-home-decoration-9873423.png'
      layout='fill'
      objectFit='cover'
      quality={100}
    />
  </div>
);

export default Hero;
