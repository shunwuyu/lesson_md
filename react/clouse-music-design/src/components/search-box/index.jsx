import React, {useRef, useState, useEffect, useMemo} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import style from '../../assets/global-style';
import _ from 'lodash'

const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 6px;
  padding-right: 20px;
  height: 40px;
  background: ${style["theme-color"]};
  .icon-back{
    font-size: 24px;
    color: ${style["font-color-light"]};
  }
  .box{
    flex: 1;
    margin: 0 5px;
    line-height: 18px;
    background: ${style["theme-color"]};
    color: ${style["highlight-background-color"]};
    font-size: ${style["font-size-m"]};
    outline: none;
    border: none;
    border-bottom: 1px solid ${style["border-color"]};
    &::placeholder{
      color: ${style["font-color-light"]};
    }
  }
  .icon-delete{
    font-size: 16px;
    color: ${style["background-color"]};
  }
`

const SearchBox = ({handleQuery}) => {
    const navigate = useNavigate()
    const queryRef = useRef();
    const [query, setQuery] = useState('');
    const handleChange = (e) => {
        let val = e.currentTarget.value
        setQuery(val);
    };
    useEffect(() => {
        queryRef.current.focus();
    }, []);
    const clearQuery = () => {
        setQuery('');
        queryRef.current.value = '';
        queryRef.current.focus();
    }
    useEffect(() => {
        handleQueryDebounce(query);
        // eslint-disable-next-line 
    }, [query]);
    let handleQueryDebounce = _.debounce(handleQuery, 500)
    const displayStyle = query ? {display: 'block'}: {display: 'none'};
    return (
        <SearchBoxWrapper>
            <i className="iconfont icon-back" onClick={() => navigate(-1)}>&#xe655;</i>
            <input ref={queryRef} className="box" placeholder="搜索歌曲、歌手、专辑" onChange={handleChange}/>
            <i className="iconfont icon-delete" onClick={clearQuery} style={displayStyle}>&#xe600;</i>
        </SearchBoxWrapper>
    )
}

export default SearchBox
