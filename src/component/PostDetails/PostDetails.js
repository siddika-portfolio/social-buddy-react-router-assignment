import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetail from '../CommentDetail/CommentDetail';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 70,
        padding: 20,
    },
    

});


const PostDetails = () => {
    const classes = useStyles();

    const { postId } = useParams();
    const [post, setPost] = useState({});

    const [commentDetail, setCommentDetail] = useState([]);
   
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCommentDetail(data))
    }, [postId])

   

    return (
        <div>

            <Card className={classes.root}>
                <CardActionArea>
                    <Typography gutterBottom variant="h4" color="primary" component="h2">
                        Post Id: {post.id}
                    </Typography>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                            Title:-  {post.title}
                        </Typography>
                        <Typography variant="body1" color="Secondary" component="p">
                            <br/>
                            <h4>Description</h4>............  {post.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                </CardActions>
            </Card>
            <div>
                {
                    commentDetail.map(comment => <CommentDetail comment={comment}></CommentDetail>)
                }
            </div>
           
        </div>

    );
};

export default PostDetails;