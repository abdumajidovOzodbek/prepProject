import * as React from "react";

interface BarProps {
  className: string;
}

const Bar: React.FC<BarProps> = ({ className }) => (
  <div className={className} />
);

const Footer: React.FC = () => {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-slate-800 max-md:px-5">
      <div className="flex flex-col mt-2.5 max-w-full w-[452px]">
        <footer>
          <section className="flex gap-4 self-center max-w-full w-[209px]">
            <div className="flex flex-col">
              <Bar className="shrink-0 bg-indigo-600 rounded-none h-[18px]" />
              <Bar className="shrink-0 bg-indigo-600 rounded-none h-[18px]" />
              <Bar className="shrink-0 bg-indigo-600 rounded-none h-[18px]" />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/90b07210666719439056d3bcde8689db18017c46c7f0ab8f16dbb68980666317?apiKey=7e724f8dbe7341e8950e7325e9acf7be&"
              alt="Logo"
              className="shrink-0 self-end mt-6 max-w-full aspect-[4.76] fill-white w-[150px]"
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

export default Footer;