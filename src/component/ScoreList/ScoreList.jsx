import PropTypes from "prop-types";


function ScoreList({ scores }) {


  return (
    <div>
      <h2>Scores</h2>
      <div>
        {scores.map((score) => (
          <div>
            <p>Date:{score.date}</p>
            <p>Score:{score.score}</p>
          </div> 
        ))}
        
      </div>
      
    </div>
  );
}

ScoreList.propTypes = {
  scores: PropTypes.array,
};

export default ScoreList;