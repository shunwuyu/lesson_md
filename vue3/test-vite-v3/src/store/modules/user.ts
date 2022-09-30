import { defineStore } from 'pinia';
import { ReqParams } from '../../api/user/model';
import fetchApi from '../../api/user';
import { setToken } from '../../utils/auth';

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
        setToken(info: string) {
            this.token = info ?? '';
            setToken(info);
        },
        async login(params: ReqParams) {
            const res = await fetchApi.login(params);
            if (res) {
                this.setToken(res.token);
            }
            return res;
        }
    }
})