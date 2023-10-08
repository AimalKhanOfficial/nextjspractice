import Layout from "@/components/Layout";

export default function ErrPage() {
    return (
        <Layout>
            <p>Page Not found</p>
            <style jsx>
                {`
                    p {
                        color: red;
                    }
                `}
            </style>
        </Layout>
    );
}