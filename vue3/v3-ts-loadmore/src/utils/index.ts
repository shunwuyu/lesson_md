export enum StorageType {
  Local = 'Local',
  Session = 'Session'
}

export class StorageHandler {
  // 存储 Storage
  setItem (type: StorageType, key: string, value: string) {
    if (type === StorageType.Local) {
      localStorage.setItem(key, value)
    } else {
      sessionStorage.setItem(key, value)
    }
  }

  // 获取 Storage
  getItem (type: StorageType, key: string) {
    if (type === StorageType.Local) {
      if (localStorage.getItem(key)) {
        return localStorage.getItem(key)
      }
    } else {
      if (sessionStorage.getItem(key)) {
        return sessionStorage.getItem(key)
      }
    }
  }

  // 移除Storage
  remove (type: StorageType, key: string) {
    if (type === StorageType.Local) {
      if (localStorage.getItem(key)) localStorage.removeItem(key)
    } else {
      if (sessionStorage.getItem(key)) sessionStorage.removeItem(key)
    }
  }

  // 清空Storage
  clear (type: StorageType) {
    if (type === StorageType.Local) {
      localStorage.clear()
    } else {
      sessionStorage.clear()
    }
  }
}

// 这里使用 localStorage
export const storageType = StorageType.Local

export const arrToObj = <T extends {_id?: string}>(arr: Array<T>) => {
    return arr.reduce((prev, current) => {
      if (current._id) {
        prev[current._id] = current
      }
      return prev
    }, {} as { [key: string]: T })
}

export const objToArr = <T>(obj: {[key: string]: T}) => {
    return Object.keys(obj).map(key => obj[key])
}




