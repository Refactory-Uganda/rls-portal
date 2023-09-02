

const Button = ({name, size, padding, borderRadius, borderColor, color , boxStyle, backgroundColor, mr, pl, pr, pt, pb, }) => {
  return (
    <div>
      <button className='btn btn-outline-light btn-floating' type="button" style={{...boxStyle,fontSize: size, padding: padding, borderRadius: borderRadius,  borderColor: borderColor, backgroundColor:backgroundColor, fontWeight: 'bold', color:color, marginRight:mr, paddingLeft: pl, paddingRight: pr, paddingTop: pt, paddingBottom: pb}}>{name}</button>
    </div>
  )
}

export default Button