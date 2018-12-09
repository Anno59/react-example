/**
 * Created by Anno59 on 2018.10.13.
 */
import React,{Component} from 'react';
import Comment from './Comment';

class CommentList extends Component{
    static defaultProps = {
        comments:[]
    }

    constructor(){
        super();
        this.state = {
            comments:[]
        }
    }

    handleClickDelete(element){
        this.props.handleDelete(element);
    }

    render(){
        // console.log(this.props.comments)
        return(
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment comment={comment} key={i} index={i} handleDelete={this.handleClickDelete.bind(this)} />
                )}
            </div>
        )
    }
}

export default CommentList;