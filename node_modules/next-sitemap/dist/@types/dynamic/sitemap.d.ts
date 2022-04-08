import type { ISitemapField } from '../interface';
import type { GetServerSidePropsContext } from 'next';
export declare const getServerSideSitemap: (ctx: GetServerSidePropsContext, fields: ISitemapField[]) => Promise<{
    props: {};
}>;
