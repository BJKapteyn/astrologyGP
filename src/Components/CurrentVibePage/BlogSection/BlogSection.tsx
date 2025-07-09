import { useState } from 'react';
import { LoadingIndicator } from '../../PageElements/LoadingIndicator/LoadingIndicator.jsx';
import { Blog } from '../../../Types/ProjectTypes';
import { ReactComponent as Sparkle } from '../../../Pics/SvgDrawings/sparkle.svg';
import { BlogPost } from '../BlogPost/BlogPost.tsx';
import { TitleCard } from '../../PageElements/TitleCard/TitleCard.jsx';
import StarSpiral from '../../../Pics/Landscapes/jpeg/killian-eon-starspiral.jpg';
import Posts from './blogPosts.json'
import './BlogSection.css';

export const BlogSection: React.FC = () => {
    const [blogposts, setBlogPosts] = useState<Blog[] | null>(null);
 

    // const dividerData = {
    //     headingText: 'CURRENT VIBE'
    // }'
    const titleConfiguration = {
        titleText: 'Astrology Blog',
        backgroundimage: StarSpiral, 
        styleId: 'blogsection-titlecard',
    };

    if(!blogposts) {
        let postsArray: Blog[] = JSON.parse(JSON.stringify(Posts)) as Blog[];
        postsArray.sort((post1, post2) => {
            return new Date(post2.date).getTime() - new Date(post1.date).getTime();
        })

        setBlogPosts(postsArray);
    }

    const blogSection = (
        <div className="blogsection" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* <SectionDivider dividerData={dividerData} /> */}
            <TitleCard titleData={titleConfiguration} />
            <Sparkle className="blogsection-sparkle" />
            <p className="blogsection-subtext">Welcome to our astrology blog, where we explore the stars, signs, and celestial patterns that shape our lives and personalities.</p>
            <Sparkle className="blogsection-sparkle" />
            {blogposts?.map(blogData => {
                return <BlogPost key={blogData.id} blog={blogData} />
            })}
        </div>
    )

    return (
        <>
            {blogposts ? blogSection : <LoadingIndicator />}
        </>
    );
};