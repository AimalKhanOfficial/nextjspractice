import Layout from "@/components/Layout";
import Image from "next/image";
import NotFoundImage from '@/public/not-found.gif'
export default function ErrPage() {
    return (
        <Layout>
            <p>Page Not found</p>
            <div className={'imageStyle'} ><Image src={NotFoundImage} alt="NotFound"/></div>
            <style jsx>
                {`
                    .imageStyle {
                        margin-left: auto;
                        margin-right: auto;
                        width: 20%;
                    }
                    p {
                        color: red;
                        display: none;
                    }
                `}
            </style>
        </Layout>
    );
}