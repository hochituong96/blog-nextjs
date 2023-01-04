import { PostDetail, PostType } from '../../components/Post';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import JSON_POSTS from '../../public/data/posts.json';

type PostDetailPageType = {
  post: PostType;
};
type Params = ParsedUrlQuery & {
  id: string;
};
export const getStaticPaths: GetStaticPaths = async () => {
  const ids = JSON_POSTS.map((c) => c.id);
  const paths = ids.map((id) => {
    return {
      params: { id: id.toString() },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;
  const post = JSON_POSTS.find((c) => c.id.toString() === id);

  return {
    props: { post },
  };
};
export default function DetailPost({ post }: PostDetailPageType) {
  return (
    <>
      <PostDetail post={post} />
    </>
  );
}
