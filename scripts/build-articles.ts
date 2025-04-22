// scripts/build-articles.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface ArticleMeta {
    title: string;
    date: string;
    slug: string;
}

const articlesDir = path.join(process.cwd(), 'src/markdown/articles');
const outputFile = path.join(process.cwd(), 'public/articles.json');

const articles: ArticleMeta[] = fs.readdirSync(articlesDir)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((fileName, index) => {
        const slug = fileName.replace(/\.mdx?$/, '');
        const fullPath = path.join(articlesDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            id: index,
            slug,
            ...data,
            title: data.title ?? slug,
            date: data.date ?? '1970-01-01',
        };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

fs.writeFileSync(outputFile, JSON.stringify(articles, null, 2));

console.log(`✅ Generated ${articles.length} articles to ${outputFile}`);
