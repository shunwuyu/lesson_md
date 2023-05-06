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

export const storageType = StorageType.Local
