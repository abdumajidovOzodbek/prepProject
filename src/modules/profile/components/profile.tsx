import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ProfileImageUpload } from "./additional.components";


const Profile: React.FC = () => {
    const [surName, setSurName] = React.useState<string>(localStorage.getItem('surname') || "");
    const [firstname, setFirstName] = React.useState<string>(localStorage.getItem('firstname') || "")
    const [region, setRegion] = React.useState<string>(localStorage.getItem('region') || "")
    const navigate = useNavigate()
    const onSubmit = () => {
        localStorage.setItem('surname', surName)
        localStorage.setItem('firstname', firstname)
        localStorage.setItem('region', region)
        alert('succesfully changed')
        navigate('/management')
    }
    return (
        <div className="flex items-center justify-center min-h-screen mt-[30px] ">
            <main className="flex flex-col max-w-[552px] w-full px-4">
                <nav className="flex gap-2 self-start text-sm leading-4">
                    <p className="text-slate-800">Главная</p>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d058db258fa17cc5d9d46c49d1623bcf0d986184c18fdf684c3f0148ce665953?apiKey=7e724f8dbe7341e8950e7325e9acf7be&"
                        alt=""
                        className="shrink-0 w-4 aspect-square "
                    />
                    <p className="text-gray-400">Мой профиль</p>
                </nav>
                <ProfileImageUpload onClick={() => console.log("Upload profile image")} />
                <input
                    type="text"
                    value={firstname}
                    onChange={e => setFirstName(e.target.value)}
                    className="border border-solid border-gray-400 border-opacity-40 px-6 py-3 text-lg bg-white w-full mt-7 h-[61px] rounded-lg text-slate-500 max-md:px-5 max-md:mt-5"
                />
                <input
                    type="text"
                    value={surName}
                    onChange={e => setSurName(e.target.value)}
                    className="border border-solid border-gray-400 border-opacity-40 px-6 py-3 text-lg mt-7 bg-white w-full h-[61px] rounded-lg text-slate-500 max-md:px-5 max-md:mt-5"
                />
                <select
                    value={region}
                    onChange={e => setRegion(e.target.value)}
                    className="border border-solid border-gray-400 mt-7 px-5 py-3 text-lg bg-white w-full h-[61px] rounded-lg text-slate-400 max-md:px-5 max-md:mt-5"
                >
                    <option disabled>Регион</option>
                    <option value="tashkent">Tashkent</option>
                    <option value="samarqand">Samarqand</option>
                    <option value="buxoro">Buxoro</option>
                    <option value="andijon">Andijon</option>
                </select>
                <button
                    onClick={onSubmit}
                    className="justify-center items-center px-16 py-5 mt-8 w-full text-xl font-semibold leading-5 text-white bg-indigo-600 rounded-lg max-md:px-5 max-md:mt-5"
                >
                    Сохранить изменения
                </button>
            </main>
        </div>

    );
};

export default Profile;