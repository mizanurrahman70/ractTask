import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

// Define the Post interface to match the JSON structure
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const columns: GridColDef<Post>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'userId', headerName: 'User ID', width: 150 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 400 },
];

const PostsDataGrid: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data: Post[] = await response.json();
                setPosts(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Box sx={{ height: '50vh', width: '100%' }}>
            <DataGrid
                rows={posts}
                columns={columns}
                pageSizeOptions={[5, 10, 25, 50, 100]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
};

export default PostsDataGrid;
