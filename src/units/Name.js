export default function Name(props){
 const Name_style = {
   "font-size":"22px",
    width:230
   }

  const p_style = {
    "font-size":"15px"
  }

  const span_style ={
    "color":"red",
    "margin-right":"4px"
  }
  return(
    <div style={Name_style}>
    <span style={span_style}>|</span>{props.names}
    <p style={p_style}>{props.sub}</p>
    </div>
  )
}