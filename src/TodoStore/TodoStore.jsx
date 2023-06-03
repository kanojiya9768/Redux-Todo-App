import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice/TodoSlice";
import { Provider } from "react-redux";

const TodoStore = configureStore({
    reducer : {
        Todo : TodoSlice
    }
})



const TodoStoreProvider = ({children}) =>{
    return(
        <Provider store={TodoStore}>
            {children}
        </Provider>
    )
}


export default TodoStoreProvider;