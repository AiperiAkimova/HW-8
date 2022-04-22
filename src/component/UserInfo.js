import CommentWrapper from './CommentWrapper';
import CommentAvatar from './CommentAvatar';
import './UserInfo.css';

function UserInfo(props) {
  return (
    <CommentWrapper className="UserInfo">
        <CommentAvatar author={props.author} />
        <div className="UserInfo-name">{props.author.name}</div>
    </CommentWrapper>
  );
}
export default UserInfo;