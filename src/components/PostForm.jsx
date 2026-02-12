import { useState } from "react";

function PostForm({ agregarPost }) {
  const [titulo, setTitulo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    agregarPost(titulo);
    setTitulo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Nuevo Post"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default PostForm;
