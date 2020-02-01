/**
 * @prettier
 */

import * as React from 'react';
import { Button, Divider, Typography } from '@material-ui/core';
import { noop } from 'lodash';

import Link from '~/components/Link';

import styles, { useStyles } from './styles';

const Page: React.FC = (): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <>
      <style jsx>{styles}</style>

      <div className="container">
        <div className="contentContainer">
          <Typography variant="h6">Cheddur Has Shut Down</Typography>

          <Divider
            classes={{
              root: classes.dividerRoot,
            }}
          />

          <Typography
            classes={{
              root: classes.typographyRoot,
            }}
          >
            From back-of-the-napkin drawings in 2016, to production mobile apps
            in 2017, to seed investments in 2018, to pivoting our way through
            2019… building and growing the Cheddur community has been one hell
            of a ride.&nbsp;
            <span aria-label="heart" role="img">
              🎢
            </span>
          </Typography>

          <Typography
            classes={{
              root: classes.typographyRoot,
            }}
          >
            Thank you to our wonderful community for sharing our deep passion
            for cryptocurrency and for inspiring us each and every day to build
            a better industry. We simply wouldn’t have existed from&nbsp;
            <Link
              target="_blank"
              to="https://blog.cheddur.com/introducing-cheddur-your-personal-guide-to-digital-currency-6c13a8de13d7"
              variant="text"
            >
              Oct. 2017
            </Link>
            &nbsp;&#8594;&nbsp;
            <Link
              target="_blank"
              to="https://blog.cheddur.com/were-shutting-cheddur-down-db0e9da644bf"
              variant="text"
            >
              Jan. 2020
            </Link>
            &nbsp; without all of you.&nbsp;
            <span aria-label="heart" role="img">
              💙
            </span>
          </Typography>

          <Link
            target="_blank"
            to="https://blog.cheddur.com/were-shutting-cheddur-down-db0e9da644bf"
          >
            <Button
              classes={{
                root: classes.buttonRoot,
              }}
              onClick={noop}
              variant="outlined"
            >
              Read the Full Announcement
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
