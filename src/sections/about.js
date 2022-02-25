/** @jsx jsx */
import { useEffect } from 'react';
import { jsx, Container, Box, Grid, Text, Heading, Image, Button } from 'theme-ui';
import TextFeature from 'components/text-feature';
import AboutImg from 'assets/tunmise.jpg';
// import Whitepaper from '/files/whitepaper.pdf';

// Animate on scroll library
import AOS from 'aos';

const data = {
  subTitle: 'About Us',
  title: 'We are a digital enterprise that aim to create an opportunity for fashion lovers and fashion brands to connect, socialize and experience digital as well as physical shopability',
  features: [
    {
      id: 1,
      imgSrc: AboutImg,
      // altText: 'Smart Features',
      // title: 'Smart Features',
      text:
        'In Modish-X, we are a team of young, blockchain and metaverse experts and ethusiasts, we aim to use our platform in creating enormous fashion opportunities available in both digital and physical worlds.',
      
    },
    {
      id: 2,
      // imgSrc: AboutImg,
      // altText: 'Secure Contents',
      // title: 'Secure Contents',
      text:
        'We possess amazing portfolios in our respective fields, a team of Developers, Blockchain experts, 3D animators, digital marketers, social media managers and project managers.',
        
    },
  ],
};

export default function About() {

  
  useEffect(() => {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, [])



  return (
    <section sx={styles.about} data-aos='fade-left'>
      <Container sx={styles.containerBox}>
        {/* <Box sx={styles.thumbnail}>
          <Image src={CoreFeatureThumb} alt="Thumbnail" />
        </Box> */}
        <Box sx={styles.contentBox}>
          <Box sx={styles.headingTop}>
            <TextFeature subTitle={data.subTitle} title={data.title} />
          </Box>

          <Box sx={styles.thumbnail}>
            <Image src={AboutImg} altText='About Us' />
          </Box>

          <Grid gap="15px 0" columns={2} rows={6} gap={2} width={200} sx={styles.grid}>
            {data.features.map((item) => (
              <Box sx={styles.card} key={item.id}>
                
                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
        <Box sx={styles.downloadBtn}>
          <Button style={{color: '#000000', backgroundColor: '#DDB013', cursor: 'pointer'}}>
          <a
            href="/files/modishx-whitepaper.pdf"
            alt="alt text"
            target="_blank"
             rel="noopener noreferrer"
             download>
               See Our Whitepaper
          </a>
          </Button>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  about: {
    p: '1rem !important',
    py: [0, null, null, 2, null, 7],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: ['auto', null, null, '50%'],
      bottom: ['100px', 0, null, 'auto'],
      left: 0,
      // background: 'linear-gradient(-157deg, #F6FAFD, #F9FCFC) !important',
      // height: [350, 550, '60%'],
      // width: '50%',
      // zIndex: -1,
      // borderTopRightRadius: '50%',
      // borderBottomRightRadius: '50%',
      // transform: ['translateY(0)', null, null, 'translateY(-50%)'],
    },
    a:{
      textDecoration: 'none',
      color: 'background'
    }
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', null, null, 'column'],
  },
  thumbnail: {
    pl: [0, 5, 0, null, 7, 95],
    pr: [0, 5, null, null, null, 75, 95],
    order: [2, null, null, 0],
  },
  contentBox: {
    width: ['100%', 450, 550, 350, 500, 570],
    pr: [0, null, 'auto', null, null, 80],
    pl: 'auto',
    flexShrink: 0,
  },
  headingTop: {
    mt: '1rem',
    pl: [0, null, null, null, '35px', null, '55px', 6],
    mb: [3, null, null, null, 1],
    textAlign: 'center',
  },
  grid: {
    p: ['10px 0px 35px', '10px 0px 35px', '0 20px 40px', null, '0 40px 40px', 0],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    p: [
      '0 17px 20px',
      null,
      null,
      '0 0 20px',
      '20px 15px 17px',
      null,
      null,
      '25px 30px 23px',
    ],
    backgroundColor: 'primary',
    color: 'background',
    borderRadius: '10px',
    transition: 'all 0.3s',
    width: ['100%', '85%', null, '100%'],
    mx: 'auto',
    '&:hover': {
      boxShadow: [
        '0px 0px 0px rgba(0, 0, 0, 0)',
        null,
        null,
        null,
        '0px 8px 24px rgba(69, 88, 157, 0.07)',
      ],
    },
  },
  downloadBtn:{
      m: '0.4rem',
  },

  img: {
    width: ['50px', null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};
