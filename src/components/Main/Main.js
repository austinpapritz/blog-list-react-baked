import '../../services/blog.js';
import BlogCard from '../BlogCard/BlogCard.js';

import { useBlogs } from '../../hooks/useBlogs.js';

export default function Main() {
  const blogs = useBlogs();

  return (
    <>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </>
  );
}
