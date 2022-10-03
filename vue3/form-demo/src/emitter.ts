import mitt from "mitt"
import { FormItem } from "./components/form/type"
export type Events = {
    validate: undefined
    addFormItem: FormItem
}
export const emitter = mitt<Events>()