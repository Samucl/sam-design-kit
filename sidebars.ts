import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'html',
      value: '<div>Guidelines</div>',
      defaultStyle: true,
    },
    {
      type: 'html',
      value: '<div>Components</div>',
      defaultStyle: true,
    },
    'Components/Button',
  ],
};

export default sidebars;
