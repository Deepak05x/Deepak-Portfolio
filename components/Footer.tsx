import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 lg:-bottom-72 md:-bottom-[10rem] -bottom-[1rem] min-h-[10rem]  ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="heading text-white flex  lg:max-w-[45vw]"
        >
          <p>
            Ready to take <span className="text-green-500">your </span> digital
            presence to next level?
          </p>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-white-200 md:mt-10 my-5 text-center"
        >
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          href="mailto:hdeepak5902@gmail.com"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </motion.a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="md:text-base text-sm md:font-normal font-light text-white-100"
        >
          Connect with me on my socials:
        </motion.p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a target="_blank" href={info.link}>
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
