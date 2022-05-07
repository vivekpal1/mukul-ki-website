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
      year: '20014 - 2024',
      title: 'Gymnast',
      organization: 'Playing gymanistics for India',
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
      tags: {GPA: 1.8},
    },
    {
      year: '20011 - 2014',
      title: 'Early School',
      organization: "St. Mary's School, Sambhal",
      tags: {GPA: 0.8, medal: '1st Prize for Worst Student'},
    },
  ];

  const values = [
    {
      title: 'Shrivalli',
      description: 'Nazrein Milte Hi Nazron Se Nazron Ko Churaye Kaisi Yeh Haya TeriJo Tu Palkon Ko Jhukaye',
    },
    {
      title: 'Saami Saami',
      description:
        'Nuv ammi ammi antante Nee pallannaipoy nattundira Saami na saami Ninnu saami saami antante Na penimiti lekka sakkagundira Saami na saami',
    },
    {
      title: 'Oo Anta Mava',
      description:
        'Koka koka koka kadithe Kora koramantu choosthaaru Potti potti gowney vesthey  Patti patti choostharu Koka kaadu gownu kaadu Kattulona yemundhi Mee kallallone anthaa undhi Mee maga buddhe vankara buddhi',
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
      <SectionLayout title="Responsibilities" className="">
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
