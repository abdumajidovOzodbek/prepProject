
const Advers: React.FC = () => {
    return (
        <div className="flex flex-col w-[516px] max-md:ml-0 max-md:w-full">
            <aside className="flex flex-col grow pt-6 pr-10 pb-16 pl-20 w-full text-white bg-slate-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/532b820f86d5e71f8c17a470fd12239cebdb7aa68be389107306a50d7d7277cf?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" className="self-start max-w-full aspect-[3.57] w-[130px]" alt="" />
                <h1 className="mt-52 mr-5 text-3xl font-bold leading-10 w-[312px] max-md:mt-10 max-md:mr-2.5">
                    Добро пожаловать в Prep Contest Тестирование!👋
                </h1>
                <p className="mt-9 text-xl leading-8 text-slate-400 w-[333px]">
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке.
                </p>
                <footer className="mt-20 text-lg leading-7 max-md:mt-10">
                    ©2021 Prep Contest. All rights reserved.
                </footer>
            </aside>
        </div>
    )
}
export default Advers