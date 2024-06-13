
type StatusType = {
    content: string;
    time: string;
    additionalClasses?: string;
};

export type UserType = {
    id: number;
    initials: string;
    name: string;
    statusIndices: Array<StatusType>;
};
