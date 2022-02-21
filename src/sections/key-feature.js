/** @jsx jsx */
import React, { useEffect } from 'react';
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/key-feature/vector.svg';
import Editing from 'assets/key-feature/editing.svg';
import Speed from 'assets/key-feature/speed.svg';

// Animate on scroll library
import AOS from 'aos';

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: 'Vector',
    title: 'Digital Wearables',
    text:
      'Digital fashion wearables as well its physical wearable with equal value',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'Monitoring',
    title: 'Initial NFT Offering',
    text:
      'Get an NFT of the digital wearable, serving as digital assets with utility functions',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Quality',
    title: 'Digital Ownership Rights',
    text:
      'You possess exclusive rights to any NFT and wearable you buy as long as you own them',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Quality',
    title: 'Fashion Advertisement',
    text:
      'A platform to expose your brand to the world, with expected returns',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Quality',
    title: 'Leasing',
    text:
      'Own NFTs and wearables for a specified period of time with as much rights as buying it',
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
          slogan="Products We Are Offering"
          title="The Exciting Features of Modish-X"
        />

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
    // mt: '35px',
    mb: '35px',
    textAlign: 'center'
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
