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
) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="280">
<mask id="bent-mask" maskContentUnits="objectBoundingBox">
  <rect width="1" height="1" fill="white" />
  <circle cx="0.17" cy="0.13" r="0.05" fill="black" />
  <circle cx="0.83" cy="0.13" r="0.05" fill="black" />
</mask>
<circle cx="50" cy="50" r="70" fill="#D4AF37" mask="url(#bent-mask)" />
<line x1="50" y1="40" x2="90" y2="20" stroke="black" stroke-width="0.1"/>
<line x1="10" y1="40" x2="80" y2="5" stroke="black" stroke-width="0.1"/>
<text x="15%" y="20%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="15" font-family="Arial" fill="#28282B">${OVR}</text>
 <circle cx="50" cy="140" r="90" fill="#28282B"/>
<image href="${image}" height="70" width="100" y="-10"/>
<text x="50%" y="70%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="9" font-family="Arial" fill="#D4AF37">${firstname} ${lastname}</text>
<line x1="10" y1="77.5" x2="90" y2="77.5" stroke="white" stroke-width="0.1"/>
<line x1="50" y1="82.5" x2="50" y2="112.5" stroke="white" stroke-width="0.1"/>
<text x="15%" y="90%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37" font-weight="bolder">${PAC}</text>
<text x="30%" y="90%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37">PAC</text>
  <text x="70%" y="90%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37" font-weight="bolder">${DRI}</text>
<text x="85%" y="90%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37">DRI</text>
  <text x="15%" y="100%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37" font-weight="bolder">${SHO}</text>
  <text x="30%" y="100%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37">SHO</text>
    <text x="70%" y="100%" class="#D4AF37" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37" font-weight="bolder">${DEF}</text>
  <text x="85%" y="100%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37">DEF</text>
    <text x="15%" y="110%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37" font-weight="bolder">${PAS}</text>
  <text x="30%" y="110%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37">PAS</text>
      <text x="70%" y="110%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37" font-weight="bolder">${PHY}</text>
  <text x="85%" y="110%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" fill="#D4AF37">PHY</text>
</svg>
`;
