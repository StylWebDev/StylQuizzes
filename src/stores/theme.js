import {defineStore} from 'pinia'
import {ref} from "vue";

export const useThemeStore = defineStore('theme', () => {
    const emerald = ref(
        {
            trans: "transition ease-out duration-500 "
        }
    )

    const isOpen = ref(false);

    return {emerald,isOpen}
})