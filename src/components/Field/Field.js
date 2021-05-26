import '../../App.css'

function Field () {
    return (
<div id="stadium">
    <div id="field" className="mowed-grass"></div>
    <div id="in-field"></div>
    <div id="in-field-grass" className="mowed-grass"></div>
    <div id="batting-circle"></div>
    <div id="home-plate">
    <div className="action-area"></div>
    </div>
    <div id="base-lines"></div>
    <div id="pitchers-mound"></div>
    <div id="pitchers-rubber"></div>
    <div id="first-circle" className="half-circle"></div>
    <div id="second-circle" className="half-circle"></div>
    <div id="third-circle" className="half-circle"></div>
    <div id="batters-box-right" className="batters-box"></div>
    <div id="batters-box-left" className="batters-box"></div>
</div>
    )
}

export default Field