import React, { useState  } from 'react'
import WeUI from 'react-weui';
const {
    Panel,
    PanelBody
} = WeUI;
import BookItem from './BookItem';
const Login = () => {
   const items = [1,2,3,4,5,6]
    return (
        <Panel>
            <PanelBody>
            {

            items.map((item, i) => {

                return (
                    <BookItem  key={i}  />
                )
            })
            }
            </PanelBody>
        </Panel>
    )
}

export default Login