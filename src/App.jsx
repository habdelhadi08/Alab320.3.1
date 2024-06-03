
import { useState } from 'react';
import LearnerList from "./component/LearnerList/LearnerList";
import CreateLearner from './component/CreateLearner/CreateLearner';
import { learners } from "./data/learners";
import "./App.css";

function App() {

  const [learnersState, setLearnersState] = useState(learners);

  const addLearner = (newLearner) => {
    setLearnersState([...learnersState, newLearner]);
  }


  return (
    <>
      <h1> Rendering Arrayes fron State</h1>
      

      <LearnerList learners={learnersState} />
      <CreateLearner addLearner={addLearner}/>
     
    </>
  );
}

export default App;
