import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width:100%;
    height: .8rem;
    background: skyblue;
    .citygps{
        width:100%;
        height: 0.4rem;
        font-size: 18px;
        line-height: 0.4rem;
        color:#fff;
        i{
            padding:0 5px;
            font-size: 22px;
        }
    }
    .header_search{
        width:98%;
        height: 0.3rem;
        input{
            width: 100%;
            height: 100%;
            border: 0;
            margin-left: 1%;
            padding-left:5px;
        }
    }
`