import { LanguageSelectorProps, UserProfileProps } from "../interfaces/interface";

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ src, language }) => (
    <div className="flex gap-2 justify-center ml-5 self-stretch my-auto text-sm leading-4 text-center capitalize whitespace-nowrap text-slate-800">
      <img loading="lazy" src={src} alt={`${language} flag`} className="shrink-0 aspect-square w-[18px]" />
      <div className="flex gap-0 my-auto">
        <div>{language}</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/da064b6204eb3a701771ae94f19a8814a90d4fb9f787033b1b78a26199c749e5?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="" className="shrink-0 w-4 aspect-[1.33]" />
      </div>
    </div>
  );
  
  
  
export  const UserProfile: React.FC<UserProfileProps> = ({ userName }) => (
    <div className="flex self-stretch my-auto leading-6 text-slate-800">
      <div className="grow my-auto">{userName}</div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/da064b6204eb3a701771ae94f19a8814a90d4fb9f787033b1b78a26199c749e5?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" alt="User profile dropdown" className="shrink-0 w-4 aspect-square" />
    </div>
  );
  