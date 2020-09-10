import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../SinglePost/SinglePost.css'
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,

    },
});


const SinglePost = (props) => {
    // console.log(props);
    const { id, title, body } = props.post
    const classes = useStyles();

    return (


        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Image Not Found"
                    height="140"
                    image={`https://picsum.photos/id/${id}/400/200`}
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

            <CardActions>
                <Link to = {`/details/${id}`} style={{ textDecoration: 'none' }} >
                    <Button size='medium' color="inherit" className='main-btn'>
                        Read More
                    </Button>
                </Link>
            </CardActions>
        </Card>


    );
};

export default SinglePost;