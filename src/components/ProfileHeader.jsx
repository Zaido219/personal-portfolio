const ProfileHeader = () => {
  return (
    <header className="flex items-start gap-4 w-full">
      <div className="">
        {/* image goes here */}
        <div className="h-40 w-40">
          <img
            className="h-full w-full object-cover"
            src="src/assets/images/image.png"
            alt="my image"
          />
        </div>
      </div>
    <div className="flex flex-col bg-blue-500 gap-7">
        {/* rest of the content */}
        <div className="">
            <p className="font-extrabold text-xl">John Phillip Lor Malbas</p>
            <p className="font-bold">San Ildefonso,Bulacan,Philippines</p>
        </div>

        <p className="font-semibold">Student Intern</p>

        <div className="flex gap-2 bg-blue-600">
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
        </div>
    </div>
    </header>
  );
};

export default ProfileHeader;
