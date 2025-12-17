"use client";

import { createPost } from "../lib/blog";

type BlogEntryProps = {
  title?: string;
};

export default function BlogFormEntry({ title }: BlogEntryProps) {

  return (
    <div className="p-4 border border-dashed border-purple-400 rounded-2xl shadow-sm mx-4 my-8 ">
      
      <h3 className="text-lg font-semibold text-purple-200 mb-4">
        {title}
      </h3>
      <p className="text-xl text-purple-300 mb-4">
        Entrez une nouvelle donnée :
      </p>
      <form action={createPost} className="space-y-4">
        <input
          name="title"
          placeholder="Titre... "
          className="w-full px-3 py-2 rounded-lg border border-purple-300 bg-transparent text-purple-50"
          required
        />

        <input
          name="date"
          placeholder="Date..."
          className="w-full px-3 py-2 rounded-lg border border-purple-300 bg-transparent text-purple-50"
          required
        />

        <textarea
          name="content"
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
