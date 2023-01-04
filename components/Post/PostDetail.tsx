import Link from 'next/link';
import { PostType } from './Post';
import { Main } from '../../layouts/Main';
import moment from 'moment';
type PostDetailType = {
  post: PostType;
};
export const PostDetail = ({ post }: PostDetailType) => {
  return (
    <>
      <Main>
        <div className="flex justify-center text-gray-500">
          {moment(post.created_at).format('DD-MM-YYYY')}
        </div>
        <div className="text-white flex justify-center text-4xl py-4">
          {post.title}
        </div>
        <div className="text-gray-400">{post.content}</div>
      </Main>
    </>
  );
};
