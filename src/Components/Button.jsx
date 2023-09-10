

const Button = ({ className, name, size, padding, borderRadius, borderColor, color, boxStyle, backgroundColor, mr, ml, mt, mb, pl, pr, pt, pb }) => {
  console.log("className:", className); // Add this line to check the className
  return (
    <div>
      <button
        className={`btn btn-outline-light btn-floating ${className}`}
        type="button"
        style={{
          ...boxStyle,
          fontSize: size,
          padding: padding,
          borderRadius: borderRadius,
          borderColor: borderColor,
          backgroundColor: backgroundColor,
          fontWeight: 'bold',
          color: color,
          marginRight: mr,
          marginLeft: ml,
          marginTop: mt,
          marginBottom: mb,
          paddingLeft: pl,
          paddingRight: pr,
          paddingTop: pt,
          paddingBottom: pb
        }}
      >
        {name}
      </button>
    </div>
  )
}

export default Button;
