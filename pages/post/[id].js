import Link from 'next/link'
import Layout from '@/components/Layout'

export default function allContactsFun({ apiResults }) {
    return (
        <Layout>
            <Link href={'./contactDetails/' + apiResults.id}>
                <p>
                    <b>{apiResults.title} </b>
                    ({apiResults.body})
                </p>
            </Link>
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    console.log('>> params received are:', params.id, `https://jsonplaceholder.typicode.com/posts/${params?.id}`);
    const apiResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const apiResults = await apiResponse.json();
    console.log('>> apiResults', apiResults);
    return {
        props: {
            apiResults
        },
    };
}
