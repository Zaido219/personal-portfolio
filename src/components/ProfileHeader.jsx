const ProfileHeader = () => {
    return(
        <header className="flex">
            <section className="flex items-center gap-8" id="Hero">
                <div  className="rounded-full overflow-hidden w-60 h-60 bg-green-500 shrink-0 m-2" id="avatarWrapper">
                    {/* TODO 2 : Make sure to have an alt text in here  */}
                    <img className="w-full h-full object-cover" src="src/assets/images/image.png" alt="" />
                </div>
                <div className="" id="content">
                    <div className="profileInfo">
                        <div className="nameHeader">
                        <h1>John Phillip Lor</h1>
                        {/* That blue checkmark badge could go here */}
                        </div>
                        <p className="location">Sapang Dayap, San Ildefonso Bulacan</p>
                        <p className="jobTitle">Software Engineering Intern</p>
                    </div>
                </div>
            </section>
            <section className="" id="actions">
                <button>
                    Email Me
                </button>
                <section className="" id="socials">
                    <button>Github</button>
                    <button>LinkedIn</button>
                </section>
            </section>
        </header>
    );
};

export default ProfileHeader;