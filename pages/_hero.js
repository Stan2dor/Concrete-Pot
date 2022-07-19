import React from "react";
// import { GiFlowerPot } from "react-icons/Gi";
// import { TbFlower } from "react-icons/Tb";

import Image from "next/image";

const Hero = () => (
  <React.StrictMode>
    <div className='hero'>
      <div className='hero-content'>
        <h1>Ghivece de flori</h1>
        <hr className='zig-zag-line' />
        <h2>GOLD LINE</h2>
        <p>
          Plante in ghivece decorative de flori minimaliste realizate manual din
          ciment
        </p>
        <button type='button'>Vezi catalog</button>
        {/* <div className='demoWrapper'>
          <div></div>
        </div> */}
      </div>

      {/* <GiFlowerPot size={64} style={{ color: "#d7be69" }} /> */}
      {/* <TbFlower className='icon-flower' /> */}

      <Image
        alt='Housewares hero image'
        src='/images/modern-cubic-concrete-planter-with-pink-succulent-plant-painted-concrete-pot-home-decoration-9873423.png'
        layout='fill'
        objectFit='cover'
        quality={100}
      />
    </div>
  </React.StrictMode>
);

export default Hero;
