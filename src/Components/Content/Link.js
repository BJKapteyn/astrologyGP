import '../../App.css';

export const Link = (linkData) => {
    const {id, href, className, text} = linkData;
    return <a key={id} href={href} className={className}>{text}</a>
}