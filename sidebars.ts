import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import { colors } from './src/themes'

const style = `color:${colors.primary};`

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'html',
      value: `<div style=${style}>GUIDELINES</div>`,
      defaultStyle: true,
    },
    'Guidelines/Colors',
    'Guidelines/Typography',
    'Guidelines/Iconography',
    'Guidelines/Effects',
    {
      type: 'html',
      value: `<div style=${style}>COMPONENTS</div>`,
      defaultStyle: true,
    },
    'Components/Button',
  ],
};

export default sidebars;
