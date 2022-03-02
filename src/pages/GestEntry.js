import React, { Component } from 'react';

class GestEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            title_error: "",
            first_name: "",
            first_name_error: "",
            last_name: "",
            last_name_error: "",
            title_spouse: "",
            title_spouse_error: "",
            full_name_sp: "",
            full_name_sp_error: "",
            designation: "",
            designation_error: "",
            address: "",
            address_error: "",
            mobile: "",
            mobile_error: "",
            office: "",
            office_error: "",
            home: "",
            home_error: "",
            email: "",
            email_error: "",
            reference: "",
            reference_error: ""
        }

    }
    InputHandler = (e) => {
        let filedName = e.target.name
        let temp;
        if(filedName === "mobile"){
            temp = e.target.value.replace(/[^\d]/g, '');
        }else{
            temp = e.target.value;
        }
        let Error = e.target.name + "_error"
        this.setState((prevState) => ({
            ...prevState,
            [filedName]: temp,
            [Error]: "",
        }));
    }
    handleRegister = (e) => {
        let { title, first_name, last_name, title_spouse, full_name_sp, designation, address, mobile, office, home, email, reference } = this.state
        let title_error = "", first_name_error = "", last_name_error = "", title_spouse_error = "", full_name_sp_error = "", designation_error = "",
            address_error = "", mobile_error = "", office_error = "", home_error = "", email_error = "", reference_error = "";
        if (title === "") {
            title_error = "Please enter valid title"
        }
        if (first_name === "") {
            first_name_error = "Please enter valid first name"
        }
        if (last_name === "") {
            last_name_error = "Please enter valid last name"
        }
        if (title_spouse === "") {
            title_spouse_error = "Please enter valid title spouse"
        }
        if (full_name_sp === "") {
            full_name_sp_error = "Please enter valid full name-sp."
        }
        if (designation === "") {
            designation_error = "Please enter valid designation"
        }
        if (address === "") {
            address_error = "Please enter valid address"
        }
        if (office === "") {
            office_error = "Please enter valid office"
        }
        if (home === "") {
            home_error = "Please enter valid home"
        }
        if (reference === "") {
            reference_error = "Please enter valid reference"
        }
        if (email === "") {
            email_error = "Please enter valid email"
        } else {
            const expression =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (!expression.test(email)) {
                email_error = "Please enter valid email"
            }
        }
        let phoneError = false;
        let first_char = mobile.charAt(0);
        let msg = '';
        let phoneFormatMatch = false;
        if (first_char === "6" || first_char === "7" || first_char === "8" || first_char === "9") {
            phoneFormatMatch = true;
        }
        if (!phoneFormatMatch) {

            phoneError = true;
            msg = 'Please enter correct phone number starting from 6/7/8/9';
        }
        if (mobile === "" || mobile.length !== 10) {

            phoneError = true;
            msg = 'Please enter your 10 digit phone number to proceed!';
        }
        if (phoneError) {
            mobile_error = msg
        }
        if (title_error !== "" || first_name_error !== "" || last_name_error !== "" || title_spouse_error !== "" || full_name_sp_error !== "" || designation_error !== "" ||
            address_error !== "" || mobile_error !== "" || office_error !== "" || home_error !== "" || email_error !== "" || reference_error !== "") {
            this.setState({
                title_error, first_name_error, last_name_error, title_spouse_error, full_name_sp_error, designation_error,
                address_error, mobile_error, office_error, home_error, email_error, reference_error
            })
        }
    }
    render() {
        const { title_error, first_name_error, last_name_error, title_spouse_error, full_name_sp_error, designation_error,
            address_error, mobile_error, office_error, home_error, email_error, reference_error } = this.state
        return (
            <div className='gest-entry-from-wrapper'>
                <h1 className='title'>Guest Entry</h1>
                <div className='form-wrapper'>
                <div className='form-control'>
                        <label>Title</label>
                        <input type={'text'} name="title" className={title_error?'error':""} placeholder='Enter title' onChange={(e) => { this.InputHandler(e) }}
                        value={this.state.title}
                        />
                        {
                            title_error && (<p className='titleError'>{title_error}</p>)
                        }
                    </div>
                    <div className='form-control'>
                        <label>First Name</label>
                        <input type={'text'} name="first_name" value={this.state.first_name} placeholder='Enter first name' className={first_name_error?'error':""} onChange={(e) => { this.InputHandler(e) }}
                        />
                        {
                            first_name_error && (<p className='titleError'>{first_name_error}</p>)
                        }
                    </div>
                    <div className='form-control'>
                        <label>Last Name</label>
                        <input type={'text'} name="last_name" value={this.state.last_name} className={last_name_error?'error':""} placeholder='Enter last name' onChange={(e) => { this.InputHandler(e) }}
                        />
                        {
                            last_name_error && (<p className='titleError'>{last_name_error}</p>)
                        }
                    </div>
                    <div className='form-control'>
                        <label>Title(Spouse)</label>
                        <input type={'text'} name="title_spouse" value={this.state.title_spouse}  placeholder='Enter title(spouse)' className={title_spouse_error?'error':""} onChange={(e) => { this.InputHandler(e) }}
                        />
                        {
                            title_spouse_error && (<p className='titleError'>{title_spouse_error}</p>)
                        }
                    </div>
                    <div className='form-control'>
                        <label>Full Name-Sp.</label>
                        <input type={'text'} name="full_name_sp" value={this.state.full_name_sp} placeholder='Enter full name-sp.'  className={full_name_sp_error?'error':""} onChange={(e) => { this.InputHandler(e) }}
                        />
                        {
                            full_name_sp_error && (<p className='titleError'>{full_name_sp_error}</p>)
                        }
                    </div>
                    <div className='form-control'>
                        <label>Designation</label>
                        <input type={'text'} name="designation" value={this.state.designation} placeholder='Enter designation' className={designation_error?'error':""} onChange={(e) => { this.InputHandler(e) }}
                        />
                        {
                            designation_error && (<p className='titleError'>{designation_error}</p>)
                        }
                    </div>   <div className='form-control'>
                        <label>Address</label>
                        <input type={'text'} name="address" value={this.state.address} placeholder='Enter address'  className={address_error?'error':""} onChange={(e) => { this.InputHandler(e) }}
                        />
                        {
                            address_error && (<p className='titleError'>{address_error}</p>)
                        }
                    </div>
                    <div className='form-control'>
                        <label>Mobile</label>
                        <input type={'text'} name="mobile" value={this.state.mobile} maxLength={10} placeholder='Enter mobile' className={mobile_error?'error':""} onChange={(e) => { this.InputHandler(e) }}
                        />
                        {
                            mobile_error && (<p className='titleError'>{mobile_error}</p>)
                        }
                    </div>
                    <div className='form-control'>
                        <label>Office</label>
                        <input type={'text'} name="office" value={this.state.office} placeholder='Enter office' className={office_error?'error':""} onChange={(e) => { this.InputHandler(e) }}
                        />
                        {
                            office_error && (<p className='titleError'>{office_error}</p>)
                        }
                    </div>
                    <div className='form-control'>
                        <label>Home</label>
                        <input type={'text'} name="home" value={this.state.home} placeholder='Enter home' className={home_error?'error':""} onChange={(e) => { this.InputHandler(e) }}
                        />
                        {
                            home_error && (<p className='titleError'>{home_error}</p>)
                        }
                    </div>
                    <div className='form-control'>
                        <label>Email</label>
                        <input type={'text'} name="email" value={this.state.email} placeholder='Enter email' className={email_error?'error':""} onChange={(e) => { this.InputHandler(e) }}
                        />
                        {
                            email_error && (<p className='titleError'>{email_error}</p>)
                        }
                    </div>
                    <div className='form-control'>
                        <label>Reference</label>
                        <input type={'text'} name="reference" value={this.state.reference} placeholder='Enter reference' className={reference_error?'error':""} onChange={(e) => { this.InputHandler(e) }}
                        />
                        {
                            reference_error && (<p className='titleError'>{reference_error}</p>)
                        }
                    </div >
                    <div className='form-control'>

                        <button onClick={(e) => {
                            this.handleRegister(e);
                        }} className="submit-form">Submit</button>
                    </div>
               

                </div>
                            </div>
        );
    }
}

export default GestEntry;