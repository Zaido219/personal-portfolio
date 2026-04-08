import BaseCard from "./Ui/Card";
import { HoverCards, ShineWrapperCard } from "./Ui/Cards";
import { downloadFile } from "../utils/Downloaders";

const ProfileHeader = () => {
  const myCv = "/files/my_resume.pdf";

  return (
    <header className="flex items-start gap-4 w-full p-2">
      <section>
        {/* image goes here */}
        <div className="h-43 w-43 rounded-md overflow-hidden">
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
            <p className="font-extrabold text-xl">John Phillip Lor Malbas</p>
            <p className="font-bold">San Ildefonso,Bulacan,Philippines</p>
          </div>

          <p className="font-semibold">Student Intern</p>

          <div className="flex justify-center gap-3 w-fit">
            <span className="flex items-center gap-3">
              <i class="fa-solid fa-phone "></i>
              09914003588
            </span>
          </div>
        </div>

        <nav className="flex gap-2 p-1">
          {/* for the socials link */}
          <a href="" className="flex items-center gap-1">
            <i class="fa-brands fa-facebook-f"></i>
            Facebook
          </a>
          <a href="" className="flex items-center gap-1">
            <i class="fa-brands fa-github"></i>
            Github
          </a>
          <a href="" className="flex items-center gap-1">
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
            <div className="flex p-2 gap-2 items-center  w-md">
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
