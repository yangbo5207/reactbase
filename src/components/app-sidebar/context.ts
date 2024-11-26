import {createStore} from '@/utils/moz'
import store from "./useStore";

export const {Provider, useStore} = createStore(store);
