import allContacts from '../datasources/allcontacts'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function allContactsFun() {
    return (
        <>
            <Layout>
                <p>Total Contacts are: {allContacts.length}</p>
                <br />
                {
                    allContacts.map(element => {
                        return <Link href={'./contactDetails/' + element.id}><p>{element.name}</p> </Link>
                    })
                }
                <br />
                <Link href='./'>
                    <button>Go back to Home Page</button>
                </Link>
            </Layout>
        </>
    )
}