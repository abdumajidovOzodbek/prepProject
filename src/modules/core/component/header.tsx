import * as React from "react";
import { NavLink } from "react-router-dom";
import { LanguageSelector, UserProfile } from "./additional.components";


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [firstname, setFirstName] = React.useState('')
  const [surname, setSurName] = React.useState('')

  React.useEffect(() => {
     setFirstName(localStorage.getItem('firstname') || "");
     setSurName(localStorage.getItem('surname') || "");
  }, [])
  return (
    <div className="flex flex-col fixed top-0 left-0 right-0 font-semibold bg-white pt-2 backdrop-blur-sm bg-white/30">
      <header className="flex gap-5 self-center w-full max-w-[1090px] max-md:flex-wrap max-md:max-w-full p-4">
        <div className="flex flex-auto gap-7 text-lg leading-5 text-slate-800 max-md:flex-wrap items-center">
         <a href="/">
         <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c9bfdb1be52fe83f4a0fcc6470e113c3d65c194b78feb5b08be3467421b4fa7?apiKey=7e724f8dbe7341e8950e7325e9acf7be&"
            alt="Example"
            className="shrink-0 max-w-full aspect-[3.57] w-[130px]"
          />
         </a>
          <nav className="hidden text-base md:flex flex-auto justify-between my-auto">
            <NavLink to="/backend" className="hover:underline">Back-end</NavLink>
            <NavLink to="/result" className="hover:underline">Front-end</NavLink>
            <NavLink to="/management" className=" hover:underline">Project Management</NavLink>
            <NavLink to="/rating" className="hover:underline">Рейтинг участников</NavLink>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="flex shrink gap-3 justify-between items-center basis-auto grow-0">
          <LanguageSelector src="https://cdn.builder.io/api/v1/image/assets/TEMP/475a757638a2d811790d88bd66dc5c6e554cd4f9ce12e5e62a2dd8e6011b77e1?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" language="Русский" />
          <div className="justify-center items-center self-stretch px-1.5 py-1 w-9 h-9 text-lg text-white whitespace-nowrap bg-indigo-600 rounded-full">
            {firstname.charAt(0).toUpperCase()}{surname.charAt(0).toUpperCase()}
          </div>
          <NavLink to={'/profile'}>
          <UserProfile userName={firstname + " "+ surname} />
          </NavLink>
        </div>
      </header>
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center p-10 bg-white">
          <NavLink to="/backend" className="mr-10 hover:underline" onClick={() => setIsMenuOpen(false)}>Back-end</NavLink>
          <NavLink to="/result" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Front-end</NavLink>
          <NavLink to="/management" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Project Management</NavLink>
          <NavLink to="/rating" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Рейтинг участников</NavLink>
        </nav>
      )}
      <hr className="mt-5" />
    </div>
  );
}

export default Header;
