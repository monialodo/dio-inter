import api from '../api'

export interface SignInData {
    email: string;
    password: string;
}
export interface SignUpData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface UserDTO {
    id: string;
    firstName: string;
    lastName: string;
    accountNumber: number;
    accountDigit: number;
    wallet: number;
    email: string;
}

export const signIn = async (data: SignInData) => {
    const user = await api.post('/user/signin', data)
    return user
}
export const me = async () => {
    return api.get<UserDTO>('/user/me')

}

export const signUp = async (data: SignUpData) => {
    return api.post('user/signup', data)
}