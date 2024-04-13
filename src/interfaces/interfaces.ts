export interface User {
    id: number;
    valueInput?: string;
}

export interface UserDetailsProps {
    avatar_url: string;
    login: string;
    name: string;
    error: boolean;
}