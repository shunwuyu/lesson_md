import React from 'react';
import Loadable from 'react-loadable';
const Loading = (props) => {
  return <div>Loading...</div>
};

export default loader => Loadable({
  loader,
  loading:Loading,
})
