import PropTypes from 'prop-types';
import '../styles/ProfileCard.css';

const ProfileCard = ({ name, age }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>{age ? `Idade: ${age}` : 'Idade não disponível'}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

ProfileCard.defaultProps = {
  age: null,
};

export default ProfileCard;