import * as React from "react";
import { NavLink } from "react-router-dom";

interface LanguageSelectorProps {
  src: string;
  language: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ src, language }) => (
  <div className="flex gap-2 justify-center self-stretch my-auto text-sm leading-4 text-center capitalize whitespace-nowrap text-slate-800">
    <img loading="lazy" src={src} alt={`${language} flag`} className="shrink-0 aspect-square w-[18px]" />
    <div className="flex gap-0 my-auto">
      <div>{language}</div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/da064b6204eb3a701771ae94f19a8814a90d4fb9f787033b1b78a26199c749e5?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="shrink-0 w-4 aspect-[1.33]" />
    </div>
  </div>
);

interface UserProfileProps {
  userName: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userName }) => (
  <div className="flex gap-1.5 self-stretch my-auto text-base leading-6 text-slate-800">
    <div className="grow my-auto">{userName}</div>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/da064b6204eb3a701771ae94f19a8814a90d4fb9f787033b1b78a26199c749e5?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="User profile dropdown" className="shrink-0 w-4 aspect-square" />
  </div>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [firstname, setFirstName] = React.useState('')
  const [surname, setSurName] = React.useState('')

  React.useEffect(() => {
     setFirstName(localStorage.getItem('firstname') || "");
     setSurName(localStorage.getItem('surname') || "");
  }, [])
  return (
    <div className="flex flex-col fixed top-0 left-0 right-0 font-semibold mt-5 bg-white shadow-md">
      <header className="flex gap-5 self-center w-full max-w-[1136px] max-md:flex-wrap max-md:max-w-full p-4">
        <div className="flex flex-auto gap-5 text-lg leading-5 text-slate-800 max-md:flex-wrap items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c9bfdb1be52fe83f4a0fcc6470e113c3d65c194b78feb5b08be3467421b4fa7?apiKey=7e724f8dbe7341e8950e7325e9acf7be&"
            alt="Example"
            className="shrink-0 max-w-full aspect-[3.57] w-[130px]"
          />
          <nav className="hidden md:flex flex-auto gap-5 justify-between px-5 my-auto">
            <NavLink to="/backend" className="hover:underline">Back-end</NavLink>
            <NavLink to="/frontend" className="hover:underline">Front-end</NavLink>
            <NavLink to="/project-management" className="hover:underline">Project Management</NavLink>
            <NavLink to="/rating" className="hover:underline">Рейтинг участников</NavLink>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="flex shrink gap-3 justify-between items-center px-5 basis-auto grow-0">
          <LanguageSelector src="https://cdn.builder.io/api/v1/image/assets/TEMP/475a757638a2d811790d88bd66dc5c6e554cd4f9ce12e5e62a2dd8e6011b77e1?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" language="Русский" />
          <div className="justify-center items-center self-stretch px-1.5 py-1 w-9 h-9 text-lg text-white whitespace-nowrap bg-indigo-600 rounded-full">
            {firstname.charAt(0).toUpperCase()}{surname.charAt(0).toUpperCase()}
          </div>
          <UserProfile userName={firstname + " "+ surname} />
        </div>
      </header>
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 p-4 bg-white">
          <NavLink to="/backend" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Back-end</NavLink>
          <NavLink to="/frontend" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Front-end</NavLink>
          <NavLink to="/project-management" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Project Management</NavLink>
          <NavLink to="/rating" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Рейтинг участников</NavLink>
        </nav>
      )}
      <hr className="mt-5" />
    </div>
  );
}

export default Header;
