import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/bagaspra" target="_blank">
      <div>
        <BsGithub />
      </div>
    </a>
    <a href="https://www.facebook.com/bagas.prasetyo2/" target="_blank">
      <div>
        <FaFacebookF />
      </div>
    </a>

    <a href="https://www.linkedin.com/in/bagas-p-88226a129/" target="_blank">
      <div>
        <BsLinkedin />
      </div>
    </a>
  </div>
);

export default SocialMedia;
