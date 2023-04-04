import { Ref, ref, isRef, watch as vueWatch  } from 'vue'
const storage = localStorage;
interface Options{
    watch: boolean
}
const defaultOptions = {
    watch: true
}
const useLocalStorage = <T = any>( key: string, initialValue?: T | Ref<T>, options?:Options)=>{
    const data = ref() as Ref<T | undefined | null>;
    const { watch } = { ...defaultOptions, ...options };
    try{
        if( initialValue !== undefined ){
            data.value = isRef( initialValue ) ? initialValue.value : initialValue;
        }else{
            data.value = JSON.parse( storage.getItem(key) || '{}' );
        }
    }catch(error){
        console.log(error,'useLocalStorage初始化失败')
    }
    const setStorage = ()=> storage.setItem( key, JSON.stringify(data.value) );;
    
    if( watch ){
        vueWatch(
            data,
            (newValue)=>{
                if( newValue === undefined || newValue === null ){
                    storage.removeItem(key);
                    return
                }
                setStorage();
            },
            {
                deep:true
            }
        )
    }
    
    setStorage()
    return data
}

export default useLocalStorage