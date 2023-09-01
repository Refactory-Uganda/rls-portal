

const Button = ({name, size, padding, borderRadius, borderColor, color , boxStyle, backgroundColor}) => {
  return (
    <div>
      <button className='btn btn-outline-light btn-floating' type="button" style={{...boxStyle,fontSize: size, padding: padding, borderRadius: borderRadius,  borderColor: borderColor, backgroundColor:backgroundColor, fontWeight: 'bold', color:color}}>{name}</button>
    </div>
  )
}

export default Button