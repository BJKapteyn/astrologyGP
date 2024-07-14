import './VideoSection.css';

export const VideoSection = () => {
    return (
        <div className="videosection">
            <div className="videosection-videocontainer">
                <iframe 
                        className="videosection-video"
                        src="https://www.youtube.com/embed/videoseries?si=TkHSyUQp42M11451&amp;list=PL22DFF37B18C4F943&amp;origin=https://the-vibe-collective-2024.web.app"
                        title="YouTube video player" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen></iframe>
            </div>
            <div className="videosection-textcontainer">
                <div className="spacer"></div>
                <p className="videosection-text">At The Vibe Collective, we don't just offer jobs, we craft careers within a dynamic and inclusive ecosystem. We're committed to fostering growth, embracing collaboration, and achieving a harmonious work-life balance.</p>
                <div className="spacer"></div>
            </div>
        </div>
    )
}