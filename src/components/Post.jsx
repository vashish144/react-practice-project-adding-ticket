import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Post.module.css'
const Post = (props) => {
  return (
    <li className={classes.post}>
      <Link to={props.id}>
        <p className={classes.author}>{props.author}</p>
        <p classes={classes.text}>{props.body}</p>
        </Link>
    </li>
  )
}

export default Post