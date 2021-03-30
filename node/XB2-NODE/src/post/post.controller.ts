import {
  getPostById
} from './post.service'
/**
 * 单个内容
 */
export const show = async (
  request,
  response,
  next
) => {
  const { postId } = request.params;
  // console.log(postId)
  // 调取内容
  try {
    const post = await getPostById(parseInt(postId, 10));
    response.send(post);
  } catch (error) {
    next(error);
  }

}