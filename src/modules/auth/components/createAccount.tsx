import * as React from "react";
import { useNavigate } from "react-router-dom";
import { LanguageSelector } from "./additional.components";



function MyComponent() {
    const [telNumb, setTelNumb] = React.useState('')
    const navigate = useNavigate()
    const onSubmit = () => {
        localStorage.setItem('number', telNumb)
    }
    const verify = () => {
        if (telNumb) {
            navigate('/auth/verify')
        }
    }
    return (

        <section className="flex flex-col items-center ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <LanguageSelector
                languages={[
                    { name: "Русский", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/85ee58b306907249975b57749ba05c2391cc118ba8da2792735bea17e48224b7?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" }
                ]}
            />
            <h2 className="mt-60 text-3xl w-[505px] font-bold leading-10 text-center text-teal-950 max-md:mt-10 max-md:max-w-full">
                Введите номер телефона для верификация пользователя
            </h2>
            <div
                className="flex flex-col mt-8 font-semibold max-md:mt-10 max-md:max-w-full"
                onSubmit={onSubmit}
            >
                <label htmlFor="phoneInput" className="sr-only">
                    Номер телефона*
                </label>
                <input
                    onChange={e => setTelNumb(e.target.value)}
                    className="justify-center items-start px-6 py-6 text-lg leading-7 bg-white w-[456px] h-[61px] rounded-lg text-slate-500 max-md:px-5 max-md:mt-10 max-md:max-w-full"
                    type="tel"
                    id="phoneInput"
                    placeholder="Номер телефона*"
                    aria-label="Номер телефона*"
                />
                <button
                    onClick={()=>{
                        onSubmit()
                        verify()
                    }}
                    type="submit"
                    className="justify-center items-center px-16 py-5 mt-8 text-xl text-white h-[60px] whitespace-nowrap bg-indigo-600 rounded-lg max-md:px-5 max-md:max-w-full"
                >
                    Продолжить
                </button>
            </div>
        </section>
    )
}

export default MyComponent;

