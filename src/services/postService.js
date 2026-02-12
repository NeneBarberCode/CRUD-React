const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}?_limit=5`);

  if (!res.ok) throw new Error("Error al obtener post");

  return await res.json();
};

export const createPost = async (nuevoPost) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(nuevoPost),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Error al crear post");
  return await res.json();
};

export const deletePost = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar post");
  return true;
};
