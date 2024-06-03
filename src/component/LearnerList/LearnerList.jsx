import PropTypes from "prop-types";
import LearnerListItem from "../LearnerListItem/LearnerListItem";



function LearnerList({ learners }) {


  return (
    <div>
      <h2>Learner List</h2>
      <div>
        {learners.map((item) => (
          <LearnerListItem learners={item} key={item.name} />
        ))}
        
      </div>
      
    </div>
  );
}

LearnerList.propTypes = {
  learners: PropTypes.array,
};

export default LearnerList;