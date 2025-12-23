import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import CustomButton from "./ui/CustomButton";

const Footer = () => {
  const date = new Date();
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/footerShape1.png"
        alt="footer shape"
        width={250}
        height={100}
        className="absolute top-30 left-0 overflow-hidden -z-1"
      />
      <Image
        src="/footerShape2.png"
        alt="footer shape"
        width={450}
        height={100}
        className="absolute bottom-0 left-0 overflow-hidden -z-1"
      />
      <Image
        src="/footerShape3.png"
        alt="footer shape"
        width={500}
        height={100}
        className="absolute bottom-0 right-0 overflow-hidden -z-1"
      />

      <div className="container mx-auto px-5 md:px-10 mt-10">
        <div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 bg-[#7444FD] p-5 md:p-20 rounded-4xl">
            <div className="basis-[60%]">
              <CustomButton text="Mobile App" />
              <h1 className="my-3 md:my-6 leading-8 md:leading-14 text-white">
                Download our app and start your learning journey today!
              </h1>
              <p className="text-base md:text-xl text-white">
                Pool Man University’s web platform and app offer a seamless way
                for business owners to enhance their team’s skills. Add your
                employees, assign relevant courses tailored to their roles, and
                monitor their progress through interactive quizzes.
              </p>

              <div className="flex gap-4 mt-6">
                <Image
                  src="/playStore.png"
                  alt="Play Store"
                  width={150}
                  height={100}
                />
                <Image
                  src="/AppleStore.png"
                  alt="App Store"
                  width={150}
                  height={100}
                />
              </div>
            </div>
            <div className="basis-[40%] flex justify-center items-center">
              <Image
                src="/mobile.png"
                alt="App Store"
                width={450}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-20 py-5 md:py-20">
          <div className="basis-[65%] flex flex-col md:flex-row gap-4">
            <div className="basis-[65%]">
              <Image src="/logo.png" alt="logo" width={170} height={100} />
              <p>
                Pool Man University’s web platform and app offer a seamless way
                for business owners to enhance their team’s skills. Add your
                employees, assign relevant courses tailored to their roles, and
                monitor their progress through interactive quizzes.
              </p>
            </div>

            <div className="basis-[35%]">
              <h6 className="text-2xl font-bold">Important Links</h6>
              <div className="w-[30%] h-0.5 bg-primary mt-1"></div>
              <ul>
                <li className="hover:underline hover:translate-x-2 transition-all duration-300 p-1">
                  <a href="#">Pool Nation</a>
                </li>
                <li className="hover:underline hover:translate-x-2 transition-all duration-300 p-1">
                  <a href="#">Pool Nation Podcast</a>
                </li>
                <li className="hover:underline hover:translate-x-2 transition-all duration-300 p-1">
                  <a href="#">Pool Nation Awards</a>
                </li>
                <li className="hover:underline hover:translate-x-2 transition-all duration-300 p-1">
                  <a href="#">Pool Invoice</a>
                </li>
                <li className="hover:underline hover:translate-x-2 transition-all duration-300 p-1">
                  <a href="#">Pool Nation App</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="basis-[35%]">
            <div className="dark:bg-gray-900/90 bg-[#FAF8FF] border shadow rounded-xl h-full p-6">
              <h6 className="text-xl font-bold">
                Don’t Miss the Monthly Spotlight
              </h6>
              <p>
                Join our mailing list and receive a free Spotlight update every
                month—straight to your inbox.
              </p>
              <div className="flex w-full items-center gap-2 mt-4">
                <form action="" className="flex w-full gap-2.5">
                  <Input
                    className="w-full z-50"
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                  <Button
                    type="submit"
                    variant="outline"
                    className="cursor-pointer z-50"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-3 border-t text-sm text-muted-foreground">
          {/* Left */}
          <p className="text-center md:text-left">
            <a
              href="/privacy-policy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>{" "}
            &{" "}
            <a
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </p>

          {/* Center */}
          <p className="text-center">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-foreground">Pool Nation</span>.
            All rights reserved.
          </p>

          {/* Right - Social Icons */}
          <ul className="flex gap-3">
            {[
              { Icon: Facebook, link: "#" },
              { Icon: Instagram, link: "#" },
              { Icon: Linkedin, link: "#" },
              { Icon: Youtube, link: "#" },
            ].map(({ Icon, link }, i) => (
              <li key={i}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-9 w-9 items-center justify-center rounded-full border transition-all
          hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-md"
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:rotate-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
