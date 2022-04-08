import type {GetStaticPaths, GetStaticProps} from 'next';

import ArticlePage from '@/components/share/ArticlePage';
import {getMdxFileStaticPaths, getMdxFileStaticProps} from '@/lib/file';
import {MDXFile} from '@/models';

export default function workPage({file}: {file: MDXFile}) {
  return <ArticlePage file={file} />;
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {slug} = params as {slug: string};
  return getMdxFileStaticProps('work', slug);
};

export const getStaticPaths: GetStaticPaths = async () => {
  return getMdxFileStaticPaths('work');
};
