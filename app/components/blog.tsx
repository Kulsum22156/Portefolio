"use client";

import { useState } from "react";

type BlogEntryProps = {
  title: string;
};

export default function BlogFormEntry({ title }: BlogEntryProps) {
  const [entryTitle, setEntryTitle] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Pas de DB → on montre juste la structure
    console.log({
      entryTitle,
      entryDate,
      content,});
   setEntryTitle("");
    setEntryDate("");
    setContent("");
  }

  return (
    <div className="p-4 border border-dashed border-purple-400 rounded-2xl shadow-sm mx-4 my-8 ">
      
      <h3 className="text-lg font-semibold text-purple-200 mb-4">
        {title}
      </h3>
      <p className="text-xl text-purple-900 mb-8">
        Entrez une nouvelle donnée :
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={entryTitle}
          onChange={(e) => setEntryTitle(e.target.value)}
          placeholder="Titre... "
          className="w-full px-3 py-2 rounded-lg border border-purple-300 bg-transparent text-purple-50"
          required
        />

        <input
          value={entryDate}
          onChange={(e) => setEntryDate(e.target.value)}
          placeholder="Date..."
          className="w-full px-3 py-2 rounded-lg border border-purple-300 bg-transparent text-purple-50"
          required
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Description..."
          rows={3}
          className="w-full px-3 py-2 rounded-lg border border-purple-300 bg-transparent text-purple-50 resize-none"
          required
        />

        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Ajouter
        </button>
      </form>
    </div>
  );}
