import { Provider as ReduxProvider } from 'react-redux';
import { Provider as AuthProvider } from "next-auth/client";
import { GlobalStyle, CSSReset } from "../styles/globals";
import store from '../redux/store';

function App({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
        <GlobalStyle />
        <CSSReset />
      </ReduxProvider>
    </AuthProvider>
  );
}

export default App;
