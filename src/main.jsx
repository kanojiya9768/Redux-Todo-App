import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoStoreProvider from './TodoStore/TodoStore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoStoreProvider>
    <App />
  </TodoStoreProvider>
)




