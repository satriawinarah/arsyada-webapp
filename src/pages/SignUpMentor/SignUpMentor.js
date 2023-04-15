import React, {useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormTextarea,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilJustifyLeft, cilCalendar, cibLinkedinIn, cilMoney, cilJustifyCenter } from '@coreui/icons'

function SignUpMentor() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your Mentor account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilJustifyLeft} />
                    </CInputGroupText>
                    <CFormTextarea aria-label="Bio" placeholder='Bio'></CFormTextarea>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilJustifyCenter} />
                    </CInputGroupText>
                    <CFormTextarea aria-label="Short Bio" placeholder='Short Bio'></CFormTextarea>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilCalendar} /> &nbsp; Date Birth
                    </CInputGroupText>
                    <CFormInput placeholder="Birth Date" type='date' />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cibLinkedinIn} />
                    </CInputGroupText>
                    <CFormInput placeholder="Linkedin URL" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput type="file" id="inputGroupFile02" />
                    <CInputGroupText component="label" htmlFor="inputGroupFile02">
                      Profile Picture
                    </CInputGroupText>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      Category
                    </CInputGroupText>
                    <CFormSelect aria-label="Default select example">
                    <option value="1">Software Engineer</option>
                    <option value="2">Accounting</option>
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilMoney} />
                    </CInputGroupText>
                    <CFormInput placeholder="Price" type='number' />
                  </CInputGroup>
                  <hr/>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success">Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default SignUpMentor
