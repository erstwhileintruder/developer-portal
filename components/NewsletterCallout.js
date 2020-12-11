/** @jsx jsx */
import { useState } from 'react';
import {
  Container,
  Button,
  jsx,
  Input,
  Heading,
  Text,
  Checkbox,
  Label,
  Grid,
  Flex,
  Link as ThemeLink,
} from 'theme-ui';
import useEmailSubscribe from '../hooks/useEmailSubscribe';

const NewsletterCallout = () => {
  const [agreed, setAgreed] = useState(false);
  const { inputEl, subscribe, loading } = useEmailSubscribe();
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid gap={3}>
        <Heading sx={{ display: 'flex', justifyContent: 'center' }} variant="mediumHeading">
          Want Maker dev updates dripping into your inbox?
        </Heading>
        <Flex sx={{ flexDirection: 'column', justifyContent: 'center' }}>
          <Text variant="plainText" sx={{ alignSelf: 'center' }}>
            Stay updated with the latest developments from the Maker community.
          </Text>
          <Text sx={{ alignSelf: 'center', pb: 3 }} variant="plainText">
            News, stories, announcements, tips and code snippets.
          </Text>
        </Flex>
        <Flex sx={{ justifyContent: 'center' }}>
          <Input
            aria-label="Email for newsletter"
            ref={inputEl}
            type="email"
            placeholder="Email"
            sx={{
              fontFamily: 'heading',
              fontSize: 5,
              bg: 'onBackground',
              borderColor: 'onBackground',
              borderRadius: (theme) => `${theme.radii.small}px 0px 0px ${theme.radii.small}px`,
              pl: 4,
              '&:focus': {
                color: 'background',
              },
            }}
          ></Input>
          <Button
            disabled={!agreed || loading}
            onClick={subscribe}
            sx={{
              borderColor: 'primary',
              borderRadius: (theme) => `0px ${theme.radii.small}px ${theme.radii.small}px 0px`,
              py: 2,
              width: 7,
              fontSize: 5,
            }}
          >
            Sign up
          </Button>
        </Flex>
        <Label sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Checkbox onChange={() => setAgreed(!agreed)} />
          <Text variant="plainText" sx={{ fontSize: 4 }}>
            I agree to the <ThemeLink>Terms of Service</ThemeLink> and the{' '}
            <ThemeLink>Privacy Policy</ThemeLink>
          </Text>
        </Label>
      </Grid>
    </Container>
  );
};

export default NewsletterCallout;