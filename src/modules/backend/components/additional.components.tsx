import { ImageProps, SectionProps, TimerProps } from "../types/type";

export const TimerBlock: React.FC<TimerProps> = ({ number, label }) => (
    <div className="flex flex-col self-stretch">
        <div className="text-8xl text-indigo-600 max-md:text-4xl">{number.toString().padStart(2, "0")}</div>
        <div className="mt-7 text-2xl text-center text-slate-800">{label}</div>
    </div>
);

export const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
    <img loading="lazy" src={src} alt={alt} className={className} />
);

export const Section: React.FC<SectionProps> = ({ title, ContentComponent }) => (
    <section className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-center text-xl font-semibold leading-8 text-slate-800 max-md:mt-10">
            {ContentComponent}
            <div className="mt-8">{title}</div>
        </div>
    </section>
);
