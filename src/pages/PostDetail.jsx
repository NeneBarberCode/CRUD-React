import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getPostById, deletePost } from "../services/postService";

function PostDetail() {
  const { id } = useParams();
  console.log("ID:", id);
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarPost = async () => {
      try {
        const data = await getPostById(id);
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    cargarPost();
  }, [id]);

  const handleDelete = async () => {
    await deletePost(id);
    navigate("/");
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>No encontrado</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <Link to={`/edit/${id}`}>
        <button>Editar</button>
      </Link>

      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default PostDetail;
