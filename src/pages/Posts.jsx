import PostCard from "../components/posts/PostCard";
import { useGetPostsQuery } from "../redux/features/api/baseApi";

const Posts = () => {
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  if (isLoading) {
    return <p className="text-9xl text-zinc-300">Loading...</p>;
  }
  if (!isLoading && isError) {
    return <p className="text-6xl text-zinc-300">Something Went Wrong...</p>;
  }
  return (
    <div className="bg-zinc-900">
      <h1 className="text-white text-2xl font-bold text-center py-20">
        Posts Page
      </h1>
      <div className="container mx-auto flex flex-col gap-3">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
