import { watch, unref } from 'vue';
import { useRouter } from 'vue-router';
import { useTitle as usePageTitle } from '@vueuse/core';

export function useTitle() {
    const { currentRoute } = useRouter();
    // console.log(currentRoute);
    const pageTitle = usePageTitle();
    watch(
        [() => currentRoute.value.path],
        () => {
            const route = unref(currentRoute);
            const tTitle = route?.meta?.title as string;
            pageTitle.value = tTitle;
        },
        { immediate: true },
    )

}