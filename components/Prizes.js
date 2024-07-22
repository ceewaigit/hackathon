"use client";

import React from 'react';

const Prizes = () => {
  return (
    <section id="prizes" className="container mx-auto max-w-screen-xl pt-4 my-28">
      <h2 className="font-heading font-bold text-primary mt-6 mb-3 text-center text-3xl md:text-4xl">Prizes.</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <PrizeCard place="1st" amount="RTP $1649" name="RTX 4080 Super" image="https://asset.msi.com/resize/image/global/product/product_1704703437cd0bb1ce5104acf13cdad77245989172.png62405b38c58fe0f07fcef2367d8a9ba1/400.png" isFirst={true} />
        <PrizeCard place="2nd" amount="RTP $899" name="iPad Air M2 (128GB)" image="https://www.imagineonline.store/cdn/shop/files/iPadAirM2Chip_hero_small_2x_iPadAirM2Chip.png?1714511032849" />
        <PrizeCard place="3rd" amount="RTP $549" name="PS5 Digital (Non-Slim)" image="https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$" />
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <BlurryPrizeCard place="???" amount="ohhh you tot" image="https://cdn-icons-png.flaticon.com/512/3176/3176367.png" />
        <BlurryPrizeCard place="???" amount="ohhh you tot" image="https://cdn-icons-png.flaticon.com/512/3800/3800918.png" />
        <BlurryPrizeCard place="???" amount="ohhh you tot" image="https://cdn-icons-png.flaticon.com/512/3176/3176367.png" />
        <BlurryPrizeCard place="???" amount="ohhh you tot" image="https://cdn-icons-png.flaticon.com/512/3800/3800918.png" />
      </div>
      <div className="text-center gradient-animation text-primary bg-muted w-full md:w-4/5 mx-auto p-8 rounded-2xl font-mono mt-12">
        <p className='w-1/2 mx-auto text-xl'>Top 10 finalists: <br /> <span className='text-secondary font-bold'>Apple Airpods 2</span></p>
      </div>
      <div>
        <hr className="w-full m-10" />
        <p className="my-3 text-primary font-mono mt-0 z-10 text-center text-sm md:text-base">
          Stand a chance to win <span className='text-accent'>$10,000</span> worth of prizes! <br />
          Specialized prizes for individual <br /> categories will be revealed at round 2.
        </p>
      </div>
    </section>
  );
}

const PrizeCard = ({ place, amount, name, image, isFirst = false }) => (
  <div className="bg-primary rounded-2xl shadow-inner shadow-black flex flex-col items-center mt-4 px-4 md:px-8 pb-6 md:pb-10 gap-4 md:gap-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs">
    <div className={`-mt-4 px-3 py-1 bg-primary rounded-full flex flex-col justify-center items-center w-max font-bold ${isFirst ? 'text-accent border-accent border-2' : 'text-secondary'}`}>
      <p>{place}</p>
    </div>
    <div className="w-full flex flex-col gap-4 md:gap-6 items-stretch">
      <div className="flex flex-row justify-center">
        <img src={image} alt={place} className="w-1/3 md:w-1/2 min-w-[9vw]" />
      </div>
      <h2 className="font-mono font-bold text-secondary text-center text-xl md:text-2xl">{name}</h2>
      <h2 className="font-bold text-secondary text-center text-md md:text-lg text-smu">{amount}</h2>
    </div>
  </div>
);

const BlurryPrizeCard = ({ place, amount, image, isFirst = false }) => (
  <div className="bg-primary rounded-2xl shadow-inner shadow-black flex flex-col items-center mt-4 px-4 md:px-8 pb-6 md:pb-10 gap-4 md:gap-10 w-full sm:w-1/4 md:w-1/5 lg:w-1/6 max-w-xs">
    <div className={`-mt-4 px-3 py-1 bg-primary rounded-full flex flex-col justify-center items-center w-max font-bold ${isFirst ? 'text-accent border-accent border-2' : 'text-secondary'}`}>
      <p>{place}</p>
    </div>
    <div className="w-full flex flex-col gap-4 md:gap-10 items-stretch blur-2xl">
      <div className="flex flex-row justify-center">
        <img src={image} alt={place} className="w-1/3 md:w-1/2" />
      </div>
      <h2 className="font-mono font-bold text-secondary text-center text-md md:text-lg">{amount}</h2>
    </div>
  </div>
);

export default Prizes;