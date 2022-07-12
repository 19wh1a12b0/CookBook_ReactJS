import emailjs from 'emailjs-com';
import * as React from 'react';
import './App.css';
const Mailer = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_q2wv19t', 'template_c9hkxpv', e.target,'oMxyJ0QnDkKLJ8AlS'
        ).then(res=>{
            console.log(res);
        });
    }
    return (
        <div className="forms">
            <h1 className="contact">Contact-Form: </h1>
            <form className="row" onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name = 'name' placeholder="enter your name" className="names"/><br/>
                <label>Email</label>
                <input type="text" name='user_email' placeholder="enter your mail id" className="mail"/><br/>
                <label className='message'>Message</label>
                <textarea name='message' rows='4' className="msg" placeholder='enter the message'/><br/>
                <input type='submit' value='Send' style={{marginTop:'30px', marginBottom:'20px'}} className="send"
                /><br/>
            </form>
        </div>
    );
}


export default Mailer;