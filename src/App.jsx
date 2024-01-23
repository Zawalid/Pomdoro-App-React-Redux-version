import { Provider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles";
import store from "./app/store";
import AppLayout from "./components/ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <AppLayout />
      </Provider>
    </>
  );
}

export default App;
