import styled from 'styled-components'
export const TabBarWrapper = styled.div`
    .tab-bar {
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        height: 2rem;
        &::-webkit-scrollbar {
            display: none
        }
        .tab {
            flex: 0 0 auto;
            padding: 0 0.8rem;
            color: #757575;
            &.indicate {
                color: #fb7299;
                span:after {
                    position: absolute;
                    content: "";
                    width: 100%;
                    left: 0;
                    bottom: 0.1rem;
                    border-bottom: 0.11rem solid #fb7299;
                }
            }
            &.highlight {
                color: #fb7299
            }
            span {
                position: relative;
                display: inline-block;
                padding: 0 0.1rem;
                font-size: 0.7rem;
                line-height: 2rem;
            }
        }
        
    }
  
`