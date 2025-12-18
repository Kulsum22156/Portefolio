import { getPosts, deletePost } from "../lib/blog";
import BlogFormEntry from "./blog"; 

type BlogEntryProps = {section : string;};

export default async function BlogBlock({section}: BlogEntryProps){
  const posts = await getPosts(section);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {posts.map(post => (
          <div
            key={post.id}
            className="p-6 border border-purple-300 rounded-2xl shadow-sm mx-4 my-8"
          >
            <h4 className="text-xl font-bold text-purple-300">{post.title}</h4>
            <p className="mb-2 text-purple-900">{post.date}</p>
            <p className="text-sm text-purple-50">{post.content}</p>

            <form action={deletePost.bind(null, post.id)}>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Supprimer
            </button>
          </form>
          </div>
        ))}
        <div>
        <BlogFormEntry section ={section}/></div>
      </div>
    </div>
  );
}
