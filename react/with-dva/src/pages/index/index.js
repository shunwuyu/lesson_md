import Link from 'umi/link';
import { connect } from 'dva';
import { Button } from 'antd-mobile';
import { FormattedDate } from 'react-intl';
import Count from './components/Count';
import styles from './index.css';

function App(props) {
  return (
    <div className={styles.normal}>
      <FormattedDate value={Date.now()} />
      <h2>
      
      </h2>
      <Count />
      <br />
      <Button
       
      >
        Set Title
      </Button>
      <Button
        
      >
        Throw error
      </Button>
      <br />
      <div>
        <Link to="/list">Go to /list</Link>
      </div>
      <div>
        <Link to="/list/list">Go to /list/list</Link>
      </div>
      <div>
        <Link to="/list/search">Go to /list/search</Link>
      </div>
      <div>
        <Link to="/admin">Go to /admin</Link>
      </div>
    </div>
  );
}

export default connect()(App);