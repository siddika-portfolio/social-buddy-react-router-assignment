import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },

}));


const CommentDetail = (props) => {
    const classes = useStyles();
    const { name, body } = props.comment;

    const nameStyle={
        margin: "20px"
    }
    return (
        <div style={{nameStyle}}>
            <h3>{name}:</h3>
            <div className={classes.root}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <br />
                <p>Comment:<small> {body}</small></p>
            </div>



        </div>






    );
};

export default CommentDetail;