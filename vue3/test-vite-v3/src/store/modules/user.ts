import { defineStore } from 'pinia';
import { ReqParams } from '../../api/user/model';
import fetchApi from '../../api/user';

interface UserState {
    token: string;
    auths: string[];
}

export const useUserStore = defineStore({
    id: 'app-user',
    state: (): UserState => ({
        // token
        token: '',
        // auths
        auths: [],
    }),
    actions: {
        async login(params: ReqParams) {
            const res = await fetchApi.login(params);
        }
    }
})