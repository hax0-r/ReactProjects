import React from 'react'
import Model from './Model'
import { Field, Form, Formik } from 'formik'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../Config/Firebase'

export default function AddAndUpdate({ isOpen, onClose, isUpdate, contact }) {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts")
            // await addDoc(contactRef,{...contact})
            await addDoc(contactRef, contact)
            onClose()
        } catch (error) {
            console.log(error);
        }
    }
    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id)
            // await addDoc(contactRef,{...contact})
            await updateDoc(contactRef, contact)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Model isOpen={isOpen} onClose={onClose}>
                <Formik
                    initialValues={isUpdate ? {
                        name: contact.name,
                        email: contact.email,
                    }
                        : {
                            name: "",
                            email: "",
                        }}
                    onSubmit={(values) => {
                        console.log(values);
                        // addContact({name: values.name})
                        isUpdate ? updateContact(values, contact.id) : addContact(values)
                        onClose()
                    }}
                >
                    <Form>
                        <div className='p-5 flex gap-2 flex-col'>
                            <label htmlFor="name" className=''>Name</label>
                            <Field type='text' name='name' className="p-2 rounded-md" placeholder='Enter Name' />
                        </div>
                        <div className='p-5 pt-0 flex gap-2 flex-col'>
                            <label htmlFor="email" className=''>E-Mail</label>
                            <Field type='text' name='email' className="p-2 rounded-md" placeholder='Enter E-Mail' />
                        </div>
                        <button className='py-2 mb-3 text-white px-5 mt-3 bg-orange rounded-md ml-6'>{isUpdate ? "Update" : "Add"} Contact</button>

                    </Form>
                </Formik>
            </Model>
        </>
    )
}
