import  {CardInfoData}  from "./CardInfoData";

export function BioCard() {

    return (
        <div>
            {CardInfoData.map((card) => {
                const {id, image, description} = card;

                return (
                    <section className="bioContainer" key={id}>
                        <div>
                            <img alt={description} src={require('../../../Pics/BioCardPics/' + image + '.jpg')}></img>
                        </div>
                        <div className="description">
                            <p>{description}</p>
                        </div>
                    </section>
                );
            })}
        </div>
    );
}