export type ImageProps = {
    src: string;
    alt: string;
    className: string;
};
export type SectionProps = {
    title: string;
    ContentComponent: React.ReactNode;
};
export type TimerProps = {
    number: number;
    label: string;
};