import styled from 'styled-components'

export const Wrapper = styled.div`
    .recommend_store{
    display: flex;
    justify-content: center;
    padding:10px 0;
    p{
        font-size: 18px;
        font-weight: 900;
    }
}
.store_sort{
    display: flex;
    justify-content: space-around;
    select{
        width:25%;
        border: 0;
    }
    div:first-child{
        display: flex;
        align-items: center;
    }
    div:last-child{
        display: flex;
        align-items: center;
    }
}
.back_top{
    width:50px;
    height: 50px;
    background: rgba(19, 18, 18,0.3);
    color: aliceblue;
    position: fixed;
    bottom: 60px;
    right: 10px;
    border-radius: 50%;
    line-height: 50px;
    text-align: center;
    font-size: 26px
}
`