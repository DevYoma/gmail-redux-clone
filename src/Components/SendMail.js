import React from 'react'
import '../Styles/SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';

const SendMail = () => {
    const dispatch = useDispatch();
    
    const { register, handleSubmit, watch, formState: {errors} } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    
    return ( 
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon 
                    onClick={() => dispatch(closeSendMessage())}
                    className="sendMail__close"
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="to" 
                    type="email"
                    placeholder="To" 
                    {...register("to", { required: true })}
                />
                {errors.to && <p className="sendMail__error">To is Required</p>}

                <input 
                    name="subject" 
                    placeholder="Subject" 
                    type="text"
                    {...register('subject', {required: true})}
                />
                {errors.subject && <p className="sendMail__error">Subject is Required</p>}

                <input 
                    name="message"
                    placeholder="Message..."
                    type="text"
                    className="sendMail__message"
                    {...register('message', { required: true })}
                    // ref={register({ required: true })}
                />
                {errors.message && <p className="sendMail__error">Message is Required</p>}


                <div className="sendMail__options">
                    <Button className="sendMail__send" type="submit">Send</Button>
                </div>
            </form>
        </div>
     );
}
 
export default SendMail;