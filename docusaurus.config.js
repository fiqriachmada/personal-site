/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  // metaName: 'google-site-verification',
  // content: 'AW4KU0bk93n6S2fA6bAL45YM4SvkBI8t8NsqDd-iEm4',
  // noIndex: true,
  title: 'fiqriachmada',
  tagline: 'Welcome to My Portfolio Hacking with HTML',
  url: 'https://fiqriachmada.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.svg',
  organizationName: 'fiqriachmada', // Usually your GitHub org/user name.
  projectName: 'personal-site', // Usually your repo name.
  themeConfig: {
    themeConfig: {
      colorMode: {
        // "light" | "dark"
        defaultMode: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: false,

        // Dark/light switch icon options
        switchConfig: {
          // Icon for the switch while in dark mode
          darkIcon: '🌙',

          // CSS to apply to dark icon,
          // React inline style object
          // see https://reactjs.org/docs/dom-elements.html#style
          darkIconStyle: {
            marginLeft: '2px',
          },

          // Unicode icons such as '\u2600' will work
          // Unicode with 5 chars require brackets: '\u{1F602}'
          lightIcon: '\u{1F602}',

          lightIconStyle: {
            marginLeft: '1px',
          },
        },
      },
    },
    navbar: {
      // style: 'default',
      title: '',
      logo: {
        alt: 'My Project Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'projects',
          label: 'Projects',
          activeBasePath: 'projects',
          position: 'right',
        },
        {
          to: 'about',
          label: 'About',
          activeBaseRegex: 'about',
          position: 'right',
        },
      ],
    },

    footer: {
      // style: 'default',
      links: [
        {
          title: 'Find me at',
          items: [
            {
              label: 'LinkedIn',
              to: 'https://www.linkedin.com/in/fiqriachmada',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/fiqriachmada',
            },
            {
              label: 'Facebook',
              to: 'https://www.facebook.com/fiqriachmada/',
            },
            {
              label: 'Github',
              to: 'https://github.com/fiqriachmada',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://stupidsby.blogspot.com/',
            },
            {
              label: "GitHub's Source Code",
              href: 'https://github.com/fiqriachmada/personal-site',
            },
          ],
        },
        // {
        //   title: 'Legal',
        //   // Please do not remove the privacy and terms, it's a legal requirement.
        //   items: [
        //     {
        //       label: 'Privacy',
        //       href: 'https://opensource.facebook.com/legal/privacy/',
        //     },
        //     {
        //       label: 'Terms',
        //       href: 'https://opensource.facebook.com/legal/terms/',
        //     },
        //   ],
        // },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `®${new Date().getFullYear()} Build with &nbsp❤️&nbsp using Facebook's Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/fiqriachmada/personal-site/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
