import "./App.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App flex h-full ">
      <Provider store={store}>
        <div className="flex-1 max-h-full overflow-hidden overflow-y-hidden">
          <RouterProvider router={router} />
        </div>
      </Provider>
    </div>
  );
}

export default App;
