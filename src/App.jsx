import { Provider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles";
import store, { persistor } from "./app/store";
import AppLayout from "./components/ui/AppLayout";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={<p>Loading</p>} persistor={persistor}>
          <AppLayout />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
