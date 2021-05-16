import './ChartBar.css';

function ChartBar(props) {

    let barFillHeigth = '0%';

    if (props.maxValue > 0) {
        barFillHeigth = Math.round(props.value / props.maxValue) * 100 + '%';
    }

    return (
        <div className="char-bar">
            <div className="char-bar__inner">
                <div className="char-bar__fill" style={{height: barFillHeigth}}>

                </div>
            </div>
            <div className="char-bar__label">
                {props.label}
            </div>
        </div>
    );
}

export default ChartBar;