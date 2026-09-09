import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { router } from "./router/router";
import ThemeProvider from './providers/ThemeProvider';
import './styles/reset.css';
import './styles/constants.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;




