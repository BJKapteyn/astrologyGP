import './DividerGraphic.css';

// Accent graphic for section dividers
export const DividerGraphic = ({needsFlip = false}) => {
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

    const line = (
        <div className="dividergraphic-svgContainer" id="dividergraphic-lineContainer">
            <svg width="100%" height="100%" viewBox="0 0 212 50" id="svg1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>
                <path
                    style={lineStyle}
                    d="M 0,24.152477 H 212.84371" />
            </svg>
        </div>
    );

    const circle = (
        <div className='dividergraphic-svgContainer' id="dividergraphic-circleContainer">
            <svg width="100%" height="100%" viewBox="0 0 50 55" id="svg1" xmlns="http://www.w3.org/2000/svg">
                <circle
                    style={circleStyle}
                    id="path1"
                    cx="25"
                    cy="25"
                    r="24" />
            </svg>
        </div>
    );

    return (
        <div className="dividergraphic-container">
            {needsFlip ? circle : line}
            {needsFlip ? line : circle}
        </div>
    );
}