import { Wrapper, Header, Header_title, Home,Home_p, Home_title, About_Me,About_left, About_right, About_img,Skill, Project, Contact} from "../styles/PortFolio_style"
import Menu from "../src/Menu"
import About_box from "../src/units/profile"
import Name from "../src/units/Name"
import CircleBar from "../src/Circle_bar"
import { useRouter } from "next/router"
import Project_Box from "../src/units/Project_Box"
export default function PortFolio(){
  const baro01 = () => {
  console.log("baro01 함수 호출됨");
  // 이하 코드 생략
};

  const scrollToSection = (sectionId) =>{
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }

  const router = useRouter()
  function onclickMove1(){
    router.push("/index.js")
  };


  return(
    <Wrapper>
      <Header>
        <Header_title><a href="#" className="logo"></a></Header_title>
        <Menu scrollToSection={scrollToSection}></Menu>
      </Header>
      <Home>
        <Home_title>JAEHWAN PORTFOLIO</Home_title>
        <Home_p className="animation01">하루하루 새로운 것에 도전하고 배워가며 실패를 두려워 하지 않는 프론트엔드 개발자가 되겠습니다.</Home_p>
      </Home>
      <About_Me id="Section01">
       <About_left>
        <Name names="About Me" sub="프론트 엔드 개발자 취업을 위한 시작"></Name>
        <About_img className="port_img"></About_img>
        </About_left>
       <About_right>
         <Name className="font" names="Profile"></Name>
         <About_box list1="이름 : 정재환" list2="나이 : 2000.02.18" list3="연락처 : 010-8488-6377" list4 =" 이메일 : wwwrbnm@naver.com" ></About_box>
         <Name className="about" names="Education"></Name>
         <About_box list1 ="동원대학교 컴퓨터 정보과 졸업 22.03" list2="SBS컴퓨터아카데미 퍼블리셔 과정 22.04" list3="인프런 프론트엔드 과정 독학 23.05"></About_box>
         <Name className="about" names="license"></Name>
         <About_box list1="ITQ 한글" list2="ITQ 파워포인트" list3="ITQ 엑셀" list4="자동차 정비 기능사"></About_box>
       </About_right>
      </About_Me>
      <Skill  id="Section02">
        <Name names="Skill"></Name>
        <CircleBar></CircleBar>
      </Skill>
      <Project id="Section03">
        <Name names="Project"></Name>
        <Project_Box Project_Name="포트폴리오 웹사이트" Date="2022.08 (1人 개인 프로젝트)" Site="포트폴리오 메인 페이지로 제작한 웹사이트 입니다. 현재 보고 계신 웹사이트로 React로 개발을 완료하였습니다." fun="소개, 역량, 프로젝트, 연락처" time="1 ~ 2 주" src1="dds.jpeg" name="main" git="https://github.com/JAEHWAN-J123/mainpage.git"></Project_Box>
        <Project_Box url="http://jaehwan0218.dothome.co.kr" Project_Name="국립중앙박물관" Date="2022.05 (1人 개인 프로젝트)" Site="당시 학원수업을 들으면서 처음 만들어본 포트폴리오 용도 웹 사이트입니다. 퍼블리싱으로 만들었으며, 사이트를 재구성 하는 방향으로 제작하였습니다."fun="박물관 소개, 관람정보, 전시, 소식 참여" time="2 달" name="museum" git="https://github.com/JAEHWAN-J123/Portfolio-museum.git" ></Project_Box>
        <Project_Box url="https://healthsite-jjh.netlify.app/" Project_Name="헬스도움사이트" Date="2024.01 (1人 개인 프로젝트)" Site="웨이트 트레이닝을 처음 접하는 사람들을 위한 안내 도우미 사이트입니다."fun="웨이트 트레이닝 역사, 부위별 운동방법, 미정, 미정" time="제작중" name="health" git="https://github.com/JAEHWAN-J123/health" ></Project_Box>
      </Project>
      <Contact className="Section04">
        <Name names="Contact"></Name>
        <div className="Contact_Wrap">
        <h4>정재환 포트폴리오</h4>
        <p>Tel : 010 - 8488 - 6377</p>
        <p>Email : wwwrbnm@naver.com</p>
        <span>COPYRIGHT 2023.JAE HAWN JUNG All rights reserved</span>
        </div>
      </Contact>
    </Wrapper>
  )
}