import * as React from "react";

type Language = {
  src: string;
  text: string;
};

const Header: React.FC = () => (
  <header className="flex flex-col items-center pt-5 bg-white">
    <div className="flex gap-5 justify-between w-full leading-[100%] max-w-[1122px] max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-5 my-auto text-lg font-semibold text-slate-800 max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/248cb16737fc7270d1e23e257c8cf52b062416ae6918f8ede6c813a2b0e25aeb?apiKey=7e724f8dbe7341e8950e7325e9acf7be&"
          alt="Logo"
          className="shrink-0 max-w-full aspect-[3.57] w-[130px]"
        />
        <nav className="flex flex-auto gap-5 justify-between pr-5 my-auto max-md:flex-wrap">
          <a href="#" className="hover:underline">
            Reja
          </a>
          <a href="#" className="hover:underline">
            Qabul qilish talablari
          </a>
          <a href="#" className="hover:underline">
            Korsatmalar
          </a>
          <a href="#" className="hover:underline">
            Saralash
          </a>
        </nav>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-2 justify-center my-auto text-sm font-semibold text-center capitalize text-slate-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a002deda07b960447a442e8a2a78a622074baf14dc6fcc61dae425c3ce18b9c?apiKey=7e724f8dbe7341e8950e7325e9acf7be&"
            alt="Language Icon"
            className="shrink-0 aspect-square w-[18px]"
          />
          <div className="justify-center px-5 my-auto">O’zbek tili</div>
        </div>
        <button className="justify-center px-5 py-3.5 text-base font-bold text-white rounded-lg bg-slate-800">
          Sinovdan o’ting
        </button>
      </div>
    </div>
    <hr className="self-stretch mt-5 w-full border border-solid bg-slate-500 border-slate-500 min-h-[1px] max-md:max-w-full" />
  </header>
);

type BannerProps = {
  leftImageSrc: string;
  rightImageSrc: string;
  text: string;
};

const Banner: React.FC<BannerProps> = ({ leftImageSrc, rightImageSrc, text }) => (
  <section className="flex gap-5 items-start px-5 mt-8 w-full text-5xl font-bold text-center leading-[72px] max-w-[1120px] text-slate-800 max-md:flex-wrap max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
    <img
      loading="lazy"
      src={leftImageSrc}
      alt=""
      className="shrink-0 self-start aspect-[0.75] w-[49px]"
    />
    <div className="flex-auto my-auto max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
      {text}
    </div>
    <img
      loading="lazy"
      src={rightImageSrc}
      alt=""
      className="shrink-0 self-end mt-32 aspect-[0.86] w-[50px] max-md:mt-10"
    />
  </section>
);

type LanguageGroupProps = {
  peopleCountText: string;
};

const LanguageGroup: React.FC<LanguageGroupProps> = ({ peopleCountText }) => (
  <section className="flex gap-5 items-start mt-5 max-w-full w-[742px] max-md:flex-wrap">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d70d4ea9dbac6d277ddcba9ab63db8f97598bb7a691b283c846fb08a4e707317?apiKey=7e724f8dbe7341e8950e7325e9acf7be&"
      alt=""
      className="shrink-0 self-end mt-28 aspect-square w-[79px] max-md:mt-10"
    />
    <div className="flex flex-auto gap-2 self-start max-md:flex-wrap">
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <div className="flex gap-2.5 max-md:flex-wrap">
          <div className="flex gap-0 text-sm font-bold leading-4 text-white whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9addfcdc655c68bb592a8f5e644412316a986d82df4b6a66005d83c4e742086a?apiKey=7e724f8dbe7341e8950e7325e9acf7be&"
              alt=""
              className="shrink-0 border-2 border-white border-solid aspect-square w-[51px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d55f37ba1196ea31db3531cd30e479be69b191d2b5d8b4eddcd1854bde7663d2?apiKey=7e724f8dbe7341e8950e7325e9acf7be&"
              alt=""
              className="shrink-0 border-2 border-white border-solid aspect-square w-[51px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5e1d65a87ff8ec88d829c7448fb2e5aad1631fed1f44cc98b473302e6c3e300?apiKey=7e724f8dbe7341e8950e7325e9acf7be&"
              alt=""
              className="shrink-0 border-2 border-white border-solid aspect-square w-[51px]"
            />
            <div className="justify-center items-center self-start px-2.5 bg-indigo-600 border-2 border-white border-solid h-[50px] rounded-[1933.333px] w-[50px]">
              +120
            </div>
          </div>
          <div className="flex-auto my-auto text-base leading-6 text-slate-800">
            {peopleCountText}
          </div>
        </div>
        <button className="justify-center self-center px-8 py-5 mt-8 text-xl font-semibold leading-5 text-white bg-indigo-600 rounded-lg max-md:px-5">
          Оставить заявку
        </button>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6a3157088d8e29a2a95d22c5623a2d9735eea71c93553ef90d580f6f31ed3b1?apiKey=7e724f8dbe7341e8950e7325e9acf7be&"
        alt=""
        className="shrink-0 self-end mt-16 aspect-[1.03] w-[74px] max-md:mt-10"
      />
    </div>
  </section>
);

const InfoSection: React.FC = () => (
  <section className="mt-32 w-full max-w-[1105px] max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
          <h2 className="text-4xl font-bold leading-[54px] text-slate-800 max-md:max-w-full">
            Сайт рыбатекст поможет дизайнеру, верстальщику
          </h2>
          <p className="mt-12 text-xl font-medium leading-8 text-slate-500 max-md:mt-10 max-md:max-w-full">
            Siz IT o'quv kursini tugatdingiz yoki Internet tarmog'i orqali mustaqil o'rgandingiz, ammo ishga joylashishda qiyinchiliklarga uchrayapsizmi?
            Biz sizga yordam beramiz. Ushbu loyiha qobiliyatli yoshlarni topib, yetuk kadrlar bo'lib yetishishiga yordam berish uchun tashkil qilindi.
          </p>
        </div>
      </article>
      <figure className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/450a6305feff8e371fa3ad4dff2a377c1859e5a2fe4b70b1d9b668db031d2519?apiKey=7e724f8dbe7341e8950e7325e9acf7be&"
          alt=""
          className="grow w-full aspect-[0.99] max-md:mt-10 max-md:max-w-full"
        />
      </figure>
    </div>
  </section>
);

const MyComponent: React.FC = () => {
  const banners = [
    { leftImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9ad58be8b1e9e3651201a504dae218e4c501d476c2fd078c37fdcdaf3c6a9bc?apiKey=7e724f8dbe7341e8950e7325e9acf7be&", rightImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/abf4cc5edfa34aac70cb0cfd1f9fd53d8a3e350f0555a8a1fb3b9d9c0c93a885?apiKey=7e724f8dbe7341e8950e7325e9acf7be&", text: "Ваша работа мечты уже ждет вас, начните сегодня!" },
    { leftImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9addfcdc655c68bb592a8f5e644412316a986d82df4b6a66005d83c4e742086a?apiKey=7e724f8dbe7341e8950e7325e9acf7be&", rightImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d55f37ba1196ea31db3531cd30e479be69b191d2b5d8b4eddcd1854bde7663d2?apiKey=7e724f8dbe7341e8950e7325e9acf7be&", text: "Сайт рыбатекст поможет дизайнеру, верстальщику" },
  ];

  const languageGroupProps = "человек уже стали участниками групп по своим направлениям";

  return (
    <div>
      <Header />
      {banners.map((banner, index) => (
        <Banner key={index} {...banner} />
      ))}
      <LanguageGroup peopleCountText={languageGroupProps} />
      <InfoSection />
    </div>
  );
};

export default MyComponent;