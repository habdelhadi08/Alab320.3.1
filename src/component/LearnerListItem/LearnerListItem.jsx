import PropTypes from 'prop-types';
import ScoreList from '../ScoreList/ScoreList';




function LearnerListItem({learners}) {
    return (
        <div>
            <h1>{learners.name}</h1>
            <h2>{learners.bio}</h2>
            <ScoreList scores={learners.scores}/>
          
        
            
            <hr />

        </div>
    )
}




LearnerListItem.propTypes = {
    learners: PropTypes.object
}

export default LearnerListItem;