export default function Scores(props){
    //Using map to iterate over each object, the score propert is diaplayed for each date property
    const score = props.scores.map((score, index) => {
        return(
            <div key={index} className="scores">
                Date: {score.date}<br/>
                Score: {score.score}
            </div>
        )
    })
    
    return (
        <div>
            {score}
        </div>
    )
}