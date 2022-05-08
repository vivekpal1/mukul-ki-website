import React from 'react';

import EmailIcon from '/public/images/social/email.svg';
import InstagramIcon from '/public/images/social/instagram.svg';
import LinkedInIcon from '/public/images/social/linkedin.svg';
// import TwitterIcon from '/public/images/social/twitter.svg';
import OrcidIcon from '/public/images/social/orcid.svg';

export default function SocialIcons({iconClass = 'btn-icon'}: {iconClass?: string}) {
  return (
    <ul className="flex justify-center gap-2 lg:justify-start">
      <li>
        <a
          aria-label="go to linkedin"
          target={'_blank'}
          href="https://www.linkedin.com/in/mukul-pal/"
          className={iconClass}
          rel="noreferrer"
        >
          <LinkedInIcon className="w-8" />
        </a>
      </li>
      <li>
        <a
          aria-label="go to instagram"
          target={'_blank'}
          href="https://www.instagram.com/unstoppable.mind_108/"
          className={iconClass}
          rel="noreferrer"
        >
          <InstagramIcon className="w-8" />
        </a>
      </li>
      <li>
        <a
          aria-label="go to orcid"
          target={'_blank'}
          href="https://orcid.org/0000-0002-7261-7427/"
          className={iconClass}
          rel="noreferrer"
        >
          <OrcidIcon className="w-8" />
        </a>
      </li>
      <li>
        <a aria-label="send email" href="mailto:mukulpal@duck.com" className={iconClass}>
          <EmailIcon className="w-8" />
        </a>
      </li>
    </ul>
  );
}
