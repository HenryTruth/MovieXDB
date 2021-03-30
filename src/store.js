import { reactive } from 'vue'
import 'es6-promise/auto'

class Store {
    constructor() {
        this.state = reactive({
            ApiResult:[],
        })
    }
    
    setApiResult = (result) =>{
        this.state.ApiResult.push(result)
        return this.state.ApiResult
    }
}

export const store = new Store()


