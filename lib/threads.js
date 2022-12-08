import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const threadPath = path.join(process.cwd(), 'contents', 'mythreads');

export function getAllThreadIds() {
    const fileNames = fs.readdirSync(threadPath);
    console.log(fileNames);
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }

  export async function getThreadData(id) {
    const fullPath = path.join(threadPath, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    console.log(fullPath);
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
  
    const contentHtml = processedContent.toString()

    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  }