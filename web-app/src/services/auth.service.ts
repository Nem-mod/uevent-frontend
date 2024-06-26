import { IUserAuthForm, IUserRegisterAndAuthRes, IUserRegisterForm, User } from '@/types/user.types';
import { axiosWithAuth, axiosWithoutAuth } from '@/api/interseptors';
import { AxiosError } from 'axios';

export const authService = {
    async login(data: IUserAuthForm): Promise<IUserRegisterAndAuthRes | undefined> {
        try {
            const response = await axiosWithoutAuth.post('/auth/user/login', data);
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError && error.response)
                throw new AxiosError(`${error.response.data.message}`);
        }
    },
    async register(data: IUserRegisterForm): Promise<IUserRegisterAndAuthRes> {
        try {
            const response = await axiosWithoutAuth.post('/users/register', data);
            return response.data;
        } catch (e) {
            throw new AxiosError('Registration failed, user already exists');
        }
    },

    async getMe(): Promise<IUserRegisterAndAuthRes> {
        try {
            const response = await axiosWithAuth.get('/users/me');
            return response.data;
        } catch (e) {
            throw new AxiosError('Auth Failed');
        }
    },

    async sendVerificationLink(returnLink: string, userId: number | string) {
        const response = await axiosWithoutAuth.post(`/auth/user/${userId}/send/verify`, { returnLink });
        return true;
    },

    async confirmVerification(token: string, userId: string) {
        const response = await axiosWithoutAuth.patch(`/auth/user/${userId}/validate/verify`, { token });
        return true;
    },


    async logout() {
        try {
            const response = await axiosWithoutAuth.delete(`/auth/user/logout`);
            return true;
        } catch (error) {
            return false;
        }
    },

    async sendRecoverPassword(email: string) {
        try {
            const body = {
                email: email,
                returnLink: `${process.env.NEXT_PUBLIC_HOST_SERVER_URL}/reset-password/?token=replaceToken`
            }
            const response = await axiosWithoutAuth.post(`/auth/user/send/reset-psw`, body);
            return true;
        } catch (error) {
            return false;
        }
    },

    async resetPassword(token: string, password: string) {
        try {
            const body = {
                token: token,
                password: password
            }
            const response = await axiosWithoutAuth.patch(`/auth/user/validate/reset-psw`, body);
            return true;
        } catch (error) {
            return false;
        }
    }
};