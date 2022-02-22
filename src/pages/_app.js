// import { useEffect } from 'react';
// import Router from 'next/router';
// import { initGA, logPageView } from 'analytics';
// Load DM Sans typeface


import Head from 'next/head'

import 'typeface-dm-sans';

// animate on scroll
import 'aos/dist/aos.css';

// Load other package css file
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';

export default function CustomApp({ Component, pageProps }) {
  // useEffect(() => {
  //   initGA();
  //   logPageView();
  //   Router.events.on('routeChangeComplete', logPageView);
    
  // }, []);

  return (
    <>
   <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
   </Head>
   <Component {...pageProps} />;
   </>
   )
}
