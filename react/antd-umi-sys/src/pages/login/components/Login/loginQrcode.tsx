import React from 'react';
import { Tooltip } from 'antd';
import { QrcodeOutlined  } from '@ant-design/icons';
import styles from './loginQrcode.less';

export default props => {
  const { onClick = () => {} } = props;
  return (
    <div style={{ textAlign: 'right' }}>
      <span className={styles.qrcode} onClick={onClick}>
        <Tooltip placement="topLeft" title="关注公众号登录">
          <QrcodeOutlined />
        </Tooltip>
      </span>
    </div>
  );
}