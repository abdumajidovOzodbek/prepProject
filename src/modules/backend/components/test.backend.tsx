import * as React from "react";
import { Image, Section } from "./additional.components";

const TestBackend: React.FC = () => {
  return (
    <div className="flex flex-col pt-6 bg-white mb-20">
      <main className="flex flex-col self-center px-5 mt-12 max-w-full w-[936px] max-md:mt-10">
        <section className="flex gap-2 self-start text-sm leading-4">
          <a href="#" className="text-slate-800">Главная</a>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d058db258fa17cc5d9d46c49d1623bcf0d986184c18fdf684c3f0148ce665953?apiKey=7a73fef836344277904c5ec2e11997ee&"
            className="shrink-0 w-4 aspect-square"
            alt="arrow icon"
          />
          <span className="text-gray-400">Тестирование по Back-end</span>
        </section>
        <h2 className="mt-14 text-3xl font-bold text-slate-800 max-md:mt-10 max-md:max-w-full">
          Результаты тестирования
        </h2>
        <section className="self-center mt-10 max-w-full w-[853px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <Section
              title="Время"
              ContentComponent={
                <>
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fe4e1a1418847a9aaa735498c5ce78298af796c6433f093d915fc569db59ef1?apiKey=7a73fef836344277904c5ec2e11997ee&"
                    className="aspect-square w-[60px]"
                    alt="time icon"
                  />
                  <p className="self-stretch mt-6 text-base text-center">
                    Вы прошли тестирование за:
                  </p>
                  <div className="mt-3 text-center">0:09:35</div>
                </>
              }
            />
            <Section
              title="Оценка"
              ContentComponent={
                <>
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab514b8281ceea1b2df3156ad29770732d5020a7a024665521cc46e57917589b?apiKey=7a73fef836344277904c5ec2e11997ee&"
                    className="aspect-square w-[60px]"
                    alt="rating icon"
                  />
                  <p className="self-stretch mt-6 text-base text-center">
                    Ваша оценка за тестирование:
                  </p>
                  <div className="mt-2.5 text-center">8/10 баллов</div>
                </>
              }
            />
            <Section
              title="Статус"
              ContentComponent={
                <>
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe93ddd4a79a37990f4512391c9360abe33dd97e9a7a34b56d34aa082c971a53?apiKey=7a73fef836344277904c5ec2e11997ee&"
                    className="aspect-square w-[60px]"
                    alt="status icon"
                  />
                  <p className="self-stretch mt-6 text-base text-center">
                    Ваш статус за тестирование:
                  </p>
                  <div className="mt-3 text-center">Пройден!</div>
                </>
              }
            />
          </div>
        </section>
        <h3 className="mt-16 text-3xl font-bold text-slate-800 max-md:mt-10 max-md:max-w-full">
          Разбор ответов на вопросы
        </h3>
        <section className="flex gap-4 self-start mt-10 text-2xl font-medium leading-6 text-black whitespace-nowrap">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/92a0ddd6f42a13752495aab59f7010759348a7ba20a001f7a54426ba24044f4f?apiKey=7a73fef836344277904c5ec2e11997ee&"
            className="shrink-0 self-start aspect-square fill-teal-500 w-[25px]"
            alt="correct icon"
          />
          <span>Верно!</span>
        </section>
        <section className="flex flex-col items-start py-11 pr-20 pl-9 mt-4 rounded-3xl border border-teal-500 border-solid bg-teal-500 bg-opacity-10 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-3 max-md:flex-wrap">
            <span className="text-xl font-bold leading-5 mt-1.5 text-black">1.</span>
            <p className="flex-auto text-2xl font-semibold leading-9 text-slate-800 max-md:max-w-full">
              При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацам?
            </p>
          </div>
          <div className="flex gap-4 mt-9 text-xl leading-8 text-slate-800 max-md:flex-wrap">
            <div className="shrink-0 self-start w-5 h-5 rounded-full border border-indigo-200 border-solid stroke-[1px]" />
            <p className="flex-auto max-md:max-w-full">
              Случайным образом генератора мы использовали небезизвестный
            </p>
          </div>
          <div className="flex gap-4 mt-8 max-md:flex-wrap">
            <div className="flex flex-col justify-center items-center self-start px-1.5 w-5 h-5 bg-indigo-600 rounded-full">
              <div className="shrink-0 w-2.5 h-2.5 bg-white rounded-full" />
            </div>
            <p className="flex-auto text-xl font-medium leading-8 text-slate-800 max-md:max-w-full">
              Случайным образом мы использовали небезизвестный
            </p>
          </div>
          <div className="flex gap-4 mt-8 text-xl font-medium leading-8 text-slate-800 max-md:flex-wrap">
            <div className="shrink-0 self-start w-5 h-5 rounded-full border border-indigo-200 border-solid stroke-[1px]" />
            <p className="flex-auto max-md:max-w-full">
              Случайным образом менее осмысленного
            </p>
          </div>
          <div className="flex gap-4 mt-8 text-xl font-medium leading-8 text-slate-800 max-md:flex-wrap">
            <div className="shrink-0 self-start w-5 h-5 rounded-full border border-indigo-200 border-solid stroke-[1px]" />
            <p className="flex-auto max-md:max-w-full">
              Случайным образом более менее осмысленного текста рыбы
            </p>
          </div>
        </section>
        <section className="flex gap-4 self-start mt-9 text-2xl leading-6 text-black whitespace-nowrap">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/304ac6c35832b6f3c8a0bef56a07cd5c661e190f3aad3fa4fd006b415475093e?apiKey=7a73fef836344277904c5ec2e11997ee&"
            className="shrink-0 self-start aspect-square w-[25px]"
            alt="incorrect icon"
          />
          <span className="flex-auto">Неверно!</span>
        </section>
        <section className="flex flex-col items-start py-11 pr-20 pl-9 mt-4 rounded-3xl border border-rose-500 border-solid bg-rose-500 bg-opacity-10 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-2.5 max-md:flex-wrap">
            <span className="self-start text-xl mt-1.5 font-bold leading-5 text-black">2.</span>
            <p className="flex-auto text-2xl font-semibold leading-9 text-slate-800 max-md:max-w-full">
              При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацам?
            </p>
          </div>
          <div className="flex gap-4 items-start mt-7 text-xl leading-8 text-slate-800 max-md:flex-wrap">
            <div className="shrink-0 mt-1.5 w-5 h-5 rounded-full border border-indigo-200 border-solid stroke-[1px]" />
            <p className="flex-auto self-stretch max-md:max-w-full">
              Случайным образом генератора мы использовали небезизвестный
            </p>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/92a0ddd6f42a13752495aab59f7010759348a7ba20a001f7a54426ba24044f4f?apiKey=7a73fef836344277904c5ec2e11997ee&"
              className="shrink-0 aspect-square fill-teal-500 w-[25px]"
              alt="correct icon"
            />
          </div>
          <div className="flex gap-4 mt-8 max-md:flex-wrap">
            <div className="flex flex-col justify-center items-center self-start px-1.5 w-5 h-5 bg-indigo-600 rounded-full">
              <div className="shrink-0 w-2.5 h-2.5 bg-white rounded-full" />
            </div>
            <p className="flex-auto text-xl font-medium leading-8 text-slate-800 max-md:max-w-full">
              Случайным образом мы использовали небезизвестный
            </p>
          </div>
          <div className="flex gap-4 mt-8 text-xl font-medium leading-8 text-slate-800 max-md:flex-wrap">
            <div className="shrink-0 self-start w-5 h-5 rounded-full border border-indigo-200 border-solid stroke-[1px]" />
            <p className="flex-auto">
              Случайным образом менее осмысленного
            </p>
          </div>
          <div className="flex gap-4 mt-8 text-xl font-medium leading-8 text-slate-800 max-md:flex-wrap">
            <div className="shrink-0 self-start w-5 h-5 rounded-full border border-indigo-200 border-solid stroke-[1px]" />
            <p className="flex-auto max-md:max-w-full">
              Случайным образом более менее осмысленного текста рыбы
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TestBackend;