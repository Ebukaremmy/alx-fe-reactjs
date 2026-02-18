import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    // Task 1 often requires specific caching configs:
    staleTime: 5000,      // Data stays fresh for 5 seconds
    cacheTime: 600000,    // Cache stays in memory for 10 minutes
    refetchOnWindowFocus: false, // Prevents auto-refetch when switching tabs
    keepPreviousData: true,      // Keeps old data while fetching new
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Data</button>
      {data.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;