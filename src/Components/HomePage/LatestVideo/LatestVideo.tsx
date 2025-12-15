import { useEffect, useState } from 'react';
import { ReactComponent as Sparkle } from '../../../Pics/SvgDrawings/sparkle.svg';
import { useMediaQuery } from 'react-responsive';
import './LatestVideo.css';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;

interface Video {
    id: string;
    title: string;
}

export const LatestVideo: React.FC = () => {
    const [latestVideo, setLatestVideo] = useState<Video | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const sparkleStyle = { fill: 'rgb(198, 171, 210)', width: '4em' };  
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });


    useEffect(() => {
        const fetchLatestVideo = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`
                );
                
                if (!response.ok) {
                    throw new Error('Failed to fetch video');
                }

                const data = await response.json();
                
                if (data.items && data.items.length > 0) {
                    const video = data.items[0];
                    setLatestVideo({
                        id: video.id.videoId,
                        title: video.snippet.title
                    });
                }
                
                setLoading(false);
            } catch (err) {
                setError('Error loading video');
                setLoading(false);
            }
        };

        fetchLatestVideo();
    }, []);

    if (loading) return <section className="latest-video">Loading...</section>;
    if (error) return <section className="latest-video">{error}</section>;
    if (!latestVideo) return <section className="latest-video">No video found</section>;

    return (
        <section className="latest-video">
            {!isMobile && <Sparkle style={sparkleStyle} />}
            <div className="video-container">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${latestVideo.id}`}
                    title={latestVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            {!isMobile && <Sparkle style={sparkleStyle} />}
        </section>
    );
};
