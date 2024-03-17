import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { IoSearchOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './Config/Firebase';
import { CgProfile } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import ContactCard from './Components/ContactCard';
import Model from './Components/Model';
import AddAndUpdate from './Components/AddAndUpdate';
import UseDisclouse from './Hooks/UseDisclouse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  const [contacts, setContacts] = useState([]);
  // const [isOpen, setIsOpen] = useState(false);

  // const onOpen = () => {
  //   setIsOpen(true)
  // }
  // const onClose = () => {
  //   setIsOpen(false)
  // }

  const { isOpen, onClose, onOpen } = UseDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts")

        // onSnapshot is just for real time data update yuo dont need to refresh page .

        onSnapshot(contactRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          });
          setContacts(contactList);
          return contactList;
        })


        // if you not using snapshot then you need to refresh page again and again when any change happens in db.
        // const querySnapshot = await getDocs(contactRef);

        // const contactList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // use upper or bottom whatever but behavier same ⬆️⬇️
        // const contactList = querySnapshot.docs.map((doc) => {
        //   return {
        //     id: doc.id,
        //     ...doc.data()
        //   }
        // });

        // setContacts(contactList);
      } catch (error) {
        console.log(error);
      }
    }
    getContacts()
  }, [])

  const filterContact = (e) => {
    const value = e.target.value;

    const contactRef = collection(db, "contacts")
    onSnapshot(contactRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      const filteredContact = contactList.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
      setContacts(filteredContact);
      return filteredContact;
    })
  }


  return (
    <>
      <div className='px-[4vw]'>
        <Navbar />
        <div className='flex justify-end items-center gap-2 mt-7 mb-10'>
          <div className="flex justify-end items-center relative">
            <input onChange={filterContact} type="text" placeholder='Search...' className='border pl-2 rounded-md p-1 border-black ' />
            <IoSearchOutline className='absolute right-2' />
          </div>
          <FaCirclePlus onClick={onOpen} className='size-7 cursor-pointer' />
        </div>
        <div>
          {
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          }
        </div>
      </div>
      <AddAndUpdate isOpen={isOpen} onClose={onClose} />
      <ToastContainer />
    </>
  )
}
