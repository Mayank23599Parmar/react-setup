import React, { Component } from 'react';
import * as XLSX from "xlsx";
class ExcelData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            excelData: []
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
            this.setState({ excelData: excelArray })
        };
        reader.readAsBinaryString(file);
    };
    render() {
        return (<>
            <div className='file-selector-wrapper'>
                <input type={'file'} onChange={(e) => this.onChange(e)} className="excel-selector" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
            </div>
            {
                this.state.excelData.length > 0 && (
                    <table>
                        {
                            this.state.excelData.map((item, key) => {
                                item[item.length] = "Error";
                                let titleError = ""
                                let firstNameError = ""
                                let MobileError = ""
                                let EmailError = ""
                                let dataKey = key
                                return <tr key={key}>
                                    
                                    {
                                        item?.map((cv, i) => {
                                            if (dataKey > 0) {
                                                if (i === 1) {

                                                    if (cv === "-") {
                                                        console.log("object");
                                                        titleError = "Title is missing"
                                                        console.log(titleError);
                                                    }
                                                }
                                                if (i === 2) {
                                                    if (cv === "-") {
                                                        firstNameError = "First name is missing"
                                                    }
                                                }
                                                if (i === 8) {
                                                    const regexExp = /^[6-9]\d{9}$/gi;

                                                    if (!regexExp.test(cv)) {
                                                        MobileError = "Mobile number is not valid"
                                                    }
                                                }
                                                if (i === 11) {
                                                    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                                    if (!mailformat.test(cv)) {
                                                        EmailError = "Email is not valid"
                                                    }
                                                }
                                            }
                                            else{
                                                titleError="Error" 
                                            }
                                            return <td key={i}>{i === 13 ? `${titleError}  ${firstNameError}   ${MobileError}  ${EmailError}` : cv}</td>
                                        })
                                    }
                                </tr>
                            })
                        }
                    </table>
                )
            }
        </>
        );
    }
}

export default ExcelData;