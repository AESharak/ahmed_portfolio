import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[2rem]" id="contact">
      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help achieve
          your goals.
        </p>
        <a href="mailto:ahmedessam201790@gmail.com">
          <MagicButton
            title="let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-around lg:gap-36 gap-5 items-center mt-16">
        <p className="md:text-base text-sm md:font-normal font-light">
          &copy; 2025 Ahmed Essam. All rights reserved.
        </p>
        <div className="relative z-50 flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              href={profile.link}
              target="_blank"
              key={profile.id}
              className="cursor-pointer flex justify-center w-10 h-10 items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={profile.img}
                alt={profile.platform}
                className="w-6 h-6"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
