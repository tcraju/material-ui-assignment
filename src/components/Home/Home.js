import React, { useState, useEffect } from 'react';
import { Container, Grid } from "@material-ui/core";
import SinglePost from '../SinglePost/SinglePost';


const Home = () => {
    const [posts, setPosts] = useState([]);
 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( response => response.json())
        .then(data => setPosts(data))
    },[]);


    return (
        
        <Container>
          <br/>
          <br/>
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid key={post.id} item xs={12} md={6} lg = {4}>
              <SinglePost post={post}  />
            </Grid>
          ))}

        </Grid>
      </Container>
    );
};

export default Home;