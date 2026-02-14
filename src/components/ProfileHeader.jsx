const ProfileHeader = () => {
    return(
        <header className="flex items-center gap-8 w-full">
            <div className="bg-orange-500">
                {/* image goes here */}
                <div className="h-40 w-40">
                    <img className="h-full w-full object-cover" src="src/assets/images/image.png" alt="my image" />
                </div>
            </div>
            <div className="flex flex-col p-10">
                {/* rest of the content */}
                <div className="">
                    <p className="font-bold text-xl">John Phillip Lor Malbas</p>
                    <p className="font-medium">San Ildefonso,Bulacan,Philippines</p>
                </div>
                <p>Student Intern</p>
                <div className="">
                    {/* theme toggle button */}
                    <button>Change theme</button>
                </div>
                <div className="">
                    {/* for the socials link */}
                    <a href="">Facebook</a>
                    <a href="">Github</a>
                    <a href="">Tiktok</a>
                    <a href="">LinkedIn</a>
                </div>
            </div>
        </header>
    );
};

export default ProfileHeader;