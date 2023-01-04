import { PostDetail, PostType } from '../../components/Post';

import JSON_POSTS from '../../public/data/posts.json';

type DetailArticlePageType = {
  post: PostType;
};

export async function getServerSideProps({ params }: any) {
  const dataPost = JSON_POSTS.find((item) => item.id == params.id) || {};
  return {
    props: {
      post: dataPost,
    },
  };
}
export default function DetailArticle({ post }: DetailArticlePageType) {
  return (
    <>
      <PostDetail post={post} />
    </>
  );
}
