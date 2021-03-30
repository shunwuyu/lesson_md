import { Request, Response } from 'express';
import { createPost } from './post.service';
export const store = async (
  request: Request,
  response: Response
) => {
  // console.log(request.query);
  console.log(request.body, '++++++ ++++++++++=')
  const { title, content } = request.body;
  // console.log( title, content )
  const { id: userId } = request.user;
  // try {
  const data = await createPost({ title, content, userId});
  response.status(201).send(data);
  // } catch (error) {

  // }


}