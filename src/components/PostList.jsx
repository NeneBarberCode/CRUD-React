import { Link } from "react-router-dom";
function PostList({ posts, eliminarPost }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.title}
          <Link to={`/post/${post.id}`}>
            <button>Ver</button>
          </Link>
          <button onClick={() => eliminarPost(posts.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
export default PostList;
