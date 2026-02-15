const ProfileHeader = () => {
  return (
    <header className="bg-orange-200 flex items-start gap-4 w-full p-2">
      <section className="">
        {/* image goes here */}
        <div className="h-40 w-40">
          <img
            className="h-full w-full object-cover"
            src="src/assets/images/image.png"
            alt="my image"
          />
        </div>
      </section>
    <section className="flex flex-col gap-7">
        {/* rest of the content */}
        <div className="">
            <p className="font-extrabold text-xl">John Phillip Lor Malbas</p>
            <p className="font-bold">San Ildefonso,Bulacan,Philippines</p>
        </div>

        <p className="font-semibold">Student Intern</p>

        <nav className="flex gap-2">
          {/* for the socials link */}
          <a href="" className="flex items-center gap-1">
            <i class="fa-brands fa-facebook-f"></i>
            Facebook
          </a>
          <a href="" className="flex items-center gap-1">
            <i class="fa-brands fa-github"></i>
            Github</a>
          <a href="" className="flex items-center gap-1">
            <i class="fa-brands fa-tiktok"></i>
            Tiktok</a>
          <a href="" className="flex items-center gap-1">
            <i class="fa-brands fa-linkedin"></i>
            LinkedIn</a>
        </nav>
    </section>
    <section className="bg-red-200 self-end flex gap-5 items-center p-1">
      {/* download resume aand email section */}
      <div className="flex p-2 gap-2 items-center">
        <span>
          <i class="fa-regular fa-file"></i>
        </span>
        <button className="p-1">My Resume</button>
      </div>
      <div className="flex p-2 gap-2 items-center">
        <span>
          <i class="fa-regular fa-envelope"></i>
        </span>
        <button className="p-1">Email</button>
      </div>
      {/* display work experiences */}
      <div className="flex items-center work-experiences">
        <button className="flex items-center p-2">Certifications</button>
      </div>
    </section>
    </header>
  );
};

export default ProfileHeader;
