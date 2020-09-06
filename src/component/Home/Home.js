import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = ('https://jsonplaceholder.typicode.com/posts')
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    const headStyle={
        backgroundColor:"burlywood",
         padding:"20px"
    }
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container >
                    <h1 style={headStyle}>All Post is  here: {posts.length}</h1>
                    <div style={{ backgroundColor: '#cfe8fc', }}>
                        {
                            posts.map(item => <Post post={item}></Post>)
                        }
                    </div>
                </Container>
            </React.Fragment>


        </div>
    );
};

export default Home;