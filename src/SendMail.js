import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import './SendMail.css'
import { closeSendMessage } from './features/mailSlice'
import { db } from './firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

function SendMail() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch()

    const onSubmit1 = (formData) => {
        const colRef = collection(db, "emails")
        addDoc(colRef, {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: serverTimestamp()
        })

        dispatch(closeSendMessage())
    }


    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
            </div>
            <form onSubmit={handleSubmit(onSubmit1)}>

                <input name='to' placeholder="To" type="email" {...register("to", { required: true })} />

                {errors.to && <p className="sendMail__error">To is required</p>}
                <input name="subject" type="text" placeholder="Subject" {...register("subject", { required: true })} />
                {errors.subject && <p className="sendMail__error">Subject is required</p>}
                <input name="message" type="text" className="sendMail__message" {...register("message", { required: true })} />
                {errors.message && <p className="sendMail__error">Message is required</p>}

                <div className="sendMail__options">
                    <Button className="sendMail__send" variant="contained" type="submit">Send</Button>
                </div>

            </form>
        </div>
    )
}

export default SendMail
