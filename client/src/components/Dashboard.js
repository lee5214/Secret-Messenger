import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList'
const Dashboard = () => {
  return (
    <div>
      Dashboard
      <SurveyList/>
      <div className="fixed-action-btn">
        <Link to='/surveys/new/'
              className="btn-flat btn-floating btn-large red white-text">
          <i className="large material-icons">add</i>
        </Link>

      </div>
    </div>
  );
};

export default Dashboard;
