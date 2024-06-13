import React from "react";
import { LanguageSelectorProps } from "../interface/interface";
import { FormProps } from "react-router-dom";

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ languages }) => (
    <div className="flex gap-2 justify-center mt-7 self-end text-sm text-center capitalize whitespace-nowrap text-slate-800">
        {languages.map((language, index) => (
            <React.Fragment key={index}>
                <img
                    loading="lazy"
                    src={language.src}
                    className="shrink-0 aspect-square w-[18px]"
                    alt={`${language.name} flag`}
                />
                <div className="flex gap-0 px-0.5 my-auto">
                    <div>{language.name}</div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/316ebaec6fe62c270b5e5e8157d4dc3b979a11d1ac45659999c509da93507553?apiKey=7e724f8dbe7341e8950e7325e9acf7be&"
                        className="shrink-0 w-4 aspect-[1.33]"
                        alt={`Dropdown arrow for ${language.name}`}
                    />
                </div>
            </React.Fragment>
        ))}
    </div>
);
export const PhoneVerificationForm: React.FC<FormProps> = ({ onSubmit }) => (
    <form
      className="flex flex-col mt-8 font-semibold max-md:mt-10 max-md:max-w-full"
      onSubmit={onSubmit}
    >
      <label htmlFor="phoneInput" className="sr-only">
        
      </label>
      <input
        className="justify-center items-start px-6 py-6 text-lg leading-7 bg-white w-[456px] h-[61px] rounded-lg text-slate-500 max-md:px-5 max-md:mt-10 max-md:max-w-full"
        type="number"
        id="phoneInput"
        placeholder="Код*"
        aria-label="Номер телефона*"
        required
      />
      <button
        type="submit"
        className="justify-center items-center px-16 py-5 mt-8 text-xl text-white h-[60px] whitespace-nowrap bg-indigo-600 rounded-lg max-md:px-5 max-md:max-w-full"
      >
        Продолжить
      </button>
      <p className="mt-9 text-center text-indigo-600">
        <span className="text-slate-800">Я не получил код.</span> <a href="#">Отправить повторно</a>
      </p>
    </form>
  );
