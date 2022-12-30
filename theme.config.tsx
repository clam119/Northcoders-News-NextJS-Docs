import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import nclogo from './assets/nclogo.png'
import linkedin from './assets/linkedin.png'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: 
    <>
      <Image src={nclogo} alt="Northcoders Logo" width="24" height="24" />
      <span> &nbsp; &nbsp; Northcoders News API</span>
    </>,
  project: {
    link: 'https://github.com/clam119',
  },
  chat: {
    icon: <Image src={linkedin} alt="LinkedIn Logo" width="24" height="24" />,
    link: 'https://www.linkedin.com/in/christopher-lam-792b90161/',
  },
  docsRepositoryBase: 'https://github.com/clam119/northcoders-news-nextjs-docs',
  footer: {
    text: 
    <>
      <span> 
        <strong> Docs </strong>
        <ul>
          <li>
            <a href="/">API Reference</a>
          </li>
        </ul>
      </span>

      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 

      <div>  
        <strong> Community </strong>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/christopher-lam-792b90161/">LinkedIn</a>
            </li>
            <li>
              <a href="https://twitter.com/anipi119">Twitter</a>
            </li>
            <li>
              <a href="https://dev.to/clam119">Dev.to</a>
            </li>
          </ul>
      </div>
    </>
  },
}

export default config