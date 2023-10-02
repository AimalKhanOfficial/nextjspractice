import allContacts from '../datasources/allcontacts'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function allContactsFun({ apiResults }) {
    return (
        <Layout>
            <br />
            {
                apiResults.map(element => {
                    return (
                        <Link href={'./contactDetails/' + element.id}>
                            <p>
                                <b>{element.name} </b> 
                                ({element.email})
                            </p>
                        </Link>
                    )
                })
            }
        </Layout>
    )
}

export async function getStaticProps() {
    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const apiResults = await apiResponse.json();
    return {
        props: {
            apiResults
        },
    };
}