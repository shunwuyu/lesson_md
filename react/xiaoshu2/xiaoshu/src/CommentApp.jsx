import React, {useState} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import styled from 'styled-components'
const Wrapper = styled.div`
    width: 500px;
    margin: 10px auto;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    padding: 20px;
`
// const CommentApp  = () => {
//     return (
//         // <div >
//         <Wrapper>
//             <CommentInput />
//             <CommentList />
//             </Wrapper>
//         // </div>
//     )
// }

// const CommentApp  = () => {
//     const handleSubmitComment = (comment) => {
//         console.log(comment)
//     };
//     return (
//         // <div >
//         <Wrapper>
//             <CommentInput 
//                 onSubmit={handleSubmitComment}
//             />
//             <CommentList />
//             </Wrapper>
//         // </div>
//     )
// }

const CommentApp  = () => {
    let [comments, setComments] = useState([
        {username: 'Jerry', content: 'Hello'},
        {username: 'Tomy', content: 'World'},
        {username: 'Lucy', content: 'Good'}
    ])
    const handleSubmitComment = (comment) => {
        // console.log(comment)
        comments.push(comment)
        console.log(comments, '--------')
        setComments([...comments]);
    };
    return (
        // <div >
        <Wrapper>
            <CommentInput 
                onSubmit={handleSubmitComment}
            />
            <CommentList comments={comments}/>
            </Wrapper>
        // </div>
    )
}

export default CommentApp