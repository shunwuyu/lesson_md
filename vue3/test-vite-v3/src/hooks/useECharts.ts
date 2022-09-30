import type { EChartsOption } from 'echarts';
import type { Ref } from 'vue';
import { Fn, tryOnUnmounted, useDebounceFn } from '@vueuse/core';
import { unref, nextTick, computed, ref } from 'vue';
import echarts from '../utils/echarts';

export function useECharts( elRef: Ref<HTMLDivElement>,
    theme: 'light' | 'dark' | 'default' = 'default',
    ) {
    let chartInstance: echarts.ECharts | null = null;
    const cacheOptions = ref({}) as Ref<EChartsOption>;
    const getOptions = computed(() => {
        return {
            backgroundColor: 'transparent',
            ...cacheOptions.value,
        } as EChartsOption;
    });    
    
    function initCharts() {
        const el = unref(elRef);
        if (!el || !unref(el)) {
          return;
        }
    
        chartInstance = echarts.init(el);
        
        // if (el.offsetHeight === 0) {
        //   useTimeoutFn(() => {
        //     resizeFn();
        //   }, 30);
        // }
      }

    function setOptions(options: EChartsOption, clear = true) {
        cacheOptions.value = options;
        if (unref(elRef)?.offsetHeight === 0) {
            setTimeout(() => {
                setOptions(unref(getOptions));
            }, 30)
            return 
        }
        nextTick(() => {
            setTimeout(() => {
                if (!chartInstance) {
                    initCharts();
                    if (!chartInstance) return;
                }
                clear && chartInstance?.clear();
                chartInstance?.setOption(unref(getOptions));
            }, 30)
        })
    }
    return {
        setOptions
    }
}