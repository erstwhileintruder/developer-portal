/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, Box, NavLink } from 'theme-ui';
import Link from 'next/link';

const ContentsMenuItem = ({ resourcePath, slug, title, anchor, root }) => {
  return (
    <Box
      as="li"
      sx={{
        variant: 'styles.fakeLi',
      }}
    >
      <Link href={`/${resourcePath}/[slug]`} as={`/${resourcePath}/${slug}#${anchor}`} passHref>
        <NavLink
          variant="sidebar"
          sx={{
            textAlign: 'left',
            color: 'text',
            borderRadius: 'xs',
            pl: 0,
            fontWeight: () => root && 'heading',
          }}
        >
          {title}
        </NavLink>
      </Link>
    </Box>
  );
};

const FileContents = ({ resourcePath, slug, toc }) => {
  const h1s = toc.filter((x) => x.lvl === 1);
  return toc.map(({ content: title, slug: anchor, lvl }, i) => {
    const root = h1s.length === 1 ? lvl === 1 || lvl === 2 : lvl === 1;
    return (
      <Fragment key={`${anchor}${i}`}>
        {root ? (
          <ContentsMenuItem
            resourcePath={resourcePath}
            slug={slug}
            key={anchor}
            title={title}
            anchor={anchor}
            root
          />
        ) : (
          <ul
            sx={{
              m: 0,
              p: 0,
              pl: 3,
            }}
          >
            <ContentsMenuItem
              resourcePath={resourcePath}
              slug={slug}
              key={anchor}
              title={title}
              anchor={anchor}
            />
          </ul>
        )}
      </Fragment>
    );
  });
};

const Infobar = ({ resourcePath, slug, toc }) => {
  return (
    <Box
      sx={{
        border: 'solid',
        borderColor: 'mutedAlt',
        borderWidth: '0 0 0 1px',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          border: 'solid',
          borderColor: 'mutedAlt',
          borderWidth: '0 0 1px 0',
          width: '100%',
          mt: 2,
          pb: 2,
          pl: 2,
        }}
      >
        <NavLink>Contents</NavLink>
      </Box>
      <Box sx={{ px: 3 }}>
        <FileContents resourcePath={resourcePath} slug={slug} toc={toc} />
      </Box>
    </Box>
  );
};

export default Infobar;
