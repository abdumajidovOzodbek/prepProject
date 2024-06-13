import { data } from "../data/data";
import { UserRow } from "./additional.components";


function UsersRating() {
    return (
        <main className="flex flex-col w-[1113px]">
            <div className="flex max-md:flex-wrap">
                <div className="shrink-0  border border-white bg-slate-100 h-[50px] w-[72px]" />
                <div className="shrink-0  border border-white max-w-full bg-slate-100 h-[50px] w-[296px]" />
                <div className="shrink-0  border border-white bg-slate-100 h-[50px] w-[62px]" />
                <div className="shrink-0  border border-white bg-slate-100 h-[50px] w-[62px]" />
                <div className="shrink-0  border border-white bg-slate-100 h-[50px] w-[62px]" />
                <div className="shrink-0  border border-white bg-slate-100 h-[50px] w-[62px]" />
                <div className="shrink-0  border border-white bg-slate-100 h-[50px] w-[62px]" />
                <div className="shrink-0  border border-white bg-slate-100 h-[50px] w-[62px]" />
                <div className="shrink-0  border border-white bg-slate-100 h-[50px] w-[62px]" />
                <div className="shrink-0  border border-white bg-slate-100 h-[50px] w-[62px]" />
                <div className="shrink-0  border border-white bg-slate-100 h-[50px] w-[62px]" />
                <div className="shrink-0  border border-white bg-slate-100 h-[50px] w-[62px]" />
                <div className="shrink-0  border border-white bg-slate-100 h-[50px] w-[62px]" />
                <div className="shrink-0  border border-white bg-slate-100 h-[50px] w-[62px]" />

            </div>
            {data.map((user) => (
                <UserRow key={user.id} user={user} />
            ))}

        </main>
    );
}

export default UsersRating;