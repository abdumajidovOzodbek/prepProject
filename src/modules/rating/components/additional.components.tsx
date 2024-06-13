import { UserType } from "../types/type";

export const UserRow: React.FC<{ user: UserType }> = ({ user }) => (
    <div className={`flex flex-wrap md:flex-nowrap h-auto md:h-[50px] ${user.id % 2 === 1 ? 'bg-white' : 'bg-slate-100 border border-white'}`}>
        <div className="w-full md:w-[72px] flex justify-center items-center px-2 py-2 md:py-5 text-base font-semibold leading-6 text-center whitespace-nowrap">
            {user.id}
        </div>
        <div className="flex w-full md:w-[296px] px-2 py-2 md:px-5 md:py-3.5">
            <div className="flex justify-center items-center w-6 h-6 text-xs text-white bg-indigo-600 rounded-full">
                {user.initials}
            </div>
            <div className="flex-auto my-auto ml-3 text-base font-semibold leading-6 text-slate-800">
                {user.name}
            </div>
        </div>
        {user.statusIndices.map((status, idx) => (
            <div
                className={`w-full md:w-[62px] px-2 py-2 md:px-4 md:py-3 h-auto md:h-[50px] border border-white text-sm font-semibold leading-5 text-center text-slate-800 ${status.additionalClasses}`}
                key={idx}
            >
                {status.content} <br /> {status.time}
            </div>
        ))}
    </div>
);
