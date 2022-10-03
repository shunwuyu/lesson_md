import { ResInfoList } from './model';
import { get } from '../../utils/http';

enum URL {
    // list = '/v1/home/list',
    info = '/v1/home/info',
}

const info = async () => get<ResInfoList>({ url: URL.info });

export default { info };
