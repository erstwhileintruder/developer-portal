/** @jsx jsx */
import { jsx, Box, Heading, Text, Container, Flex, Grid } from 'theme-ui';
import Link from 'next/link';
import { Icon } from '@makerdao/dai-ui-icons';
import { useBreakpointIndex } from '@theme-ui/match-media';

const ListItem = ({ title, link, linkText, description }) => {
  return (
    <Box>
      <Link href={link} passHref>
        <Grid sx={{ height: '100%', gap: 3, gridTemplateRows: '50px auto 1fr auto' }}>
          <Icon name="shape_1" sx={{ height: '50px', width: '50px' }}></Icon>
          <Heading sx={{ cursor: 'pointer' }} variant="smallHeading">
            {title}
          </Heading>
          <Text sx={{ cursor: 'pointer' }}>{description}</Text>
          <Flex sx={{ alignItems: 'center', alignSelf: 'end' }}>
            <Icon name="arrow_right" color="primary" mr={2} />
            <Text sx={{ cursor: 'pointer' }}>{linkText}</Text>
          </Flex>
        </Grid>
      </Link>
    </Box>
  );
};

const GuideGrid = ({ resources, path }) => {
  const bpi = useBreakpointIndex({ defaultIndex: 2 });
  return (
    <Container>
      <Grid columns={4} gap={5}>
        {resources.map(
          ({
            data: {
              frontmatter: { group, title, slug, description },
            },
          }) => {
            return (
              <ListItem
                key={title}
                title={title}
                type={group}
                description={description}
                link={`/${path}/${slug}/`}
                linkText={'Read'}
                isMobile={bpi === 0}
              />
            );
          }
        )}
      </Grid>
    </Container>
  );
};

export default GuideGrid;