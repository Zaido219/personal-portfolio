const ProfileHeader = () => {
    return(
        <header className="flex">
            <div>
                {/* image goes here */}
                <div className="image-container">
                    <img src="src/assets/images/image.png" alt="my image" />
                </div>
            </div>
            <div>
                {/* rest of the content */}
                <p>John Phillip Lor Malbas</p>
                <p>San Ildefonso,Bulacan,Philippines</p>
                <p>Student Intern at the GAD office of Bulacan Agricultural State College</p>
                <div>
                    {/* theme toggle button */}
                    <button>Change theme</button>
                </div>
                <div>
                    {/* for the socials link */}
                </div>
            </div>
        </header>
    );
};

export default ProfileHeader;