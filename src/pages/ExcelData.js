import React, { Component } from 'react';
import * as XLSX from "xlsx";
import UrlSet from "../components/UrlSet";
class ExcelData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            excelData: [],
            checkExcelFormat: false,
            showErrorMessageTitle: false
        }
    }
    // onchange handler for file 
    onChange = (e) => {
        const [file] = e.target.files;
        const reader = new FileReader();
        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: "binary" });
            const wsname = wb.SheetNames[0];
            let ws = wb.Sheets[wsname];
            // convert to array
            const dataParse = XLSX.utils.sheet_to_json(ws, {
                raw: false,
                defval: '-', // null value replace with -
                header: 1
            });
            let excelArray = Array.from(dataParse, item => typeof item === 'undefined' ? 0 : item);
            this.setState({ excelData: excelArray });
            let sampleUploadedExcelFormat = ["Sr",
                "Title",
                "First Name",
                "Last Name",
                "Title(Spouse)",
                "Full Name-Sp.",
                "Designation",
                "Address",
                "Mobile",
                "Office",
                "Home",
                "Email",
                "Reference"]
            if (excelArray.length > 0) {
                excelArray[0].map((item, index) => {
                    if (index <= 12) {
                        if (!sampleUploadedExcelFormat.includes(item)) {
                            this.setState({ checkExcelFormat: true })
                        }
                    }


                });
                excelArray.map((item, key) => {
                    let titleError = ""
                    let firstNameError = ""
                    let MobileError = ""
                    let EmailError = ""
                    let dataKey = key
                    let error = false
                    item?.map((cv, i) => {
                        if (dataKey > 0) {
                            if (i === 1) {

                                if (cv === "-") {
                                    console.log("object");
                                    titleError = "Title is missing"
                                    error = true
                                }
                            }
                            if (i === 2) {
                                if (cv === "-") {
                                    firstNameError = "First name is missing"
                                    error = true
                                }
                            }
                            if (i === 8) {
                                const regexExp = /^[6-9]\d{9}$/gi;

                                if (!regexExp.test(cv)) {
                                    MobileError = "Mobile number is not valid"
                                    error = true
                                }
                            }
                            if (i === 11) {
                                let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                if (!mailformat.test(cv)) {
                                    EmailError = "Email is not valid"
                                    error = true
                                }
                            }

                        }

                    })
                    this.setState({ showErrorMessageTitle: true })
                })
            }
        };
        reader.readAsBinaryString(file);
    };
    render() {
        return (<>
            <div className='file-selector-wrapper'>
                <div className='gest-entry'>
                    <UrlSet href="/guest-entry">Guest Entry</UrlSet>
                </div>
                <input type={'file'} onChange={(e) => this.onChange(e)} className="excel-selector" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
            </div>

            {

                    this.state.checkExcelFormat ? <><p className='excel-format-error'>Excel file format is not valid. please download sample file</p>
                    <div className='download-excel'>
                                    <a className='btn' href='https://docs.google.com/spreadsheets/d/1C6_zigt6fmX_OVRpKh_0kSX_n_yEuJ3Qkr_FVkqSFTI/export?format=xlsx' download={'download'}>Download sample Excel</a>
                                </div>
                </>:<div className='excel-table-wrapper'>


                    {
                        this.state.showErrorMessageTitle && (<p className='error-message-title'>Oops! There are a few errors, please check the error column and resolve them</p>)
                    }
                    {
                        this.state.excelData.length > 0 && (
                            <>
                                <div className='download-excel'>
                                    <a className='btn' href='https://docs.google.com/spreadsheets/d/1C6_zigt6fmX_OVRpKh_0kSX_n_yEuJ3Qkr_FVkqSFTI/export?format=xlsx' download={'download'}>Download sample Excel</a>
                                </div>
                                <table>

                                    {
                                        this.state.excelData.map((item, key) => {
                                            item[item.length] = "Error";
                                            let titleError = ""
                                            let firstNameError = ""
                                            let MobileError = ""
                                            let EmailError = ""
                                            let dataKey = key
                                            let error = false


                                            return <tr key={key}>

                                                {
                                                    item?.map((cv, i) => {
                                                        if (i <= 13) {
                                                            if (dataKey > 0) {
                                                                if (i <= 13) {

                                                                }
                                                                if (i === 1) {

                                                                    if (cv === "-") {
                                                                        console.log("object");
                                                                        titleError = "Title is missing"
                                                                        error = true
                                                                    }
                                                                }
                                                                if (i === 2) {
                                                                    if (cv === "-") {
                                                                        firstNameError = "First name is missing"
                                                                        error = true
                                                                    }
                                                                }
                                                                if (i === 8) {
                                                                    const regexExp = /^[6-9]\d{9}$/gi;

                                                                    if (!regexExp.test(cv)) {
                                                                        MobileError = "Mobile number is not valid"
                                                                        error = true
                                                                    }
                                                                }
                                                                if (i === 11) {
                                                                    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                                                    if (!mailformat.test(cv)) {
                                                                        EmailError = "Email is not valid"
                                                                        error = true
                                                                    }
                                                                }
                                                            }
                                                            else {
                                                                titleError = "Error"
                                                            }
                                                            return <td key={i} className={error && i === 13 ? `errror-message` : ""}>{i === 13 ? `${titleError}  ${firstNameError}   ${MobileError}  ${EmailError}` : cv}</td>
                                                        }

                                                    })
                                                }
                                            </tr>


                                        })
                                    }
                                </table>
                            </>
                        )
                    }
                    {
                        this.state.excelData.length > 0 && (<p> Total : {this.state.excelData.length - 1} records</p>)
                    }
                </div>
            }


        </>
        );
    }
}

export default ExcelData;