/** @jsx jsx */
import { useEffect } from 'react';
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';

// Animate on scroll library
import AOS from 'aos';

const faqs = [
  {
    title: 'How will these wearables be sold ?',
    contents: (
      <div>
        Me i no even know oooo, make Tunmise and Sam and co come tell us. Me sef dey reason how to buy sef, so i go escape poverty this year
      </div>
    ),
  },
  {
    title: 'Are there fine boys in the team?',
    contents: (
      <div>
        Yes baby, na me fine pass, no cap. I con get six packs join, hey God!!!!!! Hide your girls
      </div>
    ),
  },
  {
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit?`,
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    ),
  },
  {
    title: `culpa qui officia deserunt mollit anim id est laborum.`,
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    ),
  },
];
export default function Faq() {
  useEffect(() => {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, [])
  return (
    <section id="faq" sx={{ variant: 'section.faq' }} data-aos="zoom-in-down"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <Container>
        <SectionHeader
          title=" Our Frequently asked question"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
