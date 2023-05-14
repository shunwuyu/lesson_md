export type PostFile = {
    id: number;
  };
  
  export type PostUser = {
    id: number;
    name: string;
  };
  
  export type Post = {
    id: number;
    title: string;
    content: string;
    file: PostFile;
    user: PostUser;
  };
  
  export type PostList = Array<Post>;