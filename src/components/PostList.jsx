function PostList({ posts, eliminarPost }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
      <button onClick={() => eliminarPost(posts.id)}>❌</button>
    </ul>
  );
}
export default PostList;
