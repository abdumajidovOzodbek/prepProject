import * as React from "react";
import { useNavigate } from "react-router-dom";
import { LanguageSelector, PhoneVerificationForm } from "./additional.components";



function Verify() {
  const [phoneNumber, setPhoneNumb] = React.useState('')
  const navigate = useNavigate()
  const verify = () => {
    if (phoneNumber) {
      navigate('/auth/addUser')
    }
  }
  React.useEffect(() => {
    return setPhoneNumb(localStorage.getItem('number') || "");
  }, [])
  return (

    <section className="flex flex-col items-center ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <LanguageSelector
        languages={[
          { name: "Русский", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/85ee58b306907249975b57749ba05c2391cc118ba8da2792735bea17e48224b7?apiKey=7e724f8dbe7341e8950e7325e9acf7be&" }
        ]}
      />
      <h2 className="mt-60 text-3xl w-[505px] font-bold leading-10 text-center text-teal-950 max-md:mt-10 max-md:max-w-full">
        Мы отправили вам код на <br /> {phoneNumber}
      </h2>
      <a href="auth/login" className="mt-6 text-indigo-600 font-semibold">Изменить номер телефона</a>
      <PhoneVerificationForm
        onSubmit={(event) => {
          event.preventDefault();
          verify()
        }}
      />
    </section>
  )
}

export default Verify;
