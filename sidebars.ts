import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import { themes } from './src/themes'

const style = `color:${themes.colors.primary};`

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'GettingStarted',
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
    'Components/Input',
    'Components/Tooltip',
    'Components/Drawer',
    'Components/Checkbox',
    'Components/Expander',
    'Components/Carousel',
    'Components/Notification',
    'Components/Text',
    'Components/Loader',
  ],
};

export default sidebars;
