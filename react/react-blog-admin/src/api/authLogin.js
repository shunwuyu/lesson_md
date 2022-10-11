import {
    visitorEmail,
    visitorPwd
} from '@/utils/constant'
export const signInWithEmailAndPassword = (adminEmail, adminPwd) => {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (adminEmail == visitorEmail && adminPwd == visitorPwd) {
                resolve()
            } else {
                reject()
            }
        }, 1000)
    }) 
    return p;
}