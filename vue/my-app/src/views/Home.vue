<template>
  <div class="home">
    <Spinner v-if="loading"></Spinner>
    <van-tabs v-model="active"  v-if="!loading">
      <van-tab title="正在热映">
        <div id="listMovieBox">
          <MovieItem :movie="movieListData"></MovieItem>
        </div>
      </van-tab>
      <van-tab title="即将上映">
         <div id="listMovieBox">
          <MovieItem :movie="movieListData"></MovieItem>
        </div>
      </van-tab>
      <van-tab title="Top250">
        <div id="listMovieBox">
          <MovieItem :movie="movieListData"></MovieItem>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import MovieItem from '@/components/MovieItem.vue';
import {Action, Mutation, State} from 'vuex-class';
import { Tab, Tabs, Toast } from 'vant';
import Spinner from '@/components/Spinner.vue';

@Component({
  components: {
    Spinner,
    MovieItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  }
})
export default class Home extends Vue {
  private cate: string = 'in_theaters';
  private active: number =  0;
  private loading: boolean = true;
  private movieListData = null;
  @Action private movieList!: (cate: string) => any;
  @Watch('active')
  private onActiveChanged( val: number ) {
    if ( val === 0 ) {
      this.changeType(0, 'in_theaters');
    } else if (val === 1) {
      this.changeType(1, 'coming_soon');
    } else if (val === 2) {
      this.changeType(2, 'top250');
    }
  }

  private created() {
    this.movieList( this.cate ).then( (res: any) => {
      // console.log(res.subjects);
      this.movieListData = res.subjects;
      this.loading = false;
    });
  }

  private changeType(active: number, name: string) {
    this.cate = name;
    this.loading = true;
    this.movieList( this.cate ).then( (res: any) => {
      this.movieListData = res.subjects;
      this.loading = false;
    });
  }
}
</script>
