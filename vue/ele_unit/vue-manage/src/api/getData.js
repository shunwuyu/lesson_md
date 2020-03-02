import fetch from '@/config/fetch'

export const login = data => fetch('/api/admin/login', data, 'POST');