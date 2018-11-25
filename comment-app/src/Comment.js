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
    // constructor(){
    //     super();
    //      this.props.comment.data;
    // }

    render(){
        return(
          <div className='comment'>
              <div className='comment-user'>
                  <span>{this.props.comment.username} </span>：
              </div>
              <p>{this.props.comment.content}</p>
              <span className='comment-createdtime'>
                {this.props.comment.date}
                {/*{this.state.date}*/}
              </span>
          </div>
        )
    }
}

export default Comment;