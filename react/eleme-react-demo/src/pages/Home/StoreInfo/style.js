import styled from 'styled-components'

export const Wrapper = styled.div`
     width:100%;
    padding-bottom: 60px;
    .home_loadmore{
        width:2.5rem;
        height: 0.3rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 15px;
        margin-left: 60px;
        margin-top:10px;
        line-height: 0.3rem;
        display: flex;
        justify-content: center
    }
    .home_outBox{
    width:100%;
    background: white;
    padding:10px 5px;
   
    .home_insideBox-top{
        display: flex;
        .home_imgLeft{
            height:.6rem;
            width:.7rem;
            float: left;
            margin:5px 20px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .home_content{
            display: flex;
            flex-direction: column;
            width:100%;
            margin-left: 15px;
            .home_restaurant{
               font-size: 15px; 
               font-weight: 700;
               padding: 5px 0;
               width:2.6rem;
               color:rgb(29, 29, 29);
               white-space:nowrap;
               overflow: hidden;
               text-overflow: ellipsis;

            }
            .home_sell{
                display: flex;
                font-size: 12px;
               padding: 3px 0;
            }
            .home_distance{
                display: flex;
                justify-content: space-between;
                span{
                    font-size: 11px;

                }
            }
            .home_price{
                margin-left: 5px;
            }
        }
    }
    .home_insideBox-foot{
        margin-left: 100px;
        .home_discount{
            font-size: 11px;
            margin:2px;
            width:260px;
            white-space:nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

        }
        .home_icon{
            margin:4px;
            width: 18px;
            height: 18px;
            font-size: 11px;
            color: whitesmoke;
        }
        .home_icon-J{
            background: rgb(240, 115, 115);
            border-radius: 2px;
        }
        .home_icon-Z{
            background: rgb(240, 115, 115);
            border-radius: 2px;

        }
    }
}
`