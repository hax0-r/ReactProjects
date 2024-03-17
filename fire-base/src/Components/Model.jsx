import React from 'react'
import { createPortal } from 'react-dom';
import { IoIosCloseCircle } from "react-icons/io";


export default function Model({ onClose, isOpen, children }) {
    return createPortal(
        <>
            {
                isOpen &&
                <>
                    <div className='grid place-items-center '>
                        <div onClick={onClose} className=' absolute h-screen w-screen backdrop-blur top-0 z-10'>
                        </div>
                        <div className='min-w-[80%] z-50 absolute top-20 m-auto rounded-md p-3 bg-drak-yellow min-h-[200px]'>
                            <IoIosCloseCircle onClick={onClose} className='size-6 opacity-80 cursor-pointer' />
                            {children}
                        </div>
                    </div>
                </>
            }
        </>,
        document.getElementById('modal-root')
    )
}
