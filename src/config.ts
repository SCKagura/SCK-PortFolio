import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'SCKagura',
  subtitle: 'Profile',
  lang: 'en',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 150,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/SCK_LABLAB-Photo.jpg',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: '/favicon/image.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/sckagura',     // Internal links should not include the base path, as it is automatically added
    //   external: true,                               // Show an external link icon and will open in a new tab
    // },
    {
      name: 'Mail to me' ,
      url:'mailto:skagura9164@gmail.com?subject=Contact&body=Hello',
      external: true ,

    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/SCK_LABLAB-Photo.jpg',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Boonyawut Buthboon',
  bio: "Hi, I'm Boonyawut Buthboon, a Computer Engineering student at Chiang Mai University. I'm passionate about technology and always eager to learn new things.",
  links: [
    {
      name: 'Facebook',
      icon: 'fa6-brands:facebook',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://www.facebook.com/bywbb.boss/',
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://www.instagram.com/bywbboss/',
    },
    
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/sckagura',
    },
    {
      name: 'LinkedIn', 
      icon: 'fa6-brands:linkedin', 
      url: 'https://www.linkedin.com/in/boonyawut-buthboon-0a8308339/', 
    },
    {
      name: 'TikTok',
      icon: 'fa6-brands:tiktok',
      url: 'https://www.tiktok.com/@12chopwesc',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://steamcommunity.com/profiles/76561199131490321/',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
