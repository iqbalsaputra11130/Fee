import React, { useState } from "react";
import {
  Breadcrumb,
  Container,
  Col,
  Row,
  Button,
  Collapse,
  Dropdown,
} from "react-bootstrap";
import "../Css/pages.css";
import {
  BsSearch,
  BsDownload,
  BsPrinter,
  BsFileEarmarkPlus,
  BsChevronDoubleDown,
  BsChevronUp,
} from "react-icons/bs";
import { Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
// import Collapsible from "../Components/Collapsible";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleFilterOpening = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <Container>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Master Data Management</Breadcrumb.Item>
          <Breadcrumb.Item active>Fee Type</Breadcrumb.Item>
        </Breadcrumb>
        <div className="fee-type">
          <span>Fee Type</span>
        </div>
        <Row>
          <Col sm={3}>
            <Formik>
              <form noValidate>
                <div className="form-group">
                  <input
                    className="form-control rounded"
                    type="text"
                    name="search"
                    placeholder="Search"
                  />
                  <BsSearch className="bssearch" cursor="pointer" />
                </div>
              </form>
            </Formik>
          </Col>
          <Col style={{ cursor: "pointer" }}>
            Advanced Options
            <button type="button" className="btn" onClick={handleFilterOpening}>
              {!open ? <BsChevronDoubleDown /> : <BsChevronUp />}
            </button>
          </Col>
          <Col>
            <div className="d-flex flex-row-reverse">
              <div className="p-2">
                <div className="plus" style={{ cursor: "pointer" }}>
                  <BsFileEarmarkPlus className="bsplus" />
                  <div className="create">Create New</div>
                </div>
              </div>
              <div className="p-2" style={{ cursor: "pointer" }}>
                <div className="print">
                  <BsPrinter className="bsprint" />
                </div>
              </div>
              <div className="p-2" style={{ cursor: "pointer" }}>
                <div className="download">
                  <BsDownload className="bsdownload" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Collapse in={open}>
          <div className="card activee">
            <h5 className="status">Status</h5>
          </div>
          {/* <div className="form-select">
              <option value="active">Active</option>
              <option value="active">Inctive</option>
          </div> */}
        </Collapse>
      </Container>
    </div>
  );
};

export default Home;
