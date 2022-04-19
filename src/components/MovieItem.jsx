import { Link } from 'react-router-dom';
import classes from './MovieItem.module.css';
function MovieItem(props){
    return <div className={classes.card}>
        <img src={props.image} alt="preview" />
        <h2>{props.title}</h2>
        <div><span>{props.description.substring(0,100)}</span>&nbsp;<span className={classes.moreBtn}><Link to={"movie/"+props.id}>more...</Link></span></div>
        <p>Rating: {props.rating===0?"N/A":props.rating+"/10"}</p>
    </div>;
}

export default MovieItem;