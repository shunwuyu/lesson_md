const TokenKey = 'vue_admin_template_token'

export function getToken() {
    return localStorage.getItem(TokenKey)
}
  
export function setToken(token) {
    return localStorage.setItem(TokenKey, token)
}
  
export function removeToken() {
    return localStorage.remove(TokenKey)
}