import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Retrieves the :id from the URL

  return (
    <div>
      <h1>Blog Post ID: {id}</h1>
      <p>Now viewing post number {id}</p>
    </div>
  );
}

export default BlogPost;