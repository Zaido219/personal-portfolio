const ProfileHeader = () => {
    return(
        <header>
            <section id="Hero">
                <div id="avatarWrapper">
                    {/* TODO 2 : Make sure to have an alt text in here  */}
                    <img src="src/assets/images/image.png" alt="" />
                </div>
                <div id="content">
                    <div className="profileInfo">
                        <div className="nameHeader">
                        <h1>John Phillip Lor</h1>
                        {/* That blue checkmark badge could go here */}
                        </div>
                        <p className="location">Metro Manila, Philippines</p>
                        <p className="jobTitle">Software Engineering Intern</p>
                    </div>
                </div>
            </section>
            <section id="actions">

            </section>
        </header>
    );
};

export default ProfileHeader;