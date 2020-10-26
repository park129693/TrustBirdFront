import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import PostFixInput from "./PostFixInput";
import "./Page.css"
//Contract Enrollment
const ContractEnroll = () => {
  return (
    <Container>
      <div className="pageheader">계약서 등록</div>
      <Form style={{ maxWidth: "720px", margin: "auto",}} className="sign-form">

        <Form.Group controlId="location">
          <Form.Label> 소재지 </Form.Label>
          <PostFixInput
            labelText="address"
            postfix=""
            type="text"
            placeholder="주소"
          />
        </Form.Group>

        <Form.Group controlId="land">
          <Form.Label> 토지 </Form.Label>
          <div >
          <div style={{display:"inline-block",  width:"350px", marginRight:"20px" }}>
          <PostFixInput
            labelText="landPurpose"
            postfix=""
            type="text"
            placeholder="지목"
          />  
          </div>
          <div style={{display:"inline-block", width:"350px"}}>
          <PostFixInput
            labelText="landArea"
            postfix="㎡"
            type="text"
            placeholder="면적"
          />
          </div>
          </div>
        </Form.Group>

        <Form.Group controlId="Building">
          <Form.Label> 건물 </Form.Label>
          <div>
          <div style={{display:"inline-block",  width:"350px", marginRight:"20px" }}>
          <PostFixInput
            labelText="buildingPurpose"
            postfix=""
            type="text"
            placeholder="종류"
          />
          </div>
          <div style={{display:"inline-block",  width:"350px", marginRight:"" }}>
          <PostFixInput
            labelText="bulidingArea"
            postfix="㎡"
            type="text"
            placeholder="면적"
          />
          </div>
          </div>
        </Form.Group>

        <Form.Group controlId="partOfLease">
          <Form.Label> 임대 </Form.Label>
          <div>
          <div style={{display:"inline-block",  width:"350px", marginRight:"20px" }}>
          <PostFixInput labelText="partOfLeaseArea" type="text" placeholder="임대할 부분"  />
          </div>
          <div style={{display:"inline-block",  width:"350px", marginRight:"" }}>     
          <PostFixInput
              labelText="partOfLeaseArea"
              postfix="㎡"
              type="text"
              placeholder="면적"
            />
            </div>
            </div>
          </Form.Group >
            

        <Form.Group controlId="formBasicPeriod">
          <Form.Label> 임대 기간 </Form.Label>
          <div>
          <Form.Control type="date" required style={{display:"inline-block",  width:"350px", marginRight:"20px" }} />
          <Form.Control type="date" required style={{display:"inline-block",  width:"350px", marginRight:"" }} />
          </div>
        </Form.Group>

          <Form.Group>
           <Form.Label>임대 형태 </Form.Label>
           <br/>
          <Form
            controlId="formBasicMonthly"
            style={{ display: "inline-block", marginRight: "32px" }}
          >
            <Form.Check type="checkbox" label="전세" required />
          </Form>
          <Form
            controlId="formBasicResevations"
            style={{ display: "inline-block" }}
          >
            <Form.Check type="checkbox" label="월세" required />
          </Form>
          </Form.Group>

        <Form.Group controlId="formBasicSecurityDeposit">
          <Form.Label> 보증금 / 계약금 </Form.Label>
          <div>
            <div style={{display:"inline-block",  width:"350px", marginRight:"20px" }}  >
            <PostFixInput
            labelText="보증금"
            postfix="만 원"
            type="text"
            placeholder="금액"
          />
            </div>
            <div style={{display:"inline-block",  width:"350px", marginRight:"" }} >            
          <PostFixInput
            labelText="계약금"
            postfix="만 원"
            type="text"
            placeholder="금액"
            />
            </div>
          </div>
          
        </Form.Group>


        <Form.Group controlId="formBasicInterimPrice">
          <Form.Label> 중도금 / 잔금 </Form.Label>
          <div>
            <div style={{display:"inline-block",  width:"350px", marginRight:"20px" }}>
          <PostFixInput
            labelText="중도금"
            postfix="만 원"
            type="text"
            placeholder="금액"
          />
          </div>
          <div style={{display:"inline-block",  width:"350px", marginRight:"" }}>
          <PostFixInput
            labelText="잔금"
            postfix="만 원"
            type="text"
            placeholder="금액"
          />
          </div>
          </div>
        </Form.Group>
        
        <Form.Group controlId="formBasicRent">
          <Form.Label> 차임 </Form.Label>
          <PostFixInput
            labelText="차임"
            postfix="만 원"
            type="text"
            placeholder="금액"
          />
        </Form.Group>

        <Form.Group controlId="formBasicSpecialAgreement">
          <Form.Label> 특약사항 </Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="lessor">
          <Form.Label> 임대인 </Form.Label>
          <div>
            <div style={{display:"inline-block",  width:"220px", marginRight:"" }} >
          <PostFixInput
            labelText="이름"
            postfix=""
            type="text"
            placeholder="성명"
          />
          </div>
          <div style={{display:"inline-block",  width:"500px", marginRight:"" }}>
          <PostFixInput
            labelText="전화번호"
            postfix=""
            type="text"
            placeholder="연락처"
          />
          </div>
          </div>
          <PostFixInput
            labelText="주소"
            postfix=""
            type="text"
            placeholder="주소"
          />
          <PostFixInput
            labelText="주민번호"
            postfix=""
            type="text"
            placeholder="주민번호"
          />
          
        </Form.Group>

        <Form.Group controlId="lessue">
          <Form.Label> 임차인 </Form.Label>
          <div>
            <div style={{display:"inline-block",  width:"220px", marginRight:"" }} >
          <PostFixInput
            labelText="이름"
            postfix=""
            type="text"
            placeholder="성명"
          />
          </div>
          <div style={{display:"inline-block",  width:"500px", marginRight:"" }}>
          <PostFixInput
            labelText="전화번호"
            postfix=""
            type="text"
            placeholder="연락처"
          />
          </div>
          </div>
          <PostFixInput
            labelText="주소"
            postfix=""
            type="text"
            placeholder="주소"
          />
          <PostFixInput
            labelText="주민번호"
            postfix=""
            type="text"
            placeholder="주민번호"
          />
        </Form.Group>

        <Form.Group controlId="realtor">
          <Form.Label> 중개인 </Form.Label>
          <div>
            <div style={{display:"inline-block",  width:"220px", marginRight:"" }} >
          <PostFixInput
            labelText="이름"
            postfix=""
            type="text"
            placeholder="성명"
          />
          </div>
          <div style={{display:"inline-block",  width:"500px", marginRight:"" }}>
          <PostFixInput
            labelText="전화번호"
            postfix=""
            type="text"
            placeholder="연락처"
          />
          </div>
          </div>
          <PostFixInput
            labelText="주소"
            postfix=""
            type="text"
            placeholder="주소"
          />
          <PostFixInput
            labelText="주민번호"
            postfix=""
            type="text"
            placeholder="주민번호"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="button3"
        >
          저장하기
        </Button>
      </Form>
    </Container>
  );
};

export default ContractEnroll;
