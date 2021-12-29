import React, {useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';

export const ExamplePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json()
            .then((data) => {
                console.log(data);
                setUser(data);
            }))
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Titulo', width: 250 },
        { field: 'body', headerName: 'Texto', width: 1400 }
      ];

    return (
        <div style={{ height: 650, width: '100%' }}>
            <DataGrid
                rows={user}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
            />
        </div>
    );
};