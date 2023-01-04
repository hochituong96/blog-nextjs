import Link from 'next/link';
import JSON_POSTS from '../../public/data/posts.json';
export type PostType = typeof JSON_POSTS[number];
import moment from 'moment';
export const Post = () => {
  return (
    <>
      <div className="text-white py-4">
        <h1 className="text-4xl">Latest</h1>
        <div className="text-gray-500 py-4 border-b border-gray-700">
          A blog created with Next.js and Tailwind.css
        </div>
      </div>
      {JSON_POSTS?.map((post) => {
        return (
          <div key={post.id} className="py-10 border-b border-gray-700">
            <div className="text-gray-500">
              {moment(post.created_at).fromNow()}
            </div>
            <div className="text-white text-2xl py-2">{post.title}</div>
            <div className="flex flex-wrap gap-4 text-emerald-600">
              <div>NEXT-JS</div>
              <div>TAILWIND</div>
              <div>FEATURE</div>
            </div>
            <div className="text-gray-500 py-4">{post.content}</div>
            <div className="text-emerald-600">
              <Link href={`post/${post.id}`}>Read more →</Link>
            </div>
          </div>
        );
      })}

      <div className="text-emerald-600 flex justify-end mt-4">All Posts →</div>
    </>
  );
};
