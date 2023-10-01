import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';

export default function pageName() {
    const router = useRouter();
    const { pageName } = router.query;
    return (
        <>
            <div>Hello World - this is the new {pageName} page</div>
            <Link
                href='./'
                className={styles.card}
                rel="noopener noreferrer"
            >
                <button>
                    Go Back
                </button>
            </Link>
        </>
    )
}