import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/orders',
    method: 'get',
    params: query
  })
}