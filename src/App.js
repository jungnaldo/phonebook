import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import ContactForm from "./component/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactList from "./component/ContactList";

///왼쪽에는 연락처 등록 폼이 , 오른쪽에는 연락처 리스트와 서치창이 있다.
///유저가 이름을 입력하고 폰넘버 입력하면 리스트에 추가할수 있다.
///리스트에 아이템이 몇개가 담기는지 보인다.
///사용자가 유저를 이름으로 검색하여 찾을 수 있다.
function App() {
  return (
    <div>
      <h1 className="title">연락처</h1>
      {/* 모든것을 중앙에 위치시는 컨테이너 태그 */}
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
