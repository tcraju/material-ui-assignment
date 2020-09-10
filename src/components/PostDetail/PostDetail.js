import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Comments from '../Comments/Comments';


const useStyles = makeStyles({
    root: {
        maxWidth: 1200,
    },
});









const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentLoad();
        postLoad();

    });




    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    //     .then( response => response.json())
    //     .then(data => setPost(data))
    // },[]);
    
    
    const commentLoad = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {method: "GET"} )
            .then(response => response.json())
            .then(data => setComments(data))
    }
    const postLoad = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {method: "GET"})
            .then(response => response.json())
            .then(data => setPost(data))
    }





    // console.log(post);
    const { id, title, body } = post

    const classes = useStyles();



    return (
        <Container>
            <Card className={classes.root}>
                <CardActionArea>

                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="300"
                        image={`https://picsum.photos/id/${id}/600/400`}
                        title="Contemplative Reptile"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>

                </CardActionArea>

                {

                    comments.map((comment) => (
                        <div key={comment.id}>
                            <Comments comment={comment}  />
                        </div>
                    ))
                }
            </Card>

        </Container>

    );
};

export default PostDetail;