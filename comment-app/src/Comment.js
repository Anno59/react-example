/**
 * Created by Anno59 on 2018.10.13.
 */
import React,{Component} from 'react';

class Comment extends Component{
    // static defaultProps = {
    //     comment:{
    //         username:'',
    //         content:''
    //     }
    // }
    render(){
        return(
          <div className='comment'>
              <div className='comment-user'>
                  <span>{this.props.comment.username} </span>：
              </div>
              <p>{this.props.comment.content}</p>
          </div>
        )
    }
}

export default Comment;