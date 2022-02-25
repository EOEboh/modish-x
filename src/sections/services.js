/** @jsx jsx */
import { useEffect } from 'react';
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';


// Animate on scroll library
import AOS from 'aos';

import SectionHeader from 'components/section-header';

// import PatternBG from 'assets/patternBG.png';
// import PatternBG from 'assets/modish-white.png';
import ArrowOdd from 'assets/arrowOdd.png';
import ArrowEven from 'assets/arrowEven.png';

const data = [
  {
    id: 1,
    title: 'Sales of Digital & Physical Wearables',
    text:
      'We are offering you digital wearables as well as physical wearables at the same time ',
  },
  
  {
    id: 2,
    title: 'Sale of NFTs as wearables',
    text:
      'The wearables are sold in form of an NFT and you also get the physical wearable shipped to you. When you buy our products, you possess exclusive rights to its NFT and wearable as long as you own them ',
  },
  {
    id: 3,
    title: 'Leasing',
    text:
      'You also have a chance to own any of our product for a specified amount of time',
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, [])

  return (
    <section sx={styles.workflow} id="services" data-aos="zoom-out">
      <Container>
        <SectionHeader
          slogan="SERVICES"
          title="What We Offer"
          isWhite={true}  
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    padding: '1rem',
    marginTop: '1rem',
    backgroundColor: '#ffffff',
    // backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      // background:
      //   'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(157,52,147, 0.3) 50%, rgba(221,176,19, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 50px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 75, null, 100],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      opacity: 0.3,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#9d3493',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'secondary',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'text',
      opacity: 0.65,
      pr: [0, null, null, null, null, 5],
    },
  },
};
