import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css';
import { Router } from 'next/router';
import Page from '../components/Page';

export default function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
