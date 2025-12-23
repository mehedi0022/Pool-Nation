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
        className="absolute top-30 left-0 overflow-hidden"
      />
      <Image
        src="/footerShape2.png"
        alt="footer shape"
        width={450}
        height={100}
        className="absolute bottom-0 left-0 overflow-hidden"
      />
      <Image
        src="/footerShape3.png"
        alt="footer shape"
        width={500}
        height={100}
        className="absolute bottom-0 right-0 overflow-hidden"
      />

      <div className="container mx-auto px-5 md:px-10 mt-10">
        <div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 bg-[#7444FD] p-5 md:p-20 rounded-4xl">
            <div className="basis-[60%]">
              <CustomButton text="Mobile App" />
              <h1 className="my-6 leading-10 md:leading-14 text-white">
                Download our app and start your learning journey today!
              </h1>
              <p className="text-base md:text-xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-20">
          <div>
            <div>
              <Image src="/logo.png" alt="logo" width={170} height={100} />
              <p>
                Pool Man University’s web platform and app offer a seamless way
                for business owners to enhance their team’s skills. Add your
                employees, assign relevant courses tailored to their roles, and
                monitor their progress through interactive quizzes.
              </p>
            </div>

            <div>
              <h2>Important Links</h2>
              <ul>
                <li>
                  <a href="#">poolnation.com</a>
                </li>
                <li>
                  <a href="#">poolnation.com</a>
                </li>
                <li>
                  <a href="#">poolnation.com</a>
                </li>
                <li>
                  <a href="#">poolnation.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
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

        <div className="h-0.5 border"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 py-5">
          <div>
            <p>Privacy-Policy & Trams of Service</p>
          </div>
          <div>
            <p>Copyright © {date.getFullYear()}. Pool Nation All rights</p>
          </div>
          <div>
            <ul className="flex gap-1.5">
              <li>
                <Facebook />
              </li>
              <li>
                <Instagram />
              </li>
              <li>
                <Linkedin />
              </li>
              <li>
                <Youtube />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
