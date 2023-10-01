import allContacts from '../datasources/allcontacts'
import Link from 'next/link'

export default function allContactsFun () {
    return (
        <>
            <p>Total Contacts are: {allContacts.length}</p>
            <br/>
            {
                allContacts.map(element => {
                    return <Link href={'./contactDetails/'+element.id}><p>{element.name}</p> </Link>
                })
            }   
            <br/>
            <Link href='./'>
                <button>Go back to Home Page</button>
            </Link>
        </>
    )
}