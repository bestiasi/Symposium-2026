import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

import { BEST_SOCIALS } from "../../data/Links";

import SocialIcon from "./SocialIcon";
import React from "react";

export default function SocialLinks() {
  const socials = [
    { icon: FaFacebookF, link: BEST_SOCIALS.FACEBOOK_LINK },
    { icon: FaInstagram, link: BEST_SOCIALS.INSTAGRAM_LINK },
    { icon: FaLinkedinIn, link: BEST_SOCIALS.LINKEDIN_LINK },
    { icon: FaYoutube, link: BEST_SOCIALS.YOUTUBE_LINK },
    { icon: FaTiktok, link: BEST_SOCIALS.TIKTOK_LINK },
  ];

  return (
    <div className="flex justify-between items-center w-full">
      {socials.map((social, index) => (
        <React.Fragment key={index}>
          <SocialIcon Icon={social.icon} href={social.link} />
        </React.Fragment>
      ))}
    </div>
  );
}
