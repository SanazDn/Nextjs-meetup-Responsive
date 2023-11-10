import Layout from '../components/layout/Layout';
import '../styles/globals.css';
 
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
 
export default function RootLayout({ Component, pageProps }) {
  return (
    <Layout>
          <Component {...pageProps} />
      </Layout>
  )
}

