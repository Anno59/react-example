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
    constructor(){
        super();
         this.state = {
             date : ''
         }
    }

    _refreshCommentTime(){
        setInterval(()=>{
            this._formatDateTime();
        },1000)
    }

    _formatDateTime(){
        let commentDate = this.props.comment.date;
        let intervalTime = parseInt((+new Date() - commentDate) / 1000);
        let unit;
        if(intervalTime < 60){
            unit = '秒前'
        }else if(intervalTime >= 60){
            intervalTime  = parseInt(intervalTime / 60);
            unit = '分前'
        }
        // console.log(intervalTime)
        // console.log(unit)
        this.setState({
            date : `${intervalTime}${unit}`
        })
    }

    componentWillMount(){
        this._refreshCommentTime();
    }

    render(){
        return(
          <div className='comment'>
              <div className='comment-user'>
                  <span>{this.props.comment.username} </span>：
              </div>
              <p>{this.props.comment.content}</p>
              <span className='comment-createdtime'>
                  {this.state.date}
              </span>
          </div>
        )
    }
}

export default Comment;