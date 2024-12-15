import React, { useState, useEffect } from "react";
import { faGithub, faLinkedinIn, faGitlab, faStackOverflow, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Icon from "../Icon";
import profilePic from "/assets/profile.png";
import { Link } from "react-router-dom";

export default function Profile() {
  const roles = ["Developer", "Full-Stack", "Back-End", "Front-End"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;

    if (isTyping) {
      if (displayedText.length < roles[currentRole].length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText((prev) => roles[currentRole].slice(0, prev.length + 1));
        }, 100);
      } else {
        typingTimeout = setTimeout(() => {
          setIsTyping(false);
        }, 4000);
      }
    } else {
      typingTimeout = setTimeout(() => {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        } else {
          setIsTyping(true);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }, 100);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isTyping, currentRole]);

  return (
    <div className="md:h-full h-[70vh] bg-white md:w-1/2 w-[95%] relative">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0)] md:shadow-[inset_20px_20px_0px_0px_#61B68A]"></div>

      {/* Profile Picture Section */}
      <div className="h-1/2 md:w-[95%] xl:w-[96%] custom-shape md:absolute inset-5 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 flex items-end justify-center">
        <img src={profilePic} alt="Profile" className="h-[95%] object-cover object-bottom" />
      </div>

      {/* Information Section */}
      <div className="h-[45%] absolute bottom-0 md:left-5 md:w-[96%] w-full py-3">
        <h1 className="text-center text-3xl font-semibold">Marzoug Khalid</h1>

        {/* Typing Animation */}
        <h3 className="text-center text-[#61B68A] text-xl font-mono">
          {displayedText}
          <span className="inline-block w-1 h-4 bg-[#61B68A] animate-blink"></span> {/* Cursor */}
        </h3>

        {/* Social Links */}
        <div className="flex justify-center gap-2 mt-5">
          <a href="#" className="hover:text-[#61B68A]">
            <Icon icon={faGithub} />
          </a>
          <a href="#" className="hover:text-[#61B68A]">
            <Icon icon={faLinkedinIn} />
          </a>
          <a href="#" className="hover:text-[#61B68A]">
            <Icon icon={faGitlab} />
          </a>
          <a href="#" className="hover:text-[#61B68A]">
            <Icon icon={faStackOverflow} />
          </a>
          <a href="#" className="hover:text-[#61B68A]">
            <Icon icon={faXTwitter} />
          </a>
        </div>

        {/* Bottom Buttons */}
        <div className="absolute bottom-0 w-full">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-l from-gray-100 via-gray-400 to-gray-100"></div>
          <div className="flex w-full">
            <a href="/khalid_marzoug_cv.pdf" download="khalid_marzoug" className="w-[49%] hover:text-[#61B68A] py-6 text-center">
              DOWNLOAD CV
            </a>
            <span className="w-[1px] bg-gradient-to-b from-gray-400 to-gray-100"></span>
            <Link to="/contact" className="w-[49%] hover:text-[#61B68A] py-6 text-center">
              CONTACT ME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
