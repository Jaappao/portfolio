import Image from 'next/image';
import path from 'path';
import { getAllThreadIds, getThreadData } from "../../lib/threads";

export default function ThreadPage ({ id, postData }) {
    const keywordsData = postData.keywords.map((keyword) => (
        <p>{keyword}</p>
    ));
    const filePath = path.join('/', 'mythreads', id, 'header.png')
    return (
        <div>
            <Image src={filePath} width='1000' height='500'  alt='landing'/>
            
            <p>This is {id} page.</p>
            <p>{postData.title}</p>
            <p>{postData.subtitle}</p>
            <p>{postData.term}</p>
            <p>{postData.date}</p>
            <div>{keywordsData}</div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllThreadIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getThreadData(params.id);
    return {
        props: {
            "id": params.id,
            "postData": postData,
        },
    };
}