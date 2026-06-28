import BaseCard from "./Ui/Card";
import { HoverCards, ShineWrapperCard } from "./Ui/Cards";
import { downloadFile } from "../utils/Downloaders";
import { emailMe } from "../utils/Emailers";
import { navigate } from "../utils/Navigators";

const ProfileHeader = () => {
  const myCv = "/files/my_resume.pdf";

  return (
    <header className="flex flex-col md:flex-row md:gap-10 gap-4 p-1 md:p-2 items-center justify-center w-90 md:w-5xl overflow-hidden">
      <div className="flex flex-col md:flex-row items-center p-2">
        <section className="">
          {/* image goes here */}
          <div className="rounded-full h-54 w-54  md:rounded-lg md:h-60 md:w-60 overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="/images/my_pfp_new.jpg"
              alt="my image"
            />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center mt-2 p-2 gap-2">
          {/* rest of the content */}
          <div className="flex flex-col md:flex-col items-center justify-center md:gap-2 p-2 text-center">
            <div className="px-2 py-0.5 rounded">
              <p className="text-md md:text-md font-bold whitespace-nowrap">
                John Phillip Lor Malbas
              </p>
            </div>

            <p className="text-sm md:text-sm font-semibold whitespace-nowrap">
              Software Developer
            </p>

            <div className="flex items-center gap-2 text-xs md:text-sm whitespace-nowrap">
              <i className="fa-solid fa-phone"></i>
              <span>09914003588</span>
            </div>
          </div>
          <p className="text-xs md:text-base font-bold inline-block">
            San Ildefonso,Bulacan,Philippines
          </p>

          <nav className="flex md:gap-1 gap-3 md:text-md p-1 md:w-fit overflow-hidden">
            {/* for the socials link */}
            <a
              href="https://www.facebook.com/share/14h2U6Be8hT/"
              className="flex items-center gap-1"
            >
              <i className="fa-brands fa-facebook-f md:text-sm"></i>
              <p className="md:text-sm">Facebook</p>
            </a>
            <a
              href="https://github.com/Zaido219"
              className="flex items-center gap-1"
            >
              <i class="fa-brands fa-github md:text-sm"></i>
              <p className="md:text-sm">Github</p>
            </a>
            <a
              href="https://www.tiktok.com/@_zaido19?_r=1&_t=ZS-95MUZ5QxedM"
              className="flex items-center gap-1"
            >
              <i class="fa-brands fa-tiktok md:text-sm"></i>
              <p className="md:text-sm">Tiktok</p>
            </a>
            <a href="" className="flex items-center gap-1">
              <i class="fa-brands fa-linkedin md:text-sm"></i>
              <p className="md:text-sm">LinkedIn</p>
            </a>
          </nav>
        </section>
      </div>
      <section className="flex flex-col w-86 gap-2 p-1">
        {/* <section className="self-end flex flex-col w-fit gap-2 items-center p-1"></section> */}
        {/* download resume aand email section */}
        <ShineWrapperCard>
          <HoverCards>
            <div
              className="flex justify-center w-85 h-10 items-center p-2 gap-2"
              onClick={() => downloadFile(myCv, "John_Phillip_Lor_Resume.pdf")}
            >
              <span>
                <i className="fa-regular fa-file"></i>
              </span>
              <button className="">My Resume</button>
            </div>
          </HoverCards>
        </ShineWrapperCard>

        <ShineWrapperCard>
          <HoverCards>
            <div
              className="flex justify-center w-85 h-10 items-center p-2 gap-2"
              onClick={emailMe}
            >
              <span>
                <i class="fa-regular fa-envelope"></i>
              </span>
              <button className="p-1">Email</button>
            </div>
          </HoverCards>
        </ShineWrapperCard>
        {/* display work experiences */}
        <ShineWrapperCard>
          <HoverCards>
            <div className="flex justify-center w-85 h-10 items-center p-2 gap-2">
              <button className="flex items-center p-2">Certifications</button>
            </div>
          </HoverCards>
        </ShineWrapperCard>
      </section>
    </header>
  );
};

export default ProfileHeader;
