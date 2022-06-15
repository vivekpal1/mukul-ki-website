import Responsibilities from '@/components/share/Responsibilities';
import SectionLayout from '@/components/share/SectionLayout';
import TimelineEvents from '@/components/share/TimelineEvent';

export default function AboutPage() {
  const experienceList = [
    {
      year: '2022',
      title: 'Started Learning',
      organization: 'Qunatum Mechenics',
    },
    {
      year: '2021 - 2022',
      title: 'Team Lead',
      organization: 'Psyche',
    },
    {
      year: '2014 - 2024',
      title: 'Gymnast',
      organization: 'Playing gymanistics for India',
      tags: {medal: 'Gymnastics'},
    },
    {
      year: '2014 - 2024',
      title: 'Student',
      organization: 'Motilal Nehru School of Sports, Sonipat',
    },
  ];

  const educationList = [
    {
      year: '2014 - 2024',
      title: 'High School',
      organization: 'Motilal Nehru School of Sports, Sonipat',
      tags: {GPA: xx},
    },
    {
      year: '2011 - 2014',
      title: 'Early School',
      organization: "St. Mary's School, Sambhal",
      tags: {GPA: 8.2,},
    },
  ];

  const values = [
    {
      title: 'Reading',
      description:
        'Library is a heaven for me. I used to spent a lot of time in reading books and learning new things there. I love reading.',
    },
  ];

  return (
    <>
      <SectionLayout id="about" title="Experience" className="" lottie="travel">
        <TimelineEvents eventList={experienceList} />
      </SectionLayout>
      <SectionLayout title="Education" lottie="education">
        <TimelineEvents eventList={educationList} />
      </SectionLayout>
      <SectionLayout title="Skills and Responsibilities" className="">
        <Responsibilities />
      </SectionLayout>
      <SectionLayout title="My Values">
        <div className="grid gap-y-8 gap-x-16 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="space-y-4">
              <div className="text-2xl">{v.title}</div>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
}
