/**
 * Created by Anno59 on 2018.10.13.
 */
import React,{Component} from 'react';
import Comment from './Comment';

class CommentList extends Component{
    constructor(){
        super();
        this.state = {
            comments:[]
        }
    }
    static defaultProps = {
			comments:[]
    }
    render(){
			// if (this.props.comments.hasOwnProperty('username')) {
			// 	this.state.comments.push(this.props.comments)
			// }
			return(
        <div>
            {this.props.comments.map((comment, i) =>
                <Comment comment={comment} key={i} />
            )}
        </div>
      )
    }
}

export default CommentList;