export const generateGoldSvg = (
  firstname,
  lastname,
  image,
  PAC,
  DRI,
  SHO,
  DEF,
  PAS,
  PHY,
  OVR
) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="300">
<circle cx="50" cy="101" r="112" fill="#D4AF37"/>
 <line x1="50" y1="50" x2="90" y2="30" stroke="black" stroke-width="0.1"/>
 <line x1="10" y1="50" x2="90" y2="10" stroke="black" stroke-width="0.1"/>
<text x="15%" y="25%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="15" font-family="Arial" fill="#28282B">${OVR}</text>
 <circle cx="0" cy="0" r="10" fill="white"/>
  <circle cx="100" cy="0" r="10" fill="white"/>
<circle cx="50" cy="140" r="90" fill="#28282B"/>
<image href="${image}" height="65" width="100" />
<text x="50%" y="77%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="9" font-family="Arial" fill="#D4AF37">${firstname} ${lastname}</text>
   <line x1="10" y1="85" x2="90" y2="85" stroke="white" stroke-width="0.1"/>
<line x1="50" y1="90" x2="50" y2="120" stroke="white" stroke-width="0.1"/>
<text x="15%" y="95%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37" font-weight="bolder">${PAC}</text>
<text x="30%" y="95%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37">PAC</text>
 <text x="70%" y="95%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37" font-weight="bolder">${DRI}</text>
<text x="85%" y="95%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37">DRI</text>
 <text x="15%" y="105%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37" font-weight="bolder">${SHO}</text>
 <text x="30%" y="105%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37">SHO</text>
   <text x="70%" y="105%" class="#D4AF37" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37" font-weight="bolder">${DEF}</text>
 <text x="85%" y="105%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37">DEF</text>
   <text x="15%" y="115%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37" font-weight="bolder">${PAS}</text>
 <text x="30%" y="115%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37">PAS</text>
     <text x="70%" y="115%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37" font-weight="bolder">${PHY}</text>
 <text x="85%" y="115%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37">PHY</text>
</svg>
`;
