import { useParams } from "react-router-dom";
import { useGetPostsByIdQuery } from "../redux/features/api/baseApi";

const SinglePost = () => {
  const { id } = useParams();
  const { data: post, isLoading, isError } = useGetPostsByIdQuery(id);
  if (isLoading) {
    return <p className="text-9xl text-zinc-300">Loading...</p>;
  }
  if (!isLoading && isError) {
    return <p className="text-6xl text-zinc-300">Something Went Wrong...</p>;
  }
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto py-20">
        <h1 className="text-white text-2xl mb-10">{post?.title}</h1>
        <p className="text-zinc-300">{post?.body}</p>
      </div>
    </div>
  );
};

export default SinglePost;
