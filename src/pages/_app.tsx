
import '../styles/index.css';
import Layout from 'src/components/layout/Layout';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import { store } from '@services/redux/store/store';
import { AuthProvider } from 'src/hooks/useAuth';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
}

export default MyApp;
