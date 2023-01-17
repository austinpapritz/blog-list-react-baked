import '../../services/blog.js';
import BlogCard from '../BlogCard/BlogCard.js';

import { blogsData } from '../../hooks/blogHook.js';

export default function Main() {
  const blogs = blogsData();

  return (
    <>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </>
  );
}
