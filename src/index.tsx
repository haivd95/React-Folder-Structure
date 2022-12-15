import React from "react"
import "src/assets/scss/index.scss"
import App from "./App/App"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { createRoot } from "react-dom/client"

const element = document.getElementById("root")
const root = createRoot(element!)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
