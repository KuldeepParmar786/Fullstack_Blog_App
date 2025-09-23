import {handleLike,removeBlog} from '../reducer/blogReducer'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
const Blog = ({ blog }) => {
  const dispatch = useDispatch();
  const latestBlog = useSelector(state => state.blogs.find(b => b.id === blog.id) || blog);

  const handledelete = async () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${latestBlog.title}"?`);
    if (confirmDelete) {
      dispatch(removeBlog(latestBlog.id));
    }
  };
 return (
    <div className=" bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative
                transform transition-all duration-300 
                hover:scale-105 hover:bg-gray-700 hover:bg-opacity-60 hover:shadow-lg hover:shadow-indigo-500/50">
  <button
    onClick={() => handledelete()}
    className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
  >
    Delete
  </button>

  <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
    {blog.title}
  </h1>

  <p className="leading-relaxed mb-3 text-gray-300">
    {blog.discription}
  </p>

  <a
    href={`/${blog.id}`}
    className="text-indigo-400 inline-flex items-center hover:text-indigo-300"
  >
    Learn More →
  </a>
     
      <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
        <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
          ❤️ {blog.likes}
        </span>
        <span className="text-gray-500 inline-flex items-center leading-none text-sm">
          💬 {blog.comment.length}
        </span>
      </div>
    </div>
  );  
}

export default Blog