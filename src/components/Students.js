import Scores from "./Scores";
export default function Students(props) {
     //The name and bio properties are displayed while scores is passed to the Scores component
        return (
            <div className="student">
              <h1>{props.student.name}</h1>
                <p>{props.student.bio}</p>
                 <Scores scores ={props.student.scores}/>
            </div>
          );
       
  }

  