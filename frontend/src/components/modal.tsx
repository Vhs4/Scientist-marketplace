"use client";
import React, { useState } from "react";

const RedditPostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [skills, setSkills] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const userToken = localStorage.getItem("user_token");
      const { access_token: token, user_id } = userToken ? JSON.parse(userToken) : { access_token: "", user_id: "" };
      const response = await fetch(
        "http://localhost:8000/user/ports/create_post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            post: { title: title, content: content, user_id },
            skills: skills.split(",").map((it) => ({
              name: it,
            })),
          }),
        }
      );

      if (response.ok) {
        console.log("Postagem enviada com sucesso!");
        setTitle("");
        setContent("");
        setError(null);
      } else {
        throw new Error("Falha ao enviar postagem.");
      }
    } catch (error) {
      console.error("Erro ao enviar postagem:", error);
      setError("Falha ao enviar postagem. Por favor, tente novamente.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1E252B]">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-[#282d31] p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Create new post
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-0 rounded-sm px-3 py-2 bg-[#3a3a3a] text-white focus:outline-none"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border-0 rounded-sm px-3 py-2 h-32 resize-none bg-[#3a3a3a] text-white focus:outline-none"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="content"
          >
            Skills
          </label>
          <textarea
            id="content"
            name="content"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full border-0 rounded-sm px-3 py-2 h-32 resize-none bg-[#3a3a3a] text-white focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <a href="/home">Submit post</a>
        </button>
      </form>
    </div>
  );
};

export default RedditPostForm;
