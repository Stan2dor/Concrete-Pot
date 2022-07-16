import Image from "next/image";

const Hero = () => (
  <div className='hero'>
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
