import { defineStore } from 'pinia';
import { ref, Ref } from 'vue'

export type ThemeType = 'dark' | 'red'

export const useThemeStore = defineStore('theme', () => {
    const themeType :Ref<string> = ref('red')    
    const changeTheme = (type: ThemeType) => {
        if (type == "dark") {
            themeType.value = "red"
        } else {
            themeType.value = "dark"
        }
    }
    return {
        themeType,
        changeTheme
    }
})
