import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { handleLike, newComment } from "../reducer/blogReducer";
import { useState } from "react";

const Bloginfo = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return null;

  const handlelike = () => {
    dispatch(handleLike(blog, blog.id));
  };

  const handleComment = (event) => {
    event.preventDefault();
    const commenttoadd = { content: comment };
    dispatch(newComment(id, commenttoadd));
    setComment("");
  };

  return (
  <div className="min-h-dvh bg-gray-900 text-gray-400 px-5 py-12">
    <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-40 rounded-lg p-8 shadow-lg">
      <h1 className="text-3xl text-white font-semibold uppercase mb-3">
        {blog.title}
      </h1>

      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
        {blog.content}
      </p>

      <p className="mt-4">
        <span className="font-semibold">{blog.likes}</span> Likes{" "}
        <button
          onClick={handlelike}
          className="ml-2 px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
        >
          Like
        </button>
      </p>
      <p className="mt-2 text-gray-300">Added By {blog.user.username}</p>
    </div>

    <div className="max-w-3xl mx-auto mt-10 bg-gray-800 bg-opacity-40 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">Comments</h2>
      <ul className="space-y-2 mb-4">
        {blog.comment.length > 0 ? (
          blog.comment.map((comment) => (
            <li
              key={comment.id}
              className="bg-gray-700 bg-opacity-50 p-3 rounded text-gray-200"
            >
              {comment.content}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No comments yet.</li>
        )}
      </ul>

      <form onSubmit={handleComment} className="flex gap-2">
        <input
          type="text"
          name="comment"
          placeholder="Leave a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-grow px-3 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
        >
          Post
        </button>
      </form>
    </div>
  </div>
);

};

export default Bloginfo;
