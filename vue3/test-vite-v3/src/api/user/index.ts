import { ReqParams, ResResult } from './model';
import { post } from '../../utils/http';
enum URL {
    login = '/v1/user/login',
    permission = '/v1/user/permission',
}

const login = async (data: ReqParams) => post<ResResult>({ url: URL.login, data })

export default { login }