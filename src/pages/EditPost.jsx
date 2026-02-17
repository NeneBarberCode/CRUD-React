import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../services/postService";
import { useState } from "react";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updatePost(id, {
      title,
      body: "contenido actualizado",
      userId: 1,
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Actualizar</button>
    </form>
  );
}

export default EditPost;
