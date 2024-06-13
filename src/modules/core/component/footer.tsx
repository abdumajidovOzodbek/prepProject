import * as React from "react";
import logo from '../../../static/img/logo.jpg'


const Fp: React.FC = () => {
  return (
    <div className="flex justify-center self-center items-center px-16 py-20 bg-slate-800 max-md:px-5">
      <div className="flex flex-col mt-2.5 max-w-full w-[452px]">
        <footer className="flex flex-col items-center ">
          <section className="flex gap-4 max-w-full w-[209px]">
            <img className="h-[58px] w-[42px]" src={logo} alt="logo" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/90b07210666719439056d3bcde8689db18017c46c7f0ab8f16dbb68980666317?apiKey=7e724f8dbe7341e8950e7325e9acf7be&"
              alt="Logo"
              className="shrink-0 self-center mt-6 max-w-full aspect-[4.76] fill-white w-[150px]"
            />
          </section>
          <p className="mt-14 text-xl leading-5 text-white max-md:mt-10 max-md:max-w-full">
            Copyright ©2021 Prep Contest. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Fp;