import PropTypes from 'prop-types';

const ButtonAddContent = ({ label, borderColor, backgroundColor, contentColor }) => {
  const buttonStyle = {
    border: `2px solid ${borderColor}`,
    background: backgroundColor,
    color: contentColor,
    borderRadius: '8px', 
    width: '10rem', 
    height: '3rem',
    margin:'.5rem',
    
 
  };

  return (
    <button style={buttonStyle} >
      {label}
    </button>
  );
};

ButtonAddContent.propTypes = {
  label: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  contentColor: PropTypes.string.isRequired,
};

export default ButtonAddContent;
