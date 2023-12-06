

export default function Project_Box(props){
 const name = props.name;
 const github = props.git;
 const imgUrl = "/images/"+name+".png"
 const img_style={
   width:"100%",
   height:"100%",
   "border-radius":"3%"
 }
  const P_style={
    "width":"340px",
    "lineHeight":"23px",
    "marginTop":"0px",
    "whiteSpace":"wrap",
  }

  const Hr_style={
    'background':"black"
    ,"marginTop":"5px"
    ,"marginBottom":"15px"
    ,"height":"1px"
    ,"border":"none"
  }

  const box_style={
    "padding":"10px",
    "fontSize":"0.9rem",
    "boxShadow":"1px 1px 1px;"
  }
  return(
    <div className="Site_wrap">
      <div className="Site_top">
       <h4>{props.Project_Name}</h4>
      <i>{props.Date}</i>
      </div>
      <div className="Site_flexWrap">
        <div className="Site_img">
        <img style={img_style} src={imgUrl} alt={name} title={name}/>
        </div>
        <div style={box_style} className="Site_introduce">
          <p style={P_style}>{props.Site}</p>
          <hr style={Hr_style}/>
          <div>주요기능 : {props.fun}</div>
          <div><a href={github}>Github : {props.git}</a></div>
          <div>소요시간 : {props.time}</div>
        </div>
      </div>
    </div>
  )
}