import { defineStore } from 'pinia';
import fetchApi from '../../api/home';
import { ResInfoList } from '../../api/home/model';
type Nullable<T> = T | null;
interface HomeState {
    info: Nullable<ResInfoList>;
}

export const useHomeStore = defineStore({
    id: 'app-home',
    state: (): HomeState => ({
        // info
        info: null,
    }),
    getters: {
        getInfo(): Nullable<ResInfoList> {
          return this.info || null;
        },
    },
    actions: {
        setInfo(info:Nullable<ResInfoList>) {
            this.info = info;
        },
        async fetchInfo() {
            const res = await fetchApi.info();
            if (res) {
                this.setInfo(res);
            }
            return res
        }
    }
})