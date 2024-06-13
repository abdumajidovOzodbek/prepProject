import * as React from "react";
import youngImg from '../../../static/img/portrait-young-business-woman-video-call-from-home-1.png'
import groupImg1 from '../../../static/img/group-33972.png'
import groupImg2 from '../../../static/img/group-34007.png'
import lineImg from '../../../static/img/line-11.svg'
import manImg from '../../../static/img/pensive-man-classroom-with-computers-1.png'
import smilingImg from '../../../static/img/portrait-smiling-handsome-man-eyeglasses-2.png'
import { LogoProps } from "../types/type";
import { StepProps } from "../interfaces/interface";

const Logo: React.FC<LogoProps> = ({ src, alt, className }) => (
    <div className="flex justify-center items-center px-14 py-5 max-md:px-5">
        <img loading="lazy" src={src} alt={alt} className={className} />
    </div>
);
const Step: React.FC<StepProps> = ({ number, label }) => (
    <div className="flex flex-col">
        <div className="flex gap-1.5 self-center px-4 py-5 font-bold text-white whitespace-nowrap bg-indigo-600 rounded-2xl h-[65px] leading-[150%] w-[65px]">
            <div className="text-4xl">{number}</div>
            <div className="self-start mt-4 text-base lowercase">OY</div>
        </div>
        <div className="mt-6 text-xl font-semibold leading-8 text-slate-800">{label}</div>
    </div>
);

const Managment: React.FC = () => {
    const logos = [
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/68a8b303c6a58eda2e0baa6f8cc58d1995dd8e695d48c5edf3187afa74ba7361?apiKey=7e724f8dbe7341e8950e7325e9acf7be&',
            alt: 'First logo description',
            className: 'aspect-[5] w-[147px]',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7b45fcd99b98f7f0a8a4a6e759d80a27214a270b3bcde63b2082c75ec7b55600?apiKey=7e724f8dbe7341e8950e7325e9acf7be&',
            alt: 'Second logo description',
            className: 'shrink-0 max-w-full aspect-[3.7] w-[264px]',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5b63d619d0ec12f1ba3ce3825e1d1799ae768a0576fb6ad7d100c7762b42e0fa?apiKey=7e724f8dbe7341e8950e7325e9acf7be&',
            alt: 'Third logo description',
            className: 'aspect-[4.35] w-[214px]',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/45aeb60fccaf26a3feb8215402d309e84aed7904277b46de4f97474a6d742a6b?apiKey=7e724f8dbe7341e8950e7325e9acf7be&',
            alt: 'Fourth logo description',
            className: 'shrink-0 max-w-full aspect-[3.7] w-[264px]',
        },
    ];

    return (
        <div className="flex flex-col items-center pt-5 bg-white">

            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/965ea875d3a48b553359749fb795a10444de0eee68e33662298a921f8689f2a9?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="mt-10 aspect-[0.71] w-[46px] max-md:mt-10" />
            <section className="flex gap-5 items-start px-5 mt-8 w-full text-5xl font-bold text-center leading-[72px] max-w-[1120px] text-slate-800 max-md:flex-wrap max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9ad58be8b1e9e3651201a504dae218e4c501d476c2fd078c37fdcdaf3c6a9bc?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="shrink-0 self-start aspect-[0.75] w-[49px]" />
                <h1 className="flex-auto my-auto max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">Ваша работа мечты уже ждет вас, начните сегодня!</h1>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/abf4cc5edfa34aac70cb0cfd1f9fd53d8a3e350f0555a8a1fb3b9d9c0c93a885?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="shrink-0 self-end mt-32 aspect-[0.86] w-[50px] max-md:mt-10" />
            </section>
            <article className="flex gap-5 items-start mt-5 max-w-full w-[742px] max-md:flex-wrap">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d70d4ea9dbac6d277ddcba9ab63db8f97598bb7a691b283c846fb08a4e707317?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="shrink-0 self-end mt-28 aspect-square w-[79px] max-md:mt-10" />
                <div className="flex flex-auto gap-2 self-start max-md:flex-wrap">
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div className="flex gap-2.5 max-md:flex-wrap">
                            <div className="flex gap-0 text-sm font-bold leading-4 text-white whitespace-nowrap">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9addfcdc655c68bb592a8f5e644412316a986d82df4b6a66005d83c4e742086a?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="shrink-0 border-2 border-white border-solid aspect-square w-[51px]" />
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d55f37ba1196ea31db3531cd30e479be69b191d2b5d8b4eddcd1854bde7663d2?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="shrink-0 border-2 border-white border-solid aspect-square w-[51px]" />
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5e1d65a87ff8ec88d829c7448fb2e5aad1631fed1f44cc98b473302e6c3e300?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="shrink-0 border-2 border-white border-solid aspect-square w-[51px]" />
                                <div className="justify-center items-center self-center py-3 px-1 bg-indigo-600 border-2 border-white border-solid h-[50px] rounded-[1933.333px] w-[50px]">+120</div>
                            </div>
                            <p className="text-base mr-10 text-start w-[308px] text-slate-800">человек уже стали участниками групп по своим направлениям</p>
                        </div>
                        <button className="justify-center self-center px-8 py-5 mt-8 text-xl font-semibold leading-5 text-white bg-indigo-600 rounded-lg max-md:px-5">Оставить заявку</button>
                    </div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6a3157088d8e29a2a95d22c5623a2d9735eea71c93553ef90d580f6f31ed3b1?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="shrink-0 self-end mt-16 aspect-[1.03] w-[74px] max-md:mt-10" />
                </div>
            </article>
            <section className="mt-32 w-full max-w-[1105px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
                            <h2 className="text-4xl font-bold leading-[54px] text-slate-800 max-md:max-w-full">Сайт рыбатекст поможет дизайнеру, верстальщику</h2>
                            <p className="mt-12 text-xl font-medium leading-8 text-slate-500 max-md:mt-10 max-md:max-w-full">
                                Siz IT o'quv kursini tugatdingiz yoki Internet tarmog'i orqali mustaqil o'rgandingiz, ammo ishga joylashishda qiyinchiliklarga uchrayapsizmi? Biz sizga yordam beramiz.
                                Ushbu loyiha qobiliyatli yoshlarni topib, yetuk kadrlar bo'lib yetishishiga yordam berish uchun tashkil qilindi.
                            </p>
                        </div>
                    </article>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/450a6305feff8e371fa3ad4dff2a377c1859e5a2fe4b70b1d9b668db031d2519?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="grow w-full aspect-[0.99] max-md:mt-10 max-md:max-w-full" />
                    </div>
                </div>
            </section>
            <section className="mt-32 w-full max-w-[1086px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c1e436e13a07afb1287edc387f4c70967eb3f9de4d5c8818dedc60ca18f918d?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="grow w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full" />
                    </div>
                    <article className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
                            <h2 className="text-4xl font-bold leading-[54px] text-slate-800 max-md:max-w-full">
                                Aksariyat kompaniyalar ishga joylashishda sizdan ish staji va portfolio so'raydi
                            </h2>
                            <p className="mt-8 text-xl font-medium leading-8 text-slate-500 max-md:max-w-full">
                                Tabiyki endigini bu sohaga kirib kelayotgan internlarda bular mavjud emas. Ma'lum bir ish stajiga ega bo'lish va turli xil qiziqarli lohiyalardan iborat portfolioni hosil qilish uchun
                                ushbu loyihada amaliyot o'tashni taklif qilamiz. <br />
                                Amaliyotchilar soni chegaralangan va konkurs asosida saralab olinadi. Eng yuqori ball to'plagan 10 kishi bepul amaliyot o'tash imkoniyatiga ega bo'ladi.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            <section className="flex justify-center items-center self-stretch px-16 py-20 mt-32 w-full bg-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <article className="flex flex-col mt-8 w-full max-w-[1115px] max-md:max-w-full">
                    <h2 className="self-center text-4xl font-bold leading-[54px] text-slate-800 max-md:max-w-full">Har bir IT sohasi uchun o'quv rejasi</h2>
                    <div className="mt-16 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <Step number={1} label="Kasbning asosiy bilimlari bilan tanishish uchun nazariy bilimlarni to'ldirish va mustahkamlash" />
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <Step number={2} label="Nazariyani mustahkamlash uchun amaliy loyihalar bilan ishlash" />
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <Step number={3} label="Guruhlarda ishlash, jamoada ishlash ko'nikmalarini rivojlantirish" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                <Step number={4} label="Mijoz uchun tayyor loyiha sifatida jamoalarda loyihalarni amalga oshirish" />
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <Step number={5} label="Loyihani productionga tayyorlash, muammolarni hal qilishni o’rganish, rezume va portfolio tayyorlash" />
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <Step number={6} label="O'qitishning barcha bosqichlaridan o'tib, siz yangi kasbning professionaliga aylanasiz" />
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <h2 className="mt-32 text-4xl font-bold text-center leading-[54px] text-slate-800 max-md:mt-10">Prep Contest Dayjest</h2>
            <article className="px-5 mt-16 w-full max-w-[1107px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {[
                        { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f3d194e4140b444a8ba4ea09dafe5d4706444c1f85d2db2451bfd3f5fdc40a4?apiKey=7e724f8dbe7341e8950e7325e9acf7be&", description: "Dush-jumagacha officeda 8 soatlik work-time" },
                        { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ef8696514af011d5c843174f4db2d0963eb9dfcbb7ea89b0040692dbd5f79c7?apiKey=7e724f8dbe7341e8950e7325e9acf7be&", description: "Dush-jumagacha har kuni 2 soatlik mentorlardan yordam olish" },
                        { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4045940175424cba3aaa3f67d0b156162c727577e38777e93e8fde8dfb60633?apiKey=7e724f8dbe7341e8950e7325e9acf7be&", description: "Haftada bir marta mehmon dasturchilardan masterclass" },
                        { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/76f042254ebabd54a479102dd59e513dbd9ec6337de6e353510b4b6cb0e11b54?apiKey=7e724f8dbe7341e8950e7325e9acf7be&", description: "Loyihalarni joylash uchun bepul domain va hosting beriladi" }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col w-3/12 max-md:w-full">
                            <img loading="lazy" src={item.imgSrc} alt="" className="self-center aspect-square w-[70px]" />
                            <p className="mt-12 max-md:mt-10 text-xl font-semibold leading-8 text-center text-slate-800">{item.description}</p>
                        </div>
                    ))}
                </div>
            </article>
            <h2 className="mt-32 text-4xl font-bold leading-9 text-slate-800 max-md:mt-10">Qabul qilish talablari</h2>
            <section className="mt-12 w-full max-w-[1091px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-5 text-2xl font-medium leading-9 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-2.5 self-start text-base font-semibold whitespace-nowrap">
                                <span className="justify-center px-2 py-0.5 text-purple-500 bg-purple-500 bg-opacity-10 rounded-[1000px]">front-end</span>
                                <span className="justify-center px-2 py-0.5 text-green-600 bg-green-600 bg-opacity-10 rounded-[1000px]">programming</span>
                            </div>
                            <h3 className="mt-8 text-4xl font-bold text-slate-800 max-md:max-w-full">Front-End</h3>
                            {["Asosiy matematik tushunchalar", "Kompyuter saboqlari", "Internet bilan ishlash ko’nikmasi", "HTML, CSS, Javascript asosiy tushunchalar", "Ishtiyoq, qiziqish, maqsad"]
                                .map((text, index) => (
                                    <p key={index} className="flex gap-5 mt-9 text-slate-800 max-md:flex-wrap">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd9202110bc6b719b7ba15e69d83d89942d79639b9a873881f7d0f5886e0aad3?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="shrink-0 w-5 aspect-square" />
                                        <span className="flex-auto max-md:max-w-full">{text}</span>
                                    </p>
                                ))}
                            <button className="justify-center self-start px-8 py-5 mt-10 text-xl font-semibold leading-5 text-white bg-indigo-600 rounded-lg max-md:px-5">Оставить заявку</button>
                        </div>
                    </article>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1e2410c02a1096f98e3ceb444db1af203812253e20dd8ad1cf46df2e0be5e5d?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full" />
                    </div>
                </div>
            </section>
            <section className="mt-32 w-full max-w-[1096px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/959ee9c146d4fe8f45a96fb5073f511d85193b7ffbd151878133fbdb8054bc1a?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="self-stretch my-auto w-full aspect-[1.04] max-md:mt-10 max-md:max-w-full" />
                    </div>
                    <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-5 text-2xl font-medium leading-9 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-1 self-start text-base font-semibold whitespace-nowrap">
                                <span className="justify-center px-2 py-0.5 text-teal-500 bg-teal-500 bg-opacity-10 rounded-[1000px]">programming</span>
                                <span className="justify-center px-2 py-0.5 text-rose-500 bg-rose-500 bg-opacity-10 rounded-[1000px]">back-end</span>
                            </div>
                            <h3 className="mt-7 text-4xl font-bold text-slate-800 max-md:max-w-full">Back-End</h3>
                            {["Asosiy matematik tushunchalar", "Kompyuter saboqlari", "Internet bilan ishlash ko’nikmasi", "Phyton yoki PHP bo’yicha dastlabki bilimlar", "Ishtiyoq, qiziqish, maqsad"]
                                .map((text, index) => (
                                    <p key={index} className="flex gap-5 mt-9 text-slate-800 max-md:flex-wrap">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd9202110bc6b719b7ba15e69d83d89942d79639b9a873881f7d0f5886e0aad3?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="shrink-0 w-5 aspect-square" />
                                        <span className="flex-auto max-md:max-w-full">{text}</span>
                                    </p>
                                ))}
                            <button className="justify-center self-start px-8 py-5 mt-10 text-xl font-semibold leading-5 text-white bg-indigo-600 rounded-lg max-md:px-5">Оставить заявку</button>
                        </div>
                    </article>
                </div>
            </section>
            <section className="mt-32 w-full max-w-[1037px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-5 max-md:mt-10">
                            <div className="flex gap-2.5 text-base font-semibold leading-6 whitespace-nowrap">
                                <span className="justify-center px-2 py-0.5 text-purple-500 bg-purple-500 bg-opacity-10 rounded-[1000px]">flutter</span>
                                <span className="justify-center px-2 py-0.5 text-green-600 bg-green-600 bg-opacity-10 rounded-[1000px]">programming</span>
                            </div>
                            <h3 className="mt-7 text-4xl font-bold text-black leading-[54px]">Flutter</h3>
                            {["Asosiy matematik tushunchalar", "Kompyuter saboqlari", "Internet bilan ishlash ko’nikmasi", "Dart yoki Java dasturlash tillari bo’yicha dastlabki bilimlar", "Ishtiyoq, qiziqish, maqsad"]
                                .map((text, index) => (
                                    <p key={index} className="flex gap-5 mt-9 text-black">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd9202110bc6b719b7ba15e69d83d89942d79639b9a873881f7d0f5886e0aad3?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="shrink-0 w-5 aspect-square" />
                                        <span className="flex-auto">{text}</span>
                                    </p>
                                ))}
                            <button className="justify-center px-8 py-5 mt-10 text-xl font-semibold leading-5 text-white bg-indigo-600 rounded-lg max-md:px-5">Оставить заявку</button>
                        </div>
                    </article>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/81930ce6bcba9cb329197c696431e30b18b386dc8d0046692abf943804de1033?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="mt-1 w-full aspect-[0.92] max-md:mt-10 max-md:max-w-full" />
                    </div>
                </div>
            </section>
            <section className="mt-32 w-full max-w-[1004px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-10 max-md:mt-10 max-md:max-w-full">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6389284ae96f8e60fb58bab8f7348eecb2876a59163402c89ccf2659760713cb?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="max-w-full aspect-[0.9] w-[390px]" />
                            <div className="flex justify-center items-center self-end px-16 py-10 max-w-full bg-amber-200 rounded-lg w-[200px] max-md:px-5">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d22f33d2c06bd6b24f8897ffcecc95d0d9b0e1f6fa13e5a9f5cd64d1a60ff85e?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="w-full aspect-[0.76]" />
                            </div>
                        </div>
                    </div>
                    <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-5 text-2xl font-medium leading-9 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-1 self-start text-base font-semibold">
                                <span className="justify-center px-2 py-0.5 text-teal-500 whitespace-nowrap bg-teal-500 bg-opacity-10 rounded-[1000px]">programming</span>
                                <span className="justify-center px-2 py-0.5 text-rose-500 bg-rose-500 bg-opacity-10 rounded-[1000px]">web design</span>
                            </div>
                            <h3 className="mt-6 text-4xl font-bold text-slate-800 max-md:max-w-full">Web design</h3>
                            {["Kompyuter saboqlari", "Internet bilan ishlash ko’nikmasi", "Asosiy matematik tushunchalar", "Photoshop yoki Figma dasturlarida ishlash ko’nikmasi", "Ishtiyoq, qiziqish, maqsad"]
                                .map((text, index) => (
                                    <p key={index} className="flex gap-5 mt-9 text-slate-800 max-md:flex-wrap">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9704b4024447996e2b907333179c028b7f022752f58fa8b14a734cae3801c25d?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="shrink-0 self-start w-5 aspect-square" />
                                        <span className="flex-auto max-md:max-w-full">{text}</span>
                                    </p>
                                ))}
                            <button className="justify-center self-start px-8 py-5 mt-10 text-xl font-semibold leading-5 text-white bg-indigo-600 rounded-lg max-md:px-5">Оставить заявку</button>
                        </div>
                    </article>
                </div>
            </section>
            <header className="mt-32 text-4xl font-bold capitalize leading-[54px] text-slate-800 max-md:mt-10 max-md:max-w-full">bizning o'quv ko'rsatmalarimiz</header>
            <section>
                {[
                    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/19aa443a5f55c14e320f1ca93a374013cf42285df8d325df25100646b8c713c8?apiKey=7e724f8dbe7341e8950e7325e9acf7be&", text: "Darslar to’liq mustaqil o’rganishga yo’naltiriladi" },
                    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/949e4520f2eec53b06497bb0ab0dc4b8a3c1125347f4f6e93b1eb8b8087a6d9e?apiKey=7e724f8dbe7341e8950e7325e9acf7be&", text: "2 oyda 4 kishilik (1- front, 1-back end, 1-flutter, 1-designer) guruhlarga bo’linadi" },
                    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc3ec1a164c0d6cd120b01c6900e301cd52e937acc2f2e9d3420e9ad58e8e897?apiKey=7e724f8dbe7341e8950e7325e9acf7be&", text: "Har bir guruhda bittadan leader aniqlanadi" },
                    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c01e07e88d99c107ea9a59ee403c671e397f7af48ebcc32849c426d8fc17cce6?apiKey=7e724f8dbe7341e8950e7325e9acf7be&", text: "Guruhlarga loyihalar bo’lib beriladi, anig dedline bilan ishlash o’rigatiladi" },
                    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/11228bf2cbd0a506f9db489523328aa05b87d9087a951962140aed054692b138?apiKey=7e724f8dbe7341e8950e7325e9acf7be&", text: "Guruhlar o’rtasida raqobat hosil qilinadi (ball tizimi orqali amalga oshirish mumkin)" },
                    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7815a0a2f7c7826d9fac17fab33171d97c98a2ccbb731cb3e87b803191b681b6?apiKey=7e724f8dbe7341e8950e7325e9acf7be&", text: "Alpha-testni guruh a'zolari o'zaro bajaradi, Beta-testni boshqa guruh bajarib beradi (bunda testlovchi guruh har bir topgan xatosi uchun ball loyiha egalaridan olib beriladi)" },
                ].map((item, index) => (
                    <div key={index} className="mt-12 max-w-full w-[641px] max-md:mt-10">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <img loading="lazy" src={item.imgSrc} alt="" className="shrink-0 max-w-full h-[100px] aspect-square w-[100px]" />
                            <p className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full text-2xl font-medium leading-9 text-slate-800 max-md:mt-10 max-md:max-w-full">{item.text}</p>
                        </div>
                    </div>
                ))}
            </section>
            <div className="mt-20 relative w-[1160px] h-[922px]">
                <div className=" w-[1162px] h-[922px]">
                    <header className="absolute h-[54px] top-0 left-[268px] [font-family:'Gilroy-Bold',Helvetica] font-bold text-[#252a3b] text-4xl text-center tracking-[0] leading-[54px] whitespace-nowrap">
                        Ta&#39;lim Bosqichlari Bo&#39;yicha Saralash
                    </header>
                    <main className="absolute w-[1168px] h-[818px] top-[104px] left-0">
                        <section className="absolute w-6 h-[504px] top-[31px] left-20">
                            <img className="absolute w-px h-[492px] top-0 left-[11px] object-cover" alt="Line" src={lineImg} />
                            <div className="absolute w-6 h-6 top-[480px] left-0 bg-[#9697f3] rounded-[12px/11.98px]">
                                <div className="relative w-3 h-3 top-1.5 left-1.5 bg-[#5254f1] rounded-[6px/5.99px]" />
                            </div>
                        </section>
                        <section className="absolute w-[55px] h-[27px] top-[5px] left-0 [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#5254f1] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                            1-etap
                        </section>
                        <section className="absolute w-[59px] h-[27px] top-[510px] left-0 [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#5254f1] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                            2-etap
                        </section>
                        <section className="absolute w-6 h-6 top-1.5 left-20 bg-[#9697f3] rounded-[12px/11.98px]">
                            <div className="relative w-3 h-3 top-1.5 left-1.5 bg-[#5254f1] rounded-[6px/5.99px]" />
                        </section>
                        <article className="absolute w-[427px] h-[330px] top-0 left-[129px]">
                            <h2 className="absolute w-[423px] h-[72px] top-0 left-0 [font-family:'Gilroy-Bold',Helvetica] font-bold text-[#252a3b] text-2xl tracking-[0] leading-9">
                                Online: Kichik loyiha tayyorlab yuboriladi
                            </h2>
                            <p className="absolute w-[423px] top-[88px] left-0 [font-family:'Gilroy-Regular',Helvetica] font-normal text-[#252a3b] text-lg tracking-[0] leading-[27px]">
                                Alpha-testni guruh a&#39;zolari o&#39;zaro bajaradi, Beta-testni boshqa guruh bajarib beradi (bunda
                                testlovchi guruh har bir topgan xatosi uchun ball loyiha egalaridan olib beriladi)
                                <br />
                                <br />
                                Alpha-testni guruh a&#39;zolari o&#39;zaro bajaradi, Beta-testni boshqa guruh bajarib beradi (bunda
                                testlovchi guruh har bir topgan xatosi uchun ball loyiha egalaridan olib beriladi)
                            </p>
                        </article>
                        <article className="absolute w-[220px] h-9 top-[505px] left-[129px] [font-family:'Gilroy-Bold',Helvetica] font-bold text-[#252a3b] text-2xl tracking-[0] leading-9 whitespace-nowrap">
                            Offline: Suhbat task
                        </article>
                        <p className="absolute w-[422px] top-[556px] left-[129px] [font-family:'Gilroy-Regular',Helvetica] font-normal text-[#252a3b] text-lg tracking-[0] leading-[27px]">
                            Alpha-testni guruh a&#39;zolari o&#39;zaro bajaradi, Beta-testni boshqa guruh bajarib beradi (bunda
                            testlovchi guruh har bir topgan xatosi uchun ball loyiha egalaridan olib beriladi)
                            <br />
                            <br />
                            Alpha-testni guruh a&#39;zolari o&#39;zaro bajaradi, Beta-testni boshqa guruh bajarib beradi (bunda
                            testlovchi guruh har bir topgan xatosi uchun ball loyiha egalaridan olib beriladi)
                        </p>
                        <div className="absolute w-[400px] h-[310px] top-2.5 left-[634px]">
                            <div className="relative h-[310px]">
                                <img className="absolute w-[358px] h-[271px] top-10 left-0" alt="Portrait young" src={youngImg} />
                                <img className="absolute w-[165px] h-[169px] top-0 left-[235px]" alt="Group" src={groupImg1} />
                            </div>
                        </div>
                        <div className="absolute w-[527px] h-[308px] top-[510px] left-[633px]">
                            <div className="relative h-[308px]">
                                <img className="absolute w-[280px] h-[229px] top-[50px] left-[33px] object-cover" alt="Pensive man" src={manImg} />
                                <img className="absolute w-[323px] h-[279px] top-0 left-[204px]" alt="Portrait smiling" src={smilingImg} />
                                <img className="absolute w-[100px] h-[107px] top-[202px] left-0" alt="Group" src={groupImg2} />
                            </div>
                        </div>
                    </main>
                </div>
            </div>


            <section className="self-stretch py-px pl-20 mt-32 w-full bg-gray-100 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                        <div className="flex z-10 flex-col self-stretch my-auto text-lg text-slate-800 max-md:mt-10 max-md:max-w-full">
                            <h3 className="text-4xl font-bold leading-[52px] max-md:max-w-full">Оставьте заявку для того чтобы принять участие в обучении</h3>
                            <p className="mt-9 leading-7 text-gray-400 max-md:max-w-full">Участвуйте в вебинарах, делитесь опытом и задавайте вопросы. Все это возможно в отдельных группах, которые доступны при прохождении каждого курса!</p>
                            <div className="flex gap-3 mt-6 text-base leading-6 max-md:flex-wrap">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e068bc1befce815076da53709b4166b516ee0b5a52a12f4f63629660eae09e3?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="shrink-0 max-w-full aspect-[3.03] w-[152px]" />
                                <p className="flex-auto my-auto max-md:max-w-full">человек уже стали участниками групп по своим направлениям</p>
                            </div>
                            <button className="justify-center self-start px-6 py-4 mt-8 font-semibold text-white bg-indigo-600 rounded-lg leading-[100%] max-md:px-5">Оставить заявку</button>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-center px-1.5 max-md:max-w-full">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bfa7a7fd584997a4c783d307fa0ce49cf89f3d7195249826821289d74b010c0?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="w-full aspect-[1.41] max-md:max-w-full" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col px-20 py-20">
                <h1 className="self-center text-2xl font-semibold leading-9 text-center text-slate-800 max-md:max-w-full">
                    Наши тесты уникальны и способны определить уровень Ваших знаний в определенной категории IT на 100% и созданы при поддержке:
                </h1>
                <div className="flex gap-5 justify-between mt-14 max-md:flex-wrap max-md:mt-10">
                    {logos.map((logo, index) => (
                        <Logo key={index} src={logo.src} alt={logo.alt} className={logo.className} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Managment;