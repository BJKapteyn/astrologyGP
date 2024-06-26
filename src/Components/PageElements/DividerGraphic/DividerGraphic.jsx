// import rightStemGraphic from '../../../Pics/SvgDrawings/CircleDividerLeft.svg'
import './DividerGraphic.css';

export const DividerGraphic = () => {
    const circleStyle = {
        fill: '#f1775b',
        fillOpacity: '1',
        stroke:'#f17761',
        strokeWidth: '0.264583',
        strokeOpacity: '1'
    };
    const lineStyle = {
        fill: '#000000',
        fillOpacity: '1',
        stroke:'#000000',
        strokeWidth: '2',
        strokeOpacity: '1',
        strokeDasharray: 'none'
    };
// "fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1.365;stroke-dasharray:none;stroke-opacity:1"

    return (
        <div className="dividergraphic-container">
            <div className="dividergraphic-svgContainer" id="dividergraphic-lineContainer">
                <svg width="100%" height="100%" viewBox="0 0 212 50" id="svg1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>
                    <path
                        style={lineStyle}
                        d="M 0,24.152477 H 212.84371" />
                </svg>
            </div>
            <div className='dividergraphic-svgContainer' id="dividergraphic-circleContainer">
                <svg width="100%" height="100%" viewBox="0 0 50 50" id="svg1" xmlns="http://www.w3.org/2000/svg">
                    <circle
                        style={circleStyle}
                        id="path1"
                        cx="25.473314"
                        cy="25.095934"
                        r="24.341167" />
                </svg>
            </div>
        </div>
    );
}