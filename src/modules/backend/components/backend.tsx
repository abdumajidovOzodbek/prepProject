import React from "react";
import { TimerBlock } from "./additional.components";



const BackEndComp: React.FC = () => (
    <div className="flex flex-col pt-6 bg-white">
        <nav className="flex ml-[180px] self-start text-sm leading-4 whitespace-nowrap">
            <p className="text-slate-800">Главная</p>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/778b7db2f99abc6e2532741cc106ef0f1251c4dd99f88e40739b605af0f49715?apiKey=7a73fef836344277904c5ec2e11997ee&"
                alt=""
                className="shrink-0 w-4 aspect-square"
            />
            <p className="text-gray-400">BackEnd</p>
        </nav>
        <main className="flex flex-col items-center self-center mt-12  max-w-full w-[906px] max-md:mt-10">

            <div className="flex flex-col items-center self-center">
                <h1 className="self-center mt-16 text-3xl font-bold text-slate-800 max-md:mt-10">BackEnd</h1>
                <p className="mt-9 text-xl text-center text-slate-500 max-md:max-w-full">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                </p>
                <section className="flex gap-5 justify-between self-center items-center mt-14 font-bold whitespace-nowrap max-md:flex-wrap max-md:mt-10">
                    <TimerBlock number={3} label="Дней" />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/299a3dfab1a0ba51b4ee764c169e2e46399079547f9916b210dba30a99cef4e0?apiKey=7a73fef836344277904c5ec2e11997ee&"
                        alt=""
                        className="shrink-0 mt-[-40px] aspect-[0.33] w-[15px]"
                    />
                    <TimerBlock number={15} label="Часов" />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/299a3dfab1a0ba51b4ee764c169e2e46399079547f9916b210dba30a99cef4e0?apiKey=7a73fef836344277904c5ec2e11997ee&"
                        alt=""
                        className="shrink-0 mt-[-40px] aspect-[0.33] w-[15px]"
                    />
                    <TimerBlock number={13} label="Минут" />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/299a3dfab1a0ba51b4ee764c169e2e46399079547f9916b210dba30a99cef4e0?apiKey=7a73fef836344277904c5ec2e11997ee&"
                        alt=""
                        className="shrink-0 mt-[-40px] aspect-[0.33] w-[15px]"
                    />
                    <TimerBlock number={30} label="Секунд" />
                </section>
                <h2 className="mt-7  text-xl font-medium text-center text-slate-500 max-md:mr-2.5">
                    Уведомить меня о запуске по E-mail
                </h2>
                <div className="flex items-start self-start ml-[190px]"> <label htmlFor="emailInput" className="mt-7 text-start text-sm max-md:max-w-full">Введите свой E-mail</label></div>
                <div className="flex gap-5 justify-between mt-2.5 mb-10 font-semibold text-white whitespace-nowrap max-md:flex-wrap">
                    <input
                        className="shrink-0 max-w-full rounded-2xl border border-indigo-600 border-solid h-[50px] w-[360px]"
                        type="email"
                        id="emailInput"
                        aria-label="Введите свой E-mail"
                    />
                    <button
                        type="submit"
                        className="justify-center h-[50px] w-[168px] px-9 bg-indigo-600 rounded-2xl max-md:px-5"
                    >
                        Отправить
                    </button>
                </div>
            </div>
        </main>
    </div>
);

export default BackEndComp;