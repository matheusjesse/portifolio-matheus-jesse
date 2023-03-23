import React from 'react';
import FooterContainer from './style';
import LinkedinIconSVG from '../../assets/linkedinIcon.svg';
import GitHubIconSVG from '../../assets/githubIcon.svg';

function Footer () {
  return (
    <FooterContainer>
      <a
        href="https://www.linkedin.com/in/matheusjesse"
        target="_blank"
        rel="noopener noreferrer"
      >
        <section>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_31_294)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8582 20.5715H35.5044V27.0547H35.6874C37.4485 23.8952 41.7549 20.5715 48.1766 20.5715C61.5303 20.5715 64 28.8818 64 39.6926V61.7145H50.8116V42.193C50.8116 37.5394 50.7147 31.5488 43.954 31.5488C37.087 31.5488 36.0346 36.6146 36.0346 41.854V61.7145H22.8581V20.5715H22.8582ZM13.7152 9.143C13.7152 12.9285 10.6431 16.0006 6.8576 16.0006C3.0721 16.0006 -0.00109863 12.9285 -0.00109863 9.143C-0.00109863 5.3575 3.0721 2.2854 6.8576 2.2854C10.6431 2.2854 13.7152 5.3575 13.7152 9.143ZM-0.00109863 20.5715H13.7152V61.7145H-0.00109863V20.5715Z" fill="#131313"/>
        </g>
        <defs>
        <clipPath id="clip0_31_294">
        <rect width="64" height="64" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        </section>
      </a>
      <a
        href="https://github.com/matheusjesse" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <section>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3_32)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9988 0.797299C14.3293 0.797299 0 15.1242 0 32.796C0 46.9352 9.1678 58.9258 21.8826 63.159C23.483 63.4554 24.0712 62.4633 24.0712 61.6176C24.0712 60.8546 24.0393 58.3341 24.0263 55.6624C15.1231 57.5983 13.2463 51.8852 13.2463 51.8852C11.7911 48.1859 9.6934 47.2021 9.6934 47.2021C6.7902 45.2142 9.9143 45.2579 9.9143 45.2579C13.1269 45.4824 14.8183 48.5533 14.8183 48.5533C17.6743 53.4455 22.3066 52.0293 24.1314 51.2131C24.4196 49.145 25.2464 47.7324 26.1629 46.9328C19.0549 46.1261 11.5832 43.3812 11.5832 31.1188C11.5832 27.6262 12.8352 24.7703 14.8797 22.5308C14.5467 21.723 13.4506 18.4702 15.188 14.0634C15.188 14.0634 17.875 13.2024 23.9909 17.3434C26.5421 16.6359 29.2787 16.2792 31.9965 16.2674C34.7165 16.2792 37.4579 16.6347 40.0127 17.3434C46.1203 13.2048 48.8049 14.0634 48.8049 14.0634C50.5447 18.4714 49.4534 21.7265 49.1203 22.5309C51.1719 24.7703 52.4133 27.6262 52.4133 31.1188C52.4133 43.4095 44.925 46.1118 37.8016 46.9044C38.9497 47.8965 39.9749 49.8442 39.9749 52.8277C39.9749 57.1069 39.9383 60.5557 39.9383 61.6081C39.9383 62.4597 40.5147 63.4554 42.1375 63.1435C54.8451 58.9081 64.0012 46.9161 64.0012 32.7853C64.0012 15.1158 49.6743 0.786499 32.0012 0.786499L31.9989 0.797199L31.9988 0.797299Z" fill="#131313"/>
        </g>
        <defs>
        <clipPath id="clip0_3_32">
        <rect width="64" height="64" fill="white"/>
        </clipPath>
        </defs>
        </svg>

        </section>
      </a>
    </FooterContainer>
  );
};

export default Footer;
