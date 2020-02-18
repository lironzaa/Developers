import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExprience = ({ experience: {
  company,
  title,
  loaction,
  current,
  to,
  from,
  description
} }) => (<div>
  <h3 className="text-dark">{company}</h3>
  <p>
    <Moment format="DD/MM/YYYY">{from}</Moment> -{!to ? ' Now' : <Moment format="DD/MM/YYYY">
      {to}
    </Moment>}
  </p>
  <p>
    <strong>Position: </strong> {title}
  </p>
  <p>
    <strong>Description:</strong>{description}
  </p>
</div>
  );

ProfileExprience.propTypes = {
  experience: PropTypes.object.isRequired
}

export default ProfileExprience;