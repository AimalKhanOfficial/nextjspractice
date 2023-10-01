import {useRouter} from 'next/router';
import allContacts from '../../datasources/allcontacts'
import Link from 'next/link'

export default function contactName () {
    const routerRef = useRouter();
    const contactId = routerRef.query.contactName;
    let details = allContacts.find(element => element.id == contactId)
    console.log(details?.name)
    return (
        <>
            <p>{contactId}</p>
            <p>{details?.name}</p>
            <p>{details?.desc}</p>
            <br/>
            <Link href='../contacts'>
                <button>Go back to Contacts Page</button>
            </Link>
        </>
    )
}