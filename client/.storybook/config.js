import { configure } from '@storybook/react';
import addApolloAndInfoDecorators from './addApolloAndInfoDecorators';
const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
// addApolloAndInfoDecorators();
configure(loadStories, module);
