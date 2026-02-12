import { useState, useEffect } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { getPosts, createPost, deletePost } from "./services/postService";

function PostApp() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    cargarPosts();
  }, []);

  const cargarPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const agregarPost = async (titulo) => {
    try {
      const nuevoPost = {
        title: titulo,
        body: "contenido ejemplo",
        userId: 1,
      };

      const data = await createPost(nuevoPost);
      setPosts((prev) => [data, ...prev]);
    } catch (err) {
      setError(err.message);
    }
  };

  const eliminarPost = async (id) => {
    try {
      await deletePost(id);
      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>CRUD Profesional</h1>
      <PostForm agregarPost={agregarPost} />
      <PostList posts={posts} eliminarPost={eliminarPost} />
    </>
  );
}

export default PostApp;
