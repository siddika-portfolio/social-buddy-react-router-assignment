import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    height: 250,
    margin: 20,
  },
  display:'inline-block',
});

const Post = (props) => {
  const classes = useStyles();
  const { id, title } = props.post
  return (
    <div style={{display:"inline-grid" }}>
    <Card className={classes.root} >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" color="green" component="h2">
            Post Id: {id}
          </Typography>
          <Typography gutterBottom variant="h5" color="secondary" component="h2">
            Post Title: {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" color="primary">
          <Link to={`/post/${id}`}>Details</Link>
        </Button>

      </CardActions>
    </Card>
    </div>


  );
};

export default Post;