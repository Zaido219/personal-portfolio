import BaseCard from "./Ui/Card";
import { HoverCards, ShineWrapperCard } from "./Ui/Cards";
import { downloadFile } from "../utils/Downloaders";
import { emailMe } from "../utils/Emailers";
import { navigate } from "../utils/Navigators";

const ProfileHeader = () => {
  const myCv = "/files/my_resume.pdf";

  return (
    <header className="flex items-start overflow-hidden w-fit gap-2 p-2">
      <section>
        {/* image goes here */}
        <div className="rounded-full h-30 w-30  md:rounded-sm md:h-43 md:w-43 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="/images/my_pfp_new.png"
            alt="my image"
          />
        </div>
      </section>
      <section className="flex flex-col p-2 gap-2">
        {/* rest of the content */}
        <div className="p-1 flex flex-col gap-1">
          <div className="">
            <p className="text-md font-extrabold md:text-xl">John Phillip Lor Malbas</p>
            <p className="text-xs md:text-base font-bold">San Ildefonso,Bulacan,Philippines</p>
          </div>

          <p className="text-sm md:text-base font-semibold">Student Intern</p>

          <div className="flex justify-center gap-3 w-fit">
            <span className="flex items-center gap-2 md:gap-3">
              <i class="text-sm md:text-base fa-solid fa-phone"></i>
              09914003588
            </span>
          </div>
        </div>

        <nav className="flex gap-2 p-1 md:w-fit overflow-hidden">
          {/* for the socials link */}
          <a href="https://www.facebook.com/share/14h2U6Be8hT/" className="flex items-center gap-1">
            <i class="fa-brands fa-facebook-f"></i>
            Facebook
          </a>
          <a href="https://github.com/Zaido219" className="flex items-center gap-1">
            <i class="fa-brands fa-github"></i>
            Github
          </a>
          <a href="https://www.tiktok.com/@_zaido19?_r=1&_t=ZS-95MUZ5QxedM" className="flex items-center gap-1">
            <i class="fa-brands fa-tiktok"></i>
            Tiktok
          </a>
          <a href="" className="flex items-center gap-1">
            <i class="fa-brands fa-linkedin"></i>
            LinkedIn
          </a>
        </nav>
      </section>
      <section className="self-end flex flex-col w-fit gap-2 items-center p-1">
        {/* download resume aand email section */}
        <ShineWrapperCard>
          <HoverCards>
            <div
              className="flex p-2 gap-2 items-center w-md cursor-pointer"
              onClick={() => downloadFile(myCv, "John_Phillip_Lor_Resume.pdf")}
            >
              <span>
                <i className="fa-regular fa-file"></i>
              </span>
              <button className="p-1 cursor-pointer">My Resume</button>
            </div>
          </HoverCards>
        </ShineWrapperCard>

        <ShineWrapperCard>
          <HoverCards>
            <div className="flex p-2 gap-2 items-center w-md cursor-pointer" onClick={emailMe}>
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
            <div className="flex items-center work-experiences  w-md">
              <button className="flex items-center p-2">Certifications</button>
            </div>
          </HoverCards>
        </ShineWrapperCard>
      </section>
    </header>
  );
};

export default ProfileHeader;
