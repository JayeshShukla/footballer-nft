export const generateOrangeSvg = (
  firstname,
  lastname,
  clubSvg,
  countrySvg,
  PAC,
  DRI,
  SHO,
  DEF,
  PAS,
  PHY,
  OVR
) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="280"><mask id="a" maskContentUnits="objectBoundingBox"><path fill="#fff" d="M0 0h1v1H0z"/><circle cx=".45" r=".05"/><circle cx=".55" r=".05"/></mask><circle cx="50" cy="50" r="70" fill="#f4f5ef" mask="url(#a)"/><path stroke="#000" stroke-width=".1" d="m50 40 40-20M10 40 80 5"/><text x="20%" y="20%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="15" font-family="Arial">${OVR}</text><circle cx="50" cy="140" r="90" fill="tomato"/>${countrySvg}${clubSvg}<text x="50%" y="70%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="9" font-family="Arial">${firstname} ${lastname}</text><path stroke="#fff" stroke-width=".1" d="M10 77.5h80m-40 5v30"/><text x="15%" y="90%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" font-weight="bolder">${PAC}</text><text x="30%" y="90%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial">PAC</text><text x="70%" y="90%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" font-weight="bolder">${DRI}</text><text x="85%" y="90%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial">DRI</text><text x="15%" y="100%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" font-weight="bolder">${SHO}</text><text x="30%" y="100%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial">SHO</text><text x="70%" y="100%" class="#D4AF37" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" font-weight="bolder">${DEF}</text><text x="85%" y="100%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial">DEF</text><text x="15%" y="110%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" font-weight="bolder">${PAS}</text><text x="30%" y="110%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial">PAS</text><text x="70%" y="110%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial" font-weight="bolder">${PHY}</text><text x="85%" y="110%" class="base" dominant-baseline="middle" text-anchor="middle" font-size="5" font-family="Arial">PHY</text></svg>`;
