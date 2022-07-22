import styled from 'styled-components'
export const HeaderWrapper = styled.div`
    height: 1.4rem;
    padding: 0.4rem;
    background-color: #ffffff;
    .logo {
        display: inline-block;
        width: 3.1rem;
        margin-left: 0.9rem;
    }
    .avatar {
        float: right;
        width: 1.2rem;
        height: 1.2rem;
        margin-right: 0.6rem;
        svg {
            border-radius: 50%;
        }
    }
    .search-icon {
        float: right;
        font-size: 1.2rem;
        margin-right: 1.2rem;
    }
`