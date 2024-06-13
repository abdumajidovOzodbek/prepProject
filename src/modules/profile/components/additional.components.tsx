import { ProfileImageUploadProps } from "../types/type";

export const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({ onClick }) => {
    return (
        <div className="flex gap-5 justify-between self-start mt-10 max-md:mt-10">
            <div
                className="justify-center w-[100px] h-[100px] px-6 py-7 text-4xl text-indigo-600 whitespace-nowrap rounded-full border border-indigo-600 border-dashed stroke-[1px] max-md:px-5"
                onClick={onClick}
            >
                AA
            </div>
            <div className="flex flex-col px-5 my-auto">
                <h2 className="text-lg font-semibold leading-7 text-indigo-600">
                    Загрузить фото профиля
                </h2>
                <p className="mt-3.5 text-sm leading-5 text-gray-400">
                    Вы можете использовать форматы: <br /> .jpeg, .jpg, .png, .svg
                </p>
            </div>
        </div>
    );
};
