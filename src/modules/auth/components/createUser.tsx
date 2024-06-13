import * as React from "react";
import { useNavigate } from "react-router-dom";
import { LanguageSelector } from "./additional.components";


function CreateUser() {
    const [surName, setSurName] = React.useState('')
    const [firstname, setFirstName] = React.useState('')
    const [region, setRegion] = React.useState('')
    const navigate = useNavigate()
    const onSubmit = () => {
        localStorage.setItem('surname', surName)
        localStorage.setItem('firstname', firstname)
        localStorage.setItem('region', region)
    }
    const verify = () => {
        if (surName) {
            navigate('/management')
        }
    }
    return (

        <section className="flex flex-col items-center ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <LanguageSelector
                languages={[
                    { name: "Русский", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/85ee58b306907249975b57749ba05c2391cc118ba8da2792735bea17e48224b7?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" }
                ]}
            />
            <h2 className="mt-40 text-3xl w-[505px] font-bold leading-10 text-center text-teal-950 max-md:mt-10 max-md:max-w-full">
                Пожалуйста, заполните поля с вашими данными
            </h2>
            <div
                className="flex flex-col mt-8 font-semibold max-md:mt-10 max-md:max-w-full"
                onSubmit={onSubmit}
            >
                <label htmlFor="phoneInput" className="sr-only">
                    Фамилия*
                </label>
                <input
                    onChange={e => setSurName(e.target.value)}
                    className="justify-center items-start px-6 py-6 text-lg leading-7 bg-white w-[456px] h-[61px] rounded-lg text-slate-500 max-md:px-5 max-md:mt-10 max-md:max-w-full"
                    type="text"
                    id="phoneInput"
                    placeholder="Фамилия*"
                    aria-label="Фамилия*"
                />
                <input
                    onChange={e => setFirstName(e.target.value)}
                    className="justify-center items-start mt-7 px-6 py-6 text-lg leading-7 bg-white w-[456px] h-[61px] rounded-lg text-slate-500 max-md:px-5 max-md:mt-10 max-md:max-w-full"
                    type="text"
                    id="phoneInput"
                    placeholder="Имя*"
                    aria-label="Имя*"
                />
                <select onChange={e => setRegion(e.target.value)} className="justify-center items-start mt-7 px-5 py-4 text-lg leading-7 bg-white w-[456px] h-[61px] rounded-lg text-slate-400 max-md:px-5 max-md:mt-10 max-md:max-w-full"
                >
                    <option disabled >Регион</option>
                    <option value="tashkent">Tashkent</option>
                    <option value="samarqand">Samarqand</option>
                    <option value="buxoro">Buxoro</option>
                    <option value="andijon">Andijon</option>
                </select>
                <button
                    onClick={() => {
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

export default CreateUser;

