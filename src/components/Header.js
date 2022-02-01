import React, { useState } from 'react'
import { HeaderWrapper, NavButton, MenuWrapper, MobileActionBox, DesktopActionBox } from './Header.styled'
import { Link } from '@reach/router'

import { ReactComponent as Logo } from '../images/logo.svg'

export default function Header({ menuData }) {


  const [isOpen, setisOpen] = useState(false)
  const { menuItems: { nodes } } = menuData[0]
  console.log(<Logo />)

  return (

    <HeaderWrapper isOpen={isOpen}>

      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 95">
        <defs>
        </defs>
        <g>
          <g fill="#1a1a1a">
            <path className="cls-1" d="M39.34,62.31a17.61,17.61,0,0,1-5.61-2.42l2.81-6.3a19.06,19.06,0,0,0,10,3q4.92,0,4.92-2.46A2,2,0,0,0,50,52.18a26.72,26.72,0,0,0-4.51-1.31,43.25,43.25,0,0,1-5.7-1.58,9.51,9.51,0,0,1-3.93-2.7,7.29,7.29,0,0,1-1.64-5,8.63,8.63,0,0,1,1.51-5,10.12,10.12,0,0,1,4.51-3.52,18.64,18.64,0,0,1,7.36-1.3,26.38,26.38,0,0,1,5.88.67,18,18,0,0,1,5.09,2L56,40.76a17.65,17.65,0,0,0-8.38-2.33,7,7,0,0,0-3.71.76,2.26,2.26,0,0,0-1.17,2A2,2,0,0,0,44.09,43a25.24,25.24,0,0,0,4.45,1.25,42.08,42.08,0,0,1,5.72,1.57,10,10,0,0,1,3.93,2.68,7.16,7.16,0,0,1,1.66,5,8.49,8.49,0,0,1-1.51,4.92,10.33,10.33,0,0,1-4.53,3.52,18.31,18.31,0,0,1-7.34,1.32A28.21,28.21,0,0,1,39.34,62.31Z" />
            <path className="cls-1" d="M91.07,62.61l-.09-16-7.77,13h-3.8L71.68,47V62.61h-7.9V32.39h7L81.44,49.83,91.8,32.39h7l.08,30.22Z" />
            <path className="cls-1" d="M121,62.31a17.61,17.61,0,0,1-5.61-2.42l2.8-6.3a18.4,18.4,0,0,0,4.71,2.16,18.12,18.12,0,0,0,5.27.82q4.92,0,4.92-2.46a2,2,0,0,0-1.41-1.93,26.15,26.15,0,0,0-4.51-1.31,43.7,43.7,0,0,1-5.7-1.58,9.54,9.54,0,0,1-3.92-2.7,7.24,7.24,0,0,1-1.64-5,8.63,8.63,0,0,1,1.51-5A10.06,10.06,0,0,1,122,33.08a18.61,18.61,0,0,1,7.36-1.3,26.36,26.36,0,0,1,5.87.67,18,18,0,0,1,5.1,2l-2.64,6.34a17.64,17.64,0,0,0-8.37-2.33,7.08,7.08,0,0,0-3.72.76,2.27,2.27,0,0,0-1.16,2A2,2,0,0,0,125.78,43a25,25,0,0,0,4.45,1.25A42.49,42.49,0,0,1,136,45.79a10,10,0,0,1,3.93,2.68,7.21,7.21,0,0,1,1.66,5A8.56,8.56,0,0,1,140,58.38a10.31,10.31,0,0,1-4.54,3.52,18.28,18.28,0,0,1-7.34,1.32A28.13,28.13,0,0,1,121,62.31Z" />
            <path className="cls-1" d="M165.71,56.74H152.93l-2.37,5.87h-8.72l13.34-30.22h8.42L177,62.61h-8.89Zm-2.5-6.3-3.89-9.68-3.88,9.68Z" />
            <path className="cls-1" d="M179.4,32.39H188V55.83h14.42v6.78h-23Z" />
            <path className="cls-1" d="M230,56v6.6H205.74V32.39h23.7V39H214.2v5.1h13.43v6.39H214.2V56Z" />
          </g>
          <g>
            <rect fill="#ffb408" className="cls-2" x="63.94" y="73.91" width="165.92" height="19.68" />
            <g>
              <g fill="#1a1a1a">
                <path className="cls-1" d="M77.16,86.51a2.93,2.93,0,0,0,2.41-1.17l1.29,1.32a4.84,4.84,0,0,1-7,.41,4.39,4.39,0,0,1-1.34-3.3,4.46,4.46,0,0,1,1.36-3.33,4.6,4.6,0,0,1,3.34-1.33,4.75,4.75,0,0,1,3.7,1.68L79.66,82.2A2.9,2.9,0,0,0,77.3,81a2.73,2.73,0,0,0-1.93.74,2.57,2.57,0,0,0-.8,2,2.68,2.68,0,0,0,.76,2A2.46,2.46,0,0,0,77.16,86.51Z" />
                <path className="cls-1" d="M94.92,88.28l-.84-1.94H90.32l-.83,1.94H87.36l3.88-9h1.93l3.88,9ZM92.21,82l-1.13,2.6h2.25Z" />
                <path className="cls-1" d="M111.52,82.29a2.64,2.64,0,0,1-1.71,2.78l2.27,3.21h-2.46l-2-2.86h-1.39v2.86h-2v-9h3.4a4.84,4.84,0,0,1,3,.71A2.7,2.7,0,0,1,111.52,82.29Zm-2.42,1.06a1.34,1.34,0,0,0,.38-1.06,1.12,1.12,0,0,0-.39-1,2.42,2.42,0,0,0-1.34-.27h-1.51v2.66h1.47A2.13,2.13,0,0,0,109.1,83.35Z" />
              </g>
              <g fill="#1a1a1a">
                <path className="cls-1" d="M131.67,81.1a.79.79,0,0,0-.29.63.7.7,0,0,0,.36.62,6.12,6.12,0,0,0,1.63.55,4.57,4.57,0,0,1,2,.94,2.32,2.32,0,0,1,.7,1.83,2.42,2.42,0,0,1-.9,2,3.61,3.61,0,0,1-2.38.75,5.49,5.49,0,0,1-3.84-1.58l1.2-1.46a4.21,4.21,0,0,0,2.68,1.27,1.37,1.37,0,0,0,.86-.24.79.79,0,0,0,0-1.28,4.39,4.39,0,0,0-1.33-.48,5.81,5.81,0,0,1-2.29-1,2.67,2.67,0,0,1,.2-3.84,3.69,3.69,0,0,1,2.29-.69,5.65,5.65,0,0,1,1.79.3,4.91,4.91,0,0,1,1.57.88l-1,1.46a3.93,3.93,0,0,0-2.41-.89A1.22,1.22,0,0,0,131.67,81.1Z" />
                <path className="cls-1" d="M150.38,79.31v1.78h-4.46v1.85h4v1.71h-4v1.86h4.6v1.77h-6.6v-9Z" />
                <path className="cls-1" d="M165.74,82.29A2.64,2.64,0,0,1,164,85.07l2.27,3.21h-2.46l-2-2.86h-1.38v2.86h-2v-9h3.39a4.9,4.9,0,0,1,3,.71A2.72,2.72,0,0,1,165.74,82.29Zm-2.41,1.06a1.34,1.34,0,0,0,.37-1.06,1.12,1.12,0,0,0-.39-1A2.42,2.42,0,0,0,162,81h-1.5v2.66h1.46A2.18,2.18,0,0,0,163.33,83.35Z" />
                <path className="cls-1" d="M177.09,85l2.29-5.71h2.16l-3.6,9h-1.69l-3.61-9h2.17Z" />
                <path className="cls-1" d="M188.77,79.31h2v9h-2Z" />
                <path className="cls-1" d="M203.25,86.51a3,3,0,0,0,2.41-1.17l1.28,1.32a4.84,4.84,0,0,1-7,.41,4.42,4.42,0,0,1-1.34-3.3A4.47,4.47,0,0,1,200,80.44a4.59,4.59,0,0,1,3.34-1.33A4.73,4.73,0,0,1,207,80.79l-1.24,1.41A2.9,2.9,0,0,0,203.39,81a2.71,2.71,0,0,0-1.93.74,2.53,2.53,0,0,0-.8,2,2.72,2.72,0,0,0,.75,2A2.5,2.5,0,0,0,203.25,86.51Z" />
                <path className="cls-1" d="M221.14,79.31v1.78h-4.46v1.85h4v1.71h-4v1.86h4.61v1.77h-6.61v-9Z" />
              </g>
            </g>
          </g>
          <path fill="#1a1a1a" className="cls-1" d="M72.84,7.78l-4.91,3.79A41.1,41.1,0,0,0,58,7.49l-.78-6.18a47.26,47.26,0,0,0-20,0l-.78,6.18a40.59,40.59,0,0,0-9.9,4.1l-4.9-3.81A46.7,46.7,0,0,0,7.53,21.93l3.8,4.9a41,41,0,0,0-4.09,9.9l-6.18.76a47.79,47.79,0,0,0,0,20l6.18.76a41,41,0,0,0,4.09,9.9l-3.8,4.9A46.7,46.7,0,0,0,21.68,87.22l4.9-3.8a41,41,0,0,0,9.9,4.11l.78,6.16a47.2,47.2,0,0,0,19.94,0v-20a27.78,27.78,0,0,1-15.87,1.2A28,28,0,0,1,23.69,62.68a27.62,27.62,0,0,1-3.85-9.25,28.22,28.22,0,0,1,0-11.86A28.22,28.22,0,0,1,32.08,23.92,27.94,27.94,0,0,1,59,22H86.91l.07-.09A46.55,46.55,0,0,0,72.84,7.78Z" />
        </g>
      </svg>


      <div onClick={() => setisOpen(!isOpen)}>
        <NavButton isOpen={isOpen} />
      </div>

      <MenuWrapper isOpen={isOpen} >
        {nodes.map(element =>
          <Link
            key={element.databaseId}
            to={element.path}>
            {element.label}
          </Link>
        )}
        <MobileActionBox>
          <a href="http://facebook.com" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB408">
              <rect fill="none" height="24" width="24" /><path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <svg width="24px" height="24px" viewBox="0 0 256 256" version="1.1" fill="#FFB408">
              <path d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z" />
            </svg>
          </a>

          <a href="tel:+38160123948">
            <svg width="24px" height="24px" viewBox="0 0 12 12" version="1.1"><g id="Designs-v2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Homepage-2-alternatief" transform="translate(-1015.000000, -45.000000)" fill="#FFB408">
                <g id="Group-3" transform="translate(1004.000000, 36.000000)"><g id="Group-2"><g id="icon-call" transform="translate(11.000000, 9.000000)"><path d="M2.99793109,5.2158525 C2.84477069,4.4433525 3.71172911,4.0313205 4.27278257,3.6708525 C4.57862812,3.4650765 4.62968158,3.1556925 4.52757465,2.8467885 C4.22172911,1.9711605 3.66061623,1.1987085 3.30369346,0.323068503 C3.25264119,0.168376503 3.09995485,0.0657285035 2.94679445,0.0141645035 C1.46818059,-0.140527497 0.396972552,0.992908503 0.0911508527,2.3832045 C-0.826860993,6.5035245 5.39455683,12.7866045 9.52457663,11.9109648 C10.9016063,11.6020609 12.0233093,10.5201645 11.8701608,9.0267645 C11.8191085,8.8720725 11.7170004,8.7178605 11.5643152,8.6662965 C10.6973568,8.3058285 9.93255287,7.7391045 9.06558257,7.4301765 C8.75973703,7.3270509 8.45389148,7.3786137 8.24967762,7.6875165 C7.89277861,8.2542405 7.48482614,9.1294365 6.71997465,8.9751165 C5.39403406,8.7177765 3.20159841,6.5028765 2.99736079,5.2152765 L2.99793109,5.2158525 Z" id="Fill-1"></path></g></g></g></g></g>
            </svg>
          </a>

        </MobileActionBox>
      </MenuWrapper>

      <DesktopActionBox>
        <a href="tel:+38160123948">


          <svg width="14px" height="14px" viewBox="0 0 12 12" version="1.1"><g id="Designs-v2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Homepage-2-alternatief" transform="translate(-1015.000000, -45.000000)" fill="#FFFFFF">
              <g id="Group-3" transform="translate(1004.000000, 36.000000)"><g id="Group-2"><g id="icon-call" transform="translate(11.000000, 9.000000)"><path d="M2.99793109,5.2158525 C2.84477069,4.4433525 3.71172911,4.0313205 4.27278257,3.6708525 C4.57862812,3.4650765 4.62968158,3.1556925 4.52757465,2.8467885 C4.22172911,1.9711605 3.66061623,1.1987085 3.30369346,0.323068503 C3.25264119,0.168376503 3.09995485,0.0657285035 2.94679445,0.0141645035 C1.46818059,-0.140527497 0.396972552,0.992908503 0.0911508527,2.3832045 C-0.826860993,6.5035245 5.39455683,12.7866045 9.52457663,11.9109648 C10.9016063,11.6020609 12.0233093,10.5201645 11.8701608,9.0267645 C11.8191085,8.8720725 11.7170004,8.7178605 11.5643152,8.6662965 C10.6973568,8.3058285 9.93255287,7.7391045 9.06558257,7.4301765 C8.75973703,7.3270509 8.45389148,7.3786137 8.24967762,7.6875165 C7.89277861,8.2542405 7.48482614,9.1294365 6.71997465,8.9751165 C5.39403406,8.7177765 3.20159841,6.5028765 2.99736079,5.2152765 L2.99793109,5.2158525 Z" id="Fill-1"></path></g></g></g></g></g>
          </svg>
        </a>
      </DesktopActionBox>


    </HeaderWrapper>
  )
}
