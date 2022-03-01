import React, { Component } from "react";
import Modal from "../../components/Modal";
import trash from "../../components/download.png";
class TodaApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            titleError: "",
            projectObjective: "",
            projectObjectiveError: "",
            from: "",
            fromError: "",
            to: "",
            toError: "",
            tableData: [],
            modal: false,
            deleteRowId: null
        }
    }
    InputHandler = (e) => {
        //input onchange handler for change input value 
        let filedName = e.target.name
        let temp;
        temp = e.target.value
        let Error = e.target.name + "Error"
        this.setState((prevState) => ({
            ...prevState,
            [filedName]: temp,
            [Error]: "",
        }));
    }
    handleRegister = () => {
        // handle submit button 
        const { title, projectObjective, from, to, tableData } = this.state;
        // error variables
        let titleError = "", projectObjectiveError = "", fromError = "", toError = "";
        // validate form data
        if (title === "") {
            titleError = "Please enter title!"
        }
        if (projectObjective === "") {
            projectObjectiveError = "Please enter project objective!"
        }
        if (from === "") {
            fromError = "Please enter from month/year!"
        }
        if (to === "") {
            toError = "Please enter  month/year!"
        }
        if (titleError !== '' || projectObjectiveError !== '' || fromError !== "" || toError !== "") {
            this.setState({ titleError, projectObjectiveError, fromError, toError })
        } else {
            // store table data
            tableData.push({ title, projectObjective, from, to })
            this.setState({ tableData: [...tableData], title: "", projectObjective: "", from: "", to: "" });
        }
    }
    //close modal for delete table row
    modalClose() {
        this.setState({ modal: false  }) 
    }
    // table row delete action
    deleteRowData=()=>{
        const items = this.state.tableData.filter(cv => cv!== this.state.deleteRowId);
        this.setState({ tableData: items,modal: false  })
    }
     //open modal for delete table row
    modalOpen = (item) => {
        this.setState({ modal: true, deleteRowId: item });
    }
    render() {
        const { title, titleError, projectObjective, projectObjectiveError, from, fromError, to, toError, tableData } = this.state;
        console.log(tableData);
        return (
            <div className="todo-app-wrapper">
                <Modal show={this.state.modal} handleClose={e => this.modalClose(e)} deleteRowData={e =>this.deleteRowData(e)}>
                    <h2>Are you sure to delete?</h2>
                </Modal>
                <div className='container'>
                    <h2 className="title-wrapper">Project</h2>
                    <div className='flex-view-xs space'>
                        <div className='col-sm-4 col-xs-12'>
                            <div className="form-input">
                                <input type="text" placeholder="Title" name="title" value={title} onChange={this.InputHandler} /><br />
                                {titleError && <p className="error-message">{titleError}</p>}
                            </div>
                        </div>
                        <div className='col-sm-8 col-xs-12'>
                            <div className="form-input">
                                <input type="text" placeholder="Project Objective" name="projectObjective" value={projectObjective} onChange={this.InputHandler} /><br />
                                {projectObjectiveError && <p className="error-message">{projectObjectiveError}</p>}
                            </div>
                        </div>
                        <div className='col-sm-4 col-xs-12'>
                            <div className="form-input">
                                <input type="text" placeholder="Form  month/year" name="from" value={from} onChange={this.InputHandler} /><br />
                                {fromError && <p className="error-message">{fromError}</p>}
                            </div>
                        </div>
                        <div className='col-sm-4 col-xs-12'>
                            <div className="form-input">
                                <input type="text" placeholder="To  month/year" name="to" value={to} onChange={this.InputHandler} /><br />
                                {toError && <p className="error-message">{toError}</p>}
                            </div>
                        </div>
                        <div className='col-sm-4 col-xs-12'>
                            <button className="btn" onClick={(e) => { this.handleRegister(e); }}>Add</button>
                        </div>
                    </div>
                    {
                        tableData.length > 0 && <div className="displat-data">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Project Objective</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tableData?.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{item.title}</td>
                                                <td>{item.projectObjective}</td>
                                                <td>{item.from}</td>
                                                <td>{item.to}</td>
                                                <td className="delete-data" onClick={() => this.modalOpen(item)}><img src={trash} alt="delete icon"/></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    }


                </div>
            </div>
        );
    }
}

export default TodaApp;
