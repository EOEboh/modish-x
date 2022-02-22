import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import About from 'sections/about';
import Feature from 'sections/feature';
import PartnerSection from 'sections/partner';

import Services from 'sections/services';
import TestimonialCard from 'sections/testimonial';
import SecurePayment from 'sections/secure-payment';
import Package from 'sections/package';
import Faq from 'sections/faq';
import ChatwootWidget from 'components/ChatwootWidget';



export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Modish-X" />
          <Banner />
          <KeyFeature />
          <TestimonialCard /> 
          {/* <Feature /> */}
          {/* <PartnerSection /> */}
          <Services />
          <About />
          <SecurePayment />
          {/* <Package /> */}
          <Faq />
        <ChatwootWidget />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
      
  );
}
