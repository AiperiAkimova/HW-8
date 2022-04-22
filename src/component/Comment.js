import CommentDate from './CommentDate';
import UserInfo from './UserInfo';
import CommentWrapper from './CommentWrapper'
import './Comment.css'
function Comment(props) {
  return (
    
    <div className="Comment">
      <UserInfo author={props.author} />
      <CommentWrapper className = 'comment'>
      <div className="Comment-text">{props.text}</div>
      <CommentDate date={props.date} /> 
      </CommentWrapper>
    </div>
   
  );
}
export default Comment;