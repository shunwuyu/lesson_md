import request from '@/utils/request';

export const getMovieList = (cate: string) => {
  return request({
      url: `/api/movie/${cate}?apikey=0df993c66c0c636e29ecbb5344252a4a`,
      method: 'GET',
  });
};

