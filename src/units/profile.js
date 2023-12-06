export default function About_box(props){
  const list_style = {
    "font-size":"18px",
    "line-height":"25px",
    "padding":"10px",
    "margin-left":"10px"
  }
  return(
    <div style={list_style}>
      <p>{props.list1}</p>
      <p>{props.list2}</p>
      <p>{props.list3}</p>
      <p>{props.list4}</p>
    </div>
  )
}