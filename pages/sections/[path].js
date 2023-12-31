import allcontacts from '@/datasources/allcontacts';
import Link from 'next/link'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router';
import styles from '@/styles/Sections.Path.module.css'

export default function allContactsFun({ apiResults }) {
    const router = useRouter();
    return (
        <Layout>
            <br />
            {
                apiResults?.map(element => {
                    return (
                        <Link href={'./contactDetails/' + element.id}>
                            <p className={styles.redPs}>
                                <b>{element.name} </b>
                                ({element.email})
                            </p>
                        </Link>
                    )
                })
            }
            <button type="button" onClick={() => router.back()}>
                Click here to go back
            </button>
        </Layout>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { path: 'contacts' } },
            { params: { path: 'sample-option' } }
        ],
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    let apiResults = [
        {
            id: 8987,
            name: 'Sample Name from NO API CALL',
            email: 'Sample EMAIL from NO API CALL'
        }
    ];
    switch (params.path) {
        case 'contacts':
            const apiResponse = await fetch('https://jsonplaceholder.typicode.com/users');
            apiResults = await apiResponse.json();
            return {
                props: {
                    apiResults
                },
            };
        case 'sample-option':
            return {
                props: {
                    apiResults
                },
            };
        default:
            return {
                props: {
                    apiResults
                },
            };
    }


}