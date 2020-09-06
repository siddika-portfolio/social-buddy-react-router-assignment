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

const Photo = (props) => {
    const classes = useStyles();
    const { id } = props.photo;
    return (
        <div className={classes.root}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <h3>{id}</h3>
        </div>

        
            
           
    
    );
};

export default Photo;