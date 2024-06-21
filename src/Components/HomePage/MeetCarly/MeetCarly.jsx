import './MeetCarly.css';

export const MeetCarly = () => {
    const buttonSettings = {
        buttonText: 'TELL ME MORE',
        buttonStyleId: 'meet-morebutton',
        action: null
    }

    return (
        <section className="meet-flex">
            <div className="meet-flexitem">
            <iframe src="https://www.youtube.com/embed/6-dt1ZXxZ6I?si=uM80k85NZnKy0YIl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='meet-video'></iframe>
            </div>
            <div className="meet-flexitem">

            </div>
        </section>
    );
}