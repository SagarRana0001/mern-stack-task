import { useGetPostsQuery } from "./store/apiSlice";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";

function App() {
  const { isLoading, error } = useGetPostsQuery();
  const posts = useSelector((state: RootState) => state.posts.posts);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Something went wrong</h2>;

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
