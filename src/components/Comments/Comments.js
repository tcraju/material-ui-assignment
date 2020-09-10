import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../Comments/Comments.css'





const Comments = (props) => {
    console.log(props);
    const {name, body, email} = props.comment;
    const imgId =  Math.floor(Math.random() * 95) + 1
   

    return (
        <div className='single-comment'>
        <Grid container spacing={1}>
         
          <Grid item md={2} xs={4}>
           
            <img id='commentor' src={`https://randomuser.me/api/portraits/men/${imgId}.jpg`} alt=""/>
   
          </Grid>
          <Grid item md={10} xs={8}>
            
                <div>
                    <h2>{name}</h2>
                    <small>{email}</small>
                    <br/>
                    <p>{body}</p>
                </div>
        
          </Grid>
          
        </Grid>
      </div>
    );
};

export default Comments;