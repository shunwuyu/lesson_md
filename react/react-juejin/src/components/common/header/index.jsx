import React from 'react';
import styled from 'styled-components';
import style from '../../assets/global-style';

const HeaderContainer = styled.div`
  position: fixed;
  padding: 5px 10px;
  padding-top: 0;
  height: 40px;
  width: 100%;
  z-index: 100;
  display: flex;
  line-height: 40px;
  color: ${style["font-color-light"]};
  .back{
    margin-right: 5px;
    font-size: 20px;
    width: 20px;
  }
  >h1{
    font-size: ${style["font-size-l"]};
    font-weight: 700;
  }
`

const Header = React.forwardRef((props, ref) => {
    return (
        <HeaderContainer ref={ref}>
        
        </HeaderContainer>    
    )
})