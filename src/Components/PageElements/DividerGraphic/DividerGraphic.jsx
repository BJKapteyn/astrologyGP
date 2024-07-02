import './DividerGraphic.css';

// Accent graphic for section dividers intended to be on either side of the text, or in between text
// needsFlip: 
//   This graphic defaults to the circle drawn on the right, and the line on the left. 
//   true to flip it horizontally
// isInBetween:
//   true if the graphic is in between text
export const DividerGraphic = ({needsFlip = false, isInBetween = false}) => {
    const circleStyle = {
        fill: '#e4ba61',
        fillOpacity: '1',
        stroke:'#f17761',
        strokeWidth: '0.264583',
        strokeOpacity: '1'
    };

    const lineStyle = {
        fill: '#ddddce',
        fillOpacity: '1',
        stroke:'#ddddce',
        strokeWidth: '5',
        strokeOpacity: '1',
        strokeDasharray: 'none'
    };

    let lineStyleId = isInBetween ? 'dividergraphic-lineInbetween' : 'dividergraphic-lineContainer';

    const line = (
        <div className="dividergraphic-svgContainer" id={lineStyleId}>
            <svg width="100%" height="100%" viewBox="0 0 212 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>
                <path
                    style={lineStyle}
                    d="M 0,24.152477 H 212.84371" />
            </svg>
        </div>
    );

    const circle = (
        <div className='dividergraphic-svgContainer' id="dividergraphic-circleContainer">
            <svg width="100%" height="100%" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <circle
                    style={circleStyle}
                    cx="25"
                    cy="25"
                    r="25" />
            </svg>
        </div>
    );

    return (
        <div className="dividergraphic-container">
            {needsFlip ? circle : line}
            {needsFlip ? line : circle}
            {isInBetween && line}
        </div>
    );
}