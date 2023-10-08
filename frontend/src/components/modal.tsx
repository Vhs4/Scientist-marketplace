"use client";
import React, { useState } from "react";

const RedditPostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para enviar a postagem ao servidor ou realizar outras operações
    console.log("Título:", title);
    console.log("Conteúdo:", content);
    // Limpar os campos após enviar a postagem
    setTitle("");
    setContent("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1E252B]">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-[#282d31] p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Criar Nova Postagem
        </h2>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="title"
          >
            Título
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
            Conteúdo
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
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Enviar Postagem
        </button>
      </form>
    </div>
  );
};

export default RedditPostForm;
