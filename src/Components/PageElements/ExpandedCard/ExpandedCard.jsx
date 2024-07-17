import './ExpandedCard.css';

export const ExpandedCard = ({ productItem }) => {
    const { image,
            name,
            productServiceLength,
            productPrice,
            description,
            buttonText } = productItem;

    return (
        <div className="modalitem-grid">
            <div className="modalitem-imageflex">
                <img src={image} alt={'product ' + name} />
            </div>
            <div className="modalitem-info">
                <h4 className="modalitem-productname">{name}</h4>

                <div className="modalitem-infotext">
                    {productServiceLength && (
                        <p className="modalitem-serviceLength">{productServiceLength + 'HR | '}</p>
                    )}
                    {productPrice && (
                        <p className="modalitem-price">{'$' + productPrice}</p>
                    )}
                </div>
                    
                <div className="modalitem-button">{buttonText}</div>
            </div>
            <div className="modalitem-description">
                <p className="modalitem-text">{description}</p>
            </div>
        </div>
    )
}