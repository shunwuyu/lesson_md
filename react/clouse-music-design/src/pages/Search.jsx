import React, {useState, useEffect} from 'react'
import { CSSTransition } from 'react-transition-group';
import { Container, ShortcutWrapper, HotKey, SongItem } from './style';
import SearchBox from './../components/search-box/index';
import { EnterLoading } from './style';
import Loading from '../components/loading';
import { getSuggestList, getHotList } from '../api/request';
import { getName } from '../api/utils';

const Search = () => {
    const [query, setQuery] = useState('');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [suggestList, setSuggestList] = useState({});
    const [hotList, setHotList] = useState([])

    useEffect(() => {
        setShow(true);   
    }, []);
    const handleQuery = async (q) => {
        // console.log(q, '|||||----------');
        setQuery(q);
        if(!q) return;
        setLoading(true)
        let data = await getSuggestList(q)
        let {data:{result:{hots}}} = await getHotList()
        // console.log(hots)
        // console.log(data.data.result)
        setSuggestList(data.data.result)
        setHotList(hots)
        setLoading(false)
    }

    const renderHotKey = () => {
        let list =  hotList || [];
        return (
          <ul>
            {
              list.map(item => {
                return (
                  <li className="item" key={item.first}>
                    <span>{item.first}</span>
                  </li>
                )
              })
            }
          </ul>
        )
      };

    const renderSongs = () => {
        const { songs } = suggestList
        // if (suggestList)
        // console.log(songs)
        if (!songs) return 
        return (
            <SongItem style={{paddingLeft: "20px"}}> 
            {
            songs.map(item => {
                return (
                <li key={item.id}>
                    <div className="info">
                    <span>{item.name}</span>
                    <span>
                        { getName(item.artists) } - { item.album.name }
                    </span>
                    </div>
                </li>
                )
            })
            }
            </SongItem>
        )
    }
    
    return (
        <CSSTransition 
        in={show} 
        timeout={300} 
        appear={true} 
        classNames="fly"  
        unmountOnExit
        // onExited={() => navigate(-1)}
        >
            <Container>
                <div className="search_box_wrapper">
                    <SearchBox handleQuery={handleQuery}></SearchBox>
                </div>
                <ShortcutWrapper show={query}>
                    <div>
                        <HotKey>
                            <h1 className="title">热门搜索</h1>
                            {renderHotKey()}
                        </HotKey>
                    </div>
                </ShortcutWrapper>
                <ShortcutWrapper show={query}>
                    <div>
                        { renderSongs() }
                    </div>
                </ShortcutWrapper>
                {loading? <EnterLoading><Loading></Loading></EnterLoading> : null}
            </Container>
        </CSSTransition>
    )
}

export default Search