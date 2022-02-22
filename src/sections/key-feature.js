/** @jsx jsx */
import React, { useEffect } from 'react';
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/testimonial/test2.jpg';
import One from 'assets/testimonial/one.png';
import Two from 'assets/testimonial/test6.png';
import Three from 'assets/testimonial/test7.jpg';

// Animate on scroll library
import AOS from 'aos';

const paragraph = {
     text:
      'Our promising model comes from having explored the Metaverse; We intend to leverage the possibility of using the Metaverse to strengthen the relationship between the fashion houses/designers and their consumers' 
}

const data = [
  
  {
    id: 1,
    imgSrc: Two,
    altText: 'NFT',
    title: 'Initial NFT Offering',
    text:
      'Get an NFT of the digital wearable, serving as digital assets with utility functions',
  },
  {
    id: 2,
    imgSrc: Vector,
    altText: 'Vector',
    title: 'Digital Wearables',
    text:
      'Get your digital fashion wearables as well as its physical version with equal value',
  },
  {
    id: 3,
    imgSrc: Three,
    altText: 'Ownership',
    title: 'Digital Ownership Rights',
    text:
      'When you buy our products, you possess exclusive rights to its NFT and wearable as long as you own them ',
  },
  {
    id: 4,
    imgSrc: One,
    altText: 'Fashion Advert',
    title: 'Fashion Advertisement',
    text:
      'We are the perfect platform that gives you an opportunity to expose your brand to the world',
  },
];

export default function KeyFeature() {

  useEffect(() => {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, [])

  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature" data-aos="fade-right" data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      
      <Container sx={styles.container}>
        <SectionHeader
          slogan="WHY YOU SHOULD INVEST WITH US"
          title="The Exciting Features of Modish-X"
        />
        <p>
        {paragraph.text}
        </p>

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
      
    </section>
  );
}

const styles = {
  container:{
    mt: '35px',
    mb: '35px',
    textAlign: 'center',
    padding: '1rem'
  },
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
