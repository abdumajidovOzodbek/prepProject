import React from "react";
import UsersRating from "./usersRatingRow";


const Rating: React.FC = () => (
    <div className="flex flex-col pt-6 bg-white">
        <nav className="flex ml-[180px] mt-10 mb-10 self-start text-sm leading-4 whitespace-nowrap">
            <p className="text-slate-800">Главная</p>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/778b7db2f99abc6e2532741cc106ef0f1251c4dd99f88e40739b605af0f49715?apiKey=7a73fef836344277904c5ec2e11997ee&"
                alt=""
                className="shrink-0 w-4 aspect-square"
            />
            <p className="text-gray-400">Рейтинг участников</p>
            
            
        </nav>
        <div className="flex ml-[180px] self-start leading-4 whitespace-nowrap mb-10">
        <h1 className="text-2xl font-bold">Рейтинг участников</h1>
        </div>
      <div className="flex items-center self-center ml-[50px] mb-20">
      <UsersRating/>
      </div>
    </div>
);

export default Rating;