import { State } from '@/store/interface';
import { Commit } from 'vuex';
import { getMovieList } from '@/api/movie';

const getters = {
  // tslint:disable-next-line:no-shadowed-variable
  movieList: (state: State) => state.movieList,
};

const state: State = {
  movieList: [],
};

const mutations = {
};

const actions = {
  async movieList(context: { commit: Commit }, cate: string) {
    const res: any = await getMovieList(cate)
      .then( (response: any ) => response)
    return res;
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
};