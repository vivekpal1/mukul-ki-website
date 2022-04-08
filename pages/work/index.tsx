import {GetStaticProps} from 'next';

import ArticleListPage from '@/components/share/ArticleListPage';
import {getMdxFilesStaticProps} from '@/lib/file';
import {FileMeta} from '@/models';

export default function workPage({files, topics}: {files: FileMeta[]; topics: string[]}) {
  return <ArticleListPage files={files} topics={topics} title="work" />;
}

export const getStaticProps: GetStaticProps = async () => {
  return getMdxFilesStaticProps('work');
};
