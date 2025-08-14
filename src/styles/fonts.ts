import localFont from 'next/font/local'

export const catalpa = localFont({
  src: [
    {
      path: '/catalpa-extrabold.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/catalpa-extrabold.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-catalpa',
  display: 'swap',
});

export const itc = localFont({
  src: [
    {
      path: '/itcavantgardestd-bk.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/itcavantgardestd-bk.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/itcavantgardestd-demi.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/itcavantgardestd-demi.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/itcavantgardestd-bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '/itcavantgardestd-bold.woff',
      weight: 'bold',
      style: 'normal',
    },
  ],
  variable: '--font-itc',
  display: 'swap',
});