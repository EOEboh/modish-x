/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'components/link';
import { FaPlayCircle } from 'react-icons/fa';
import BannerBG from 'assets/item6.jpg';
import BannerThumb from 'assets/one.png';


import client1 from 'assets/6.png';
import client2 from 'assets/2.png';
import client3 from 'assets/3.png';
import client4 from 'assets/5.png';

const data = [
  {
    id: 1,
    path: '#',
    image: client1,
    title: 'shop',
  },
  {
    id: 2,
    path: '#',
    image: client2,
    title: 'fast',
  },
  {
    id: 3,
    path: '#',
    image: client3,
    title: 'secure',
  },
  {
    id: 4,
    path: '#',
    image: client4,
    title: 'rated',
  },
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            A Cutting-Edge Digital Fashion Merchandise
          </Heading>
          <Text as="p" variant="heroSecondary">
            A taste of the physical and virtual worlds of fashion
          </Text>
          <Flex style={{marginTop: '1rem'}}>
            <Button  aria-label="Get Started" 
            style={{color: '#000000', backgroundColor: '#9d3493', cursor: 'pointer'}}>
              Get Started
            </Button>
            <>
              <ModalVideo
                channel="youtube"
                isOpen={videoOpen}
                videoId="UBZ6Bd0LDjs"
                onClose={() => setVideoOpen(false)}
              />
              <Button
                style={{color: '#000', cursor: 'pointer'}}
                aria-label="Watch Video"
                onClick={handleClick}
              >
                <FaPlayCircle /> Watch Video
              </Button>
            </>
          </Flex>
          <Flex sx={styles.sponsorBox}>
            <Text sx={styles.sponsorTitle}>Experience A New Way of Digital Shopability:</Text>
            <Box sx={styles.sponsorBox.sponsor}>
              {data.map((item, index) => (
                <Link path={item.path} key={`client-key${index}`}>
                  <Image src={item.image} alt={item.title} />
                  
                </Link>
              ))}
            </Box>
          </Flex>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerThumb} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}


const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top-left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [10, 15, null, null, null, 15],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'primary',
    // width: '100% !important',
    container: {
      display: 'flex',
      mt: '1rem',
      color: 'background'
    },
    contentBox: {
      width: ['100%', null, '85%', '55%', '50%', '55%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
      padding: '1rem'
      
    },
    imageBox: {
      display: ['none', null, null, 'block'],
      justifyContent: 'center',
      ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
      mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
      mt: [0, null, null, '40px', 4, 7, 0],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      textAlign: 'right',
      width: '100%',
    },
  },
  
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
  },
};
