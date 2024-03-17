import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { MdDelete, MdEdit } from 'react-icons/md'
import { db } from '../Config/Firebase'
import AddAndUpdate from './AddAndUpdate'
import UseDisclouse from '../Hooks/UseDisclouse'
import { toast } from 'react-toastify'

export default function ContactCard({ contact }) {
    const { isOpen, onClose, onOpen } = UseDisclouse();
    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contacts", id))
            toast.success("Deleted Successful");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div key={contact.id} className='flex p-4 gap-5 mt-3 justify-between rounded-md items-center bg-yellow'>
                <div className='flex justify-center items-center gap-5'>
                    <CgProfile className='text-orange size-9' />
                    <div>
                        <h2 className='font-medium'>{contact.name}</h2>
                        <p className='text-sm opacity-70'>{contact.email}</p>
                    </div>
                </div>
                <div className='pr-5 flex gap-3'>
                    <MdEdit onClick={onOpen}  className='size-6 cursor-pointer' />
                    <MdDelete onClick={() => deleteContact(contact.id)} className=' cursor-pointer size-6 text-orange' />
                </div>
            </div>
            <AddAndUpdate contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
        </>
    )
}
