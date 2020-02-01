/**
 * @prettier
 */

import * as React from 'react';

import NAMES from '~/constants/names';
import RenderMetaTags from '~/components/RenderMetaTags';

const Meta: React.FC = (): React.ReactElement<any> => (
  <RenderMetaTags title={NAMES.APP} />
);

export default Meta;
