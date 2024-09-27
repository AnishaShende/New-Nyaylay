import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters
import CaseVisualization from "./CaseVisualization";

const sampleCaseData = [
    {
      case_id: "CRL.O.P.No.25797 of 2014",
      case_name: "Saravanan Balagurusamy vs. The State",
      court: "Madras High Court",
      judges_involved: " G. Chandrasekharan",
      sections_clauses:
        "Sections 498(A), 406, 420, 323 r/w 34 IPC, Section 188 Cr.P.C.",
    },
    {
      case_id: "Crl A(MD) Nos. 516 of 2006, 577 and 578 of 2006",
      case_name: "R. Seethambaram vs. State",
      court: "Madras High Court",
      judges_involved: "P.N. Prakash",
      sections_clauses:
        "Sections 120-B r/w 197 r/w 193, 465, 468, 471 r/w 468 IPC; Sections 197 r/w 193 IPC; Section 420 IPC; Section 13(2) r/w 13(1)(d) of the Prevention of Corruption Act, 1988",
    },
    {
      case_id: "M.C.O.P. No. 979 of 1989",
      case_name: "Kothai And Anr. vs Oriental Insurance Co. Ltd. And Ors.",
      court: "Madras High Court",
      judges_involved: "A. Subbulakshmy, J.",
      sections_clauses: "Motor Vehicles Act, 1988 (Sections 147(5) and 149 (1))",
    },
    {
      case_id: " C.M.A. No. 2771 of 2016 and C.M.P. No. 20082 of 2016",
      case_name:
        " M/s. Bajaj Allianz General Insurance Company Limited vs. Tamilarasan and Others",
      court: "Madras High Court",
      judges_involved: "Dr. Justice G. Jayachandran",
      sections_clauses: "Section 173 of the Motor Vehicles Act",
    },
    {
      case_id:
        "C.R.P(NPD)Nos.199 to 203 of 2006 & C.M.P.Nos.1573 to 1577 of 2006",
      case_name: "M/S.United India Insurance Company Ltd vs Balakrishnan",
      court: "Madras High Court",
      judges_involved: "Ms.Justice P.T.ASHA",
      sections_clauses: "Article 227 of the Constitution of India",
    },
    {
      case_id: "C.M.A.Nos.373 & 374 of 2015 and Cros.Obj.No.66 of 2015",
      case_name: "The New India Assurance Company Ltd. vs R. Manoj Kumar",
      court: "Madras High Court",
      judges_involved: "V.M. Velumani",
      sections_clauses:
        "Section 173 of Motor Vehicles Act, 1988, Order XXXXI Rule 22 of C.P.C.",
    },
    {
      case_id: " C.M.A.No.421 of 2009",
      case_name: "United India Insurance Co.Ltd vs K.Kandan",
      court: "Madras High Court",
      judges_involved: "T. Raja",
      sections_clauses:
        " Section 173 of the Motor Vehicles Act, 1988, Sections 120-B, 465, 471 read with 34, 465 read with 420, 471 read with 465, 468 read with 109 & 167 of IPC",
    },
    {
      case_id: "W.P.No.9760 of 2015",
      case_name: "A.Akilan vs The Central Office Claims",
      court: "Madras High Court",
      judges_involved: "V.Bharathidasan, J",
      sections_clauses:
        "Article 226 of the Constitution of India, Section 45 of 'The Insurance Act, 1938'",
    },
    {
      case_id: "Crl.O.P.No.20121 of 2023",
      case_name: "... vs Dineshchand Surana",
      court: "Madras High Court",
      judges_involved: "G. Chandrasekharan",
      sections_clauses:
        "Section 447 of the Indian Companies Act, 2013, Section 212(6) of the Indian Companies Act, 2013, Section 37 of the NDPS Act",
    },
    {
      case_id: "C.S.No.632 of 2017",
      case_name: "QDSeatamon Designs Private Limited vs P.Suresh",
      court: "Madras High Court",
      judges_involved: "M.Sundar",
      sections_clauses:
        "Order XIV Rule 8 of the Madras High Court Original Side Rules, Section 151 of the Civil Procedure Code, Order IV Rule 1 of OS Rules, Order VII Rule 1 of the Code of Civil Procedure, 1908, Section 60 of the Copyright Act, 1957, Sections 51 and 55 of the Copyright Act, 1957, Article 141 of the Constitution of India",
    },
  ];

  const ParentComponent = () => {
    const { caseId } = useParams(); // Retrieve the caseId from the URL parameters
  
    return (
      <div>
        <h1>Case Visualization for Case ID: {caseId}</h1>
        {/* Pass the caseId and sample case data to CaseVisualization */}
        <CaseVisualization caseId={caseId} caseData={sampleCaseData} />
      </div>
    );
  };
  
  export default ParentComponent;
