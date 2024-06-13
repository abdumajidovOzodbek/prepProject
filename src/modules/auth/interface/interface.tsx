import { ReactNode } from "react";

export interface LanguageSelectorProps {
    languages: { name: string; src: string }[];
}
export interface FormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
export interface AuthProviderProps {
    children: ReactNode;
}
