import { useEffect,useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Blog } from '../../../Types/ProjectTypes';
import { useRandomImageUrl } from '../../../CustomHooks/useRandomImageUrl';
import { useIsElementInView } from '../../../CustomHooks/useIsElementInView';
import './BlogPost.css';

type BlogPostProps = {
    blog: Blog;
};

export const BlogPost: React.FC<BlogPostProps> = ({ blog }) => {
    const randomImageUrl = useRandomImageUrl();
    const [isElementInView, targetElementRef] : [boolean, React.RefObject<HTMLDivElement>] = useIsElementInView({ threshold: 0.4 });
    const [hasElementAnimated, setHasElementAnimated] = useState(false);

    useEffect(() => {
        if (isElementInView) {
            setHasElementAnimated(true);
        }
    }, [isElementInView]);

    const imageUrl = blog.imageUrl || randomImageUrl;
    const styles = useSpring({
        config: { duration: 800 },
        from: {
            opacity: '0%',
            y: '6%',
        },
        to: {
            opacity: hasElementAnimated ? '100%' : '0%',
            y: '0%',
        },
    })

    return (
        <animated.div ref={targetElementRef} style={styles} className="blogpost-container">
            <div
                className="blogpost-header"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                >
                <h3 className="blogpost-title">{blog.title}</h3>
                <p className="blogpost-meta">
                    <strong className="blogpost-author">{blog.author}</strong>
                    <em className="blogpost-date">{blog.date}</em>
                </p>
            </div>
            <p className="blogpost-content">{blog.content}</p>
        </animated.div>
    );
};