import { useEffect } from "react";
export default function CircleBar() {
  useEffect(() => {
    const blocks = document.querySelectorAll(".block");

    blocks.forEach((item) => {
      const numElement = item.querySelector(".num");
      const num = parseInt(numElement.innerText);
      let count = 0;
      
     
const time = (2000 / num) * 2;
      const circle = item.querySelector(".circle");
      const dots = item.querySelector('.dots');

      const interval = setInterval(() => {
        if (count >= num) {
          clearInterval(interval);
        } else {
          count += 1;
          numElement.innerText = count;
          circle.style.strokeDashoffset = 503 - (503 * (count / 100));
          dots.style.transform = `rotate(${360 * (count / 100)}deg)`;
          if (count === 100) {
            dots.style.opacity = 0;
          }
        }
      }, time);
    });
  }, []);


  return(
    <div className="Circle_Wrap">
      <div className="block">
		<div className="box">
			<p className="number">
				<span className="num">70</span>
				<span className="sub">%</span>
			</p>
			<p className="title">HTML</p>
		</div>
		<span className="dots"></span>
		<svg className="svg">
			<defs>
				<linearGradient id="gradientStyle">
					<stop offset="0%" stopColor="#C22144" />
					<stop offset="100%" stopColor="#b7b5b5"/>
				</linearGradient>
			</defs>
			<circle className="circle" cx="90" cy="90" r="80" />
		</svg>
	</div>
	<div className="block">
		<div className="box">
			<p className="number">
				<span className="num">60</span>
				<span className="sub">%</span>
			</p>
			<p className="title">CSS</p>
		</div>
		<span className="dots"></span>
		<svg className="svg">
			<circle className="circle" cx="90" cy="90" r="80" />
		</svg>
	</div>
	<div className="block">
		<div className="box">
			<p className="number">
				<span className="num">60</span>
				<span className="sub">%</span>
			</p>
			<p className="title">JS</p>
		</div>
		<span className="dots"></span>
		<svg className="svg">
			<circle className="circle" cx="90" cy="90" r="80" />
		</svg>
</div>
</div>
  )
		}
