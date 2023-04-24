export {}
import {
  GetPostsOptionsFilter,
  GetPostsOptionsPagination
} from '../src/post/post.service';
declare global {
    namespace Express {
      export interface Request {
        sort: string;
        filter: GetPostsOptionsFilter;
        pagination: GetPostsOptionsPagination;
      }
    }
  }