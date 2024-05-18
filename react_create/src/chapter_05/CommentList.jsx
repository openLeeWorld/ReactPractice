import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "강민경",
        comment: "리액트 ㅅㅂ"
    },
    {
        name: "이인제",
        comment: "리액트 ㅋㅋ"
    },
    {
        name: "유재석",
        comment: "리액트 뭐니?"
    }
]
function CommentList(props) {
    return (
        <div>
            {comments.map((comment, index) => {
                return (
                    <Comment key={index} name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;