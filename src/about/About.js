import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Image } from "react-bootstrap";
import "./About.css";
import member1 from "../images/member1.png";
import member2 from "../images/member2.png";
import member3 from "../images/member3.png";
import member4 from "../images/member4.png";
import member5 from "../images/member5.png";
import member6 from "../images/member6.png";
import partner1 from "../images/partner1.png";
import partner2 from "../images/partner2.png";
import partner3 from "../images/partner3.png";

function About() {
  return (
    <div>
      <Container className="about">
        <Row>
          <Col lg={6} className="about-branding">
            <Row>
              <h2>Key Members</h2>
              <h5>
                위노아이는 치과의사, 빅데이터 전문가, HW 개발자 등 각 분야에
                전문가가 포진해 있기 때문에 구강카메라와 의료영상분석이 혼합
                구성된 솔루션을 개발하기 위한 노하우가 축적되어 있습니다.
              </h5>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Row>
              <div className="member-info">
                <Image src={member1} width="50%" height="auto" roundedCircle />
                <h4>이명우 대표</h4>
                <h5>기획 및 총괄, 투자 유치</h5>
                <p>前 ㈜ 가남오스콤 품질관리부장</p>
                <p>University of Illinois at Chicago MBA</p>
              </div>
            </Row>
          </Col>
          <Col lg={4}>
            <Row>
              <div className="member-info">
                <Image src={member2} width="50%" height="auto" roundedCircle />
                <h4>신경선</h4>
                <h5>기획 및 사업화, 의료빅데이터 분석</h5>
                <p>前 성모병원 약제팀 약사</p>
                <p>보건의료 빅데이터 분석 경력 6년</p>
                <p>고려대학교 보건사회약학 박사 (Ph.D.)</p>
                <p>고려대학교 약학대학 학사 (Pharm.D.)</p>
              </div>
            </Row>
          </Col>
          <Col lg={4}>
            <Row>
              <div className="member-info">
                <Image src={member3} width="50%" height="auto" roundedCircle />
                <h4>최재호</h4>
                <h5>치과의사</h5>
                <p>前 강북삼성병원 예방검진센터 검진의</p>
                <p>서울대학교 치의학과 박사과정</p>
                <p>서울대학교 치의학대학원 석사 (MSD)</p>
                <p>서울대학교 재료공학부 학사</p>
              </div>
            </Row>
          </Col>
          <Col lg={4}>
            <Row>
              <div className="member-info">
                <Image src={member4} width="50%" height="auto" roundedCircle />
                <h4>박윤기</h4>
                <h5>재무 및 HW 개발(구강용 카메라 제작 총괄)</h5>
                <p>前 디엠아이텍 (정밀가공)</p>
                <p>정밀가공 ·설계 경력 5년</p>
                <p>Loyola University Chicago 마케팅 학사</p>
              </div>
            </Row>
          </Col>
          <Col lg={4}>
            <Row>
              <div className="member-info">
                <Image src={member5} width="50%" height="auto" roundedCircle />
                <h4>권혁신</h4>
                <h5>분석엔진 개발, 구강영상 처리, App 개발</h5>
                <p>前 오스템임플란트 (영상처리, 3D 그래픽, 개발)</p>
                <p>前 라온피플(카메라 API · 펌웨어, 영상검진 SW)</p>
                <p>영상처리, SW 개발 경력 4년</p>
                <p>어플리케이션 개발 경력 2년</p>
                <p>
                  한양대학교 전자컴퓨터통신공학 석사
                  <br />
                  (영상처리, 딥러닝 전공)
                </p>
              </div>
            </Row>
          </Col>
          <Col lg={4}>
            <Row>
              <div className="member-info">
                <Image src={member6} width="50%" height="auto" roundedCircle />
                <h4>최승주</h4>
                <h5>기획 및 마케팅</h5>
                <p>前 드림즈에이젯원(문화복지사업기획)</p>
                <p>인하대학교 문화컨텐츠경영학과 학사</p>
                <p>前 서울문화재단 시민기획단</p>
                <p>前 인천문화재단 시민기자단</p>
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col lg={7} className="about-branding">
              <Row>
                <h2>Key Milestones</h2>
              </Row>
            </Col>
          </Row>
          <Row>
            <div class="timeline-outer" data-aos="fade-up">
              <div class="container" id="content">
                <ul class="timeline">
                  <li class="event" data-date="'20.08">
                    <h5>주식회사 위노아이(winoi)로 상호 변경</h5>
                    <h5>연세대학교 캠퍼스타운 창업경진대회 선발</h5>
                    <p>∙ 주최</p>
                    <p>&nbsp;&nbsp;&nbsp;연세대학교 캠퍼스타운사업단</p>
                  </li>
                  <li class="event" data-date="'20.08">
                    <h5>분석기술 특허등록</h5>
                    <p>∙ 등록번호: 제10-2176490호</p>
                  </li>
                  <li class="event" data-date="'20.08">
                    <h5>분석기술 특허출원 (2)</h5>
                    <p>∙ 출원번호: 10-2020-0099628</p>
                  </li>
                  <li class="event" data-date="'20.04">
                    <h5>스타트업스쿨 7기 수료</h5>
                    <p>∙ 주최: 충북창조경제혁신센터</p>
                  </li>
                  <li class="event" data-date="'19.11">
                    <h5>MG희망나눔 소셜성장 지원사업 선발</h5>
                    <p>∙ 주최</p>
                    <p>&nbsp;&nbsp;&nbsp;MG새마을금고, 함께일하는재단</p>
                  </li>
                  <li class="event" data-date="'19.10">
                    <h5>ENNOtank 시즌2 선발</h5>
                    <p>∙ 주최: 서울대학교 공과대학</p>
                    <p>∙ 후원: 현대자동차</p>
                  </li>
                  <li class="event" data-date="'19.08">
                    <h5>위노베이션 설립</h5>
                    <h5>분석기술 특허출원</h5>
                    <p>∙ 출원번호: 특허-2019-0102993</p>
                    <h5>제6회 헬로 스타트업 공모전 본선 진출</h5>
                    <p>∙ 주최: 강원창조경제혁신센터</p>
                  </li>
                  <li class="event" data-date="'19.06">
                    <h5>예비창업패키지 4차 산업 선정</h5>
                    <p>∙ 주최: 중소벤처기업부</p>
                    <p>∙ 주관기관: 탄소융합기술원</p>
                  </li>
                </ul>
              </div>
            </div>
          </Row>
          <Row>
            <Col lg={7} className="about-branding">
              <Row>
                <h2>Awards</h2>
              </Row>
            </Col>
          </Row>
          <Row>
            <div class="timeline-outer" data-aos="fade-up">
              <div class="container" id="content">
                <ul class="timeline">
                  <li class="event" data-date="'20.09">
                    <h5>ENNOtank 데모데이 부스전시 1위</h5>
                    <p>∙ 주최: 서울대학교 공과대학</p>
                    <p>∙ 후원: 현대자동차</p>
                  </li>
                  <li class="event" data-date="'19.08">
                    <h5>소셜벤처 경연대회 글로벌 성장부문 권역대회 1등</h5>
                    <p>∙ 주최: 고용노동부</p>
                  </li>
                </ul>
              </div>
            </div>
          </Row>
        </Row>
        <Row>
          <Row>
            <Col lg={7} className="about-branding">
              <Row>
                <h2>Business Partners</h2>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="member-info">
              <div className="member-info">
                <Image src={partner1} width="auto" height="60px" rounded />
                <h4>(주)가남오스콤)</h4>
                <p>
                  치과교정재료만을 전문적으로 25년동안 국내에 수입/유통한 업체로
                  세계최대 교정재료 업체인 American Orthodontics사 독점
                  한국대리점
                </p>
              </div>
            </Col>
            <Col lg={4} className="member-info">
              <div className="member-info">
                <Image src={partner2} width="auto" height="60px" rounded />
                <h4>디엠아이텍(주)</h4>
                <p>F.A. Plant & 자동화 기계 / 정밀가공 / 지그 / 설계</p>
              </div>
            </Col>
            <Col lg={4} className="member-info">
              <div className="member-info">
                <Image src={partner3} width="auto" height="60px" rounded />
                <h4>예울치과교정과치과의원</h4>
                <p>교정 전문 / 1:1 맞춤 교정치료</p>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default About;
