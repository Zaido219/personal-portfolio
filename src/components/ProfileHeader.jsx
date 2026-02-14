const ProfileHeader = () => {
    return(
        <header className="flex bg-red-500 w-fit p-10">
            <div className="bg-orange-500">
                {/* image goes here */}
                <div className="h-40 w-40 bg-yellow-500">
                    <img className="h-10 w-10 bg-green-500" src="src/assets/images/image.png" alt="my image" />
                </div>
            </div>
            <div className="flex bg-blue-500 flex-col p-10">
                {/* rest of the content */}
                <div className="bg-indigo-500">
                    <p className="font-extrabold">John Phillip Lor Malbas</p>
                    <p>San Ildefonso,Bulacan,Philippines</p>
                </div>
                <p>Student Intern</p>
                <div className="bg-violet-500">
                    {/* theme toggle button */}
                    <button>Change theme</button>
                </div>
                <div className="bg-white">
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