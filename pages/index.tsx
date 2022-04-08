import {GetStaticProps} from 'next';

import ExperienceSection from '@/components/experience/ExperienceSection';
import HeroSection from '@/components/hero/HeroSection';
import WorkSection from '@/components/work/WorkSection';
import {getAllFiles} from '@/lib/file';
import {FileMeta} from '@/models';

export default function IndexPage({work}: {work: FileMeta[]}) {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <WorkSection work={work} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const work = getAllFiles('work')
    .slice(0, 6)
    .map((f) => f.meta);

  return {props: {work}};
};
