import React, { Fragment, useState, useRef, useEffect} from 'react'
import ContactList from './ContactList'
import { v4 as uuid } from 'uuid'



export function ( ContactsApp ){
    const [contacts, setContacts] = useState( [] )

    const nameRef = useRef()

    useEffect(()=>{
        localStorage.setItem('contacts', JSON.stringify(contacts))
    })

    const addContact = ()=>{
        const name
    }

}