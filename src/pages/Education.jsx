import { CardSertificate } from '../components/CardSertificate';
import {
  GoLangIcon,
  JavaScriptIcon,
  PythonIcon,
  ReactIcon,
  TensorFlowIcon,
} from '../path/path';

const certifications = [
  {
    title: 'Machine Learning',
    provider: 'Google Bangkit',
    year: '2023',
    link: 'https://drive.google.com/file/d/1gEXF09WyMWG8XB0LNDR_KG_cY6b3mOHm/view?usp=drive_link',
    bg: 'https://bxehantrfbyenzvyrfoc.supabase.co/storage/v1/object/public/merge-bucket//tf2.png',
    icon: (
      <div className="flex flex-row pb-2 gap-1">
        <PythonIcon />
        <TensorFlowIcon />
      </div>
    ),
  },
  {
    title: 'React Native',
    provider: 'Enigma Camp',
    year: '2025',
    link: 'https://drive.google.com/file/d/1mJufu9DDZe1NRc0IXvhbd5PJc758vT7T/view?usp=sharing',
    bg: 'https://bxehantrfbyenzvyrfoc.supabase.co/storage/v1/object/public/merge-bucket//bg-react.png',
    icon: (
      <div className="flex flex-row pb-2 gap-1">
        <JavaScriptIcon />
        <ReactIcon size={36} />
      </div>
    ),
  },
  {
    title: 'Backend Golang',
    provider: 'Alterra Academy',
    year: '2022',
    link: 'https://drive.google.com/file/d/1vVfPkhCXN3N4SZaeGIa9ljb8bgaMjfLF/view?usp=drive_link',
    bg: 'https://bxehantrfbyenzvyrfoc.supabase.co/storage/v1/object/public/merge-bucket//bg-go.png',
    icon: (
      <div className="flex flex-row pb-2 gap-1">
        <GoLangIcon size={36} />
      </div>
    ),
  },
];

export const Education = ({ ref }) => {
  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-800 mb-4 text-center">
          Certification
        </h1>
        <p className="text-teal-800 sm:text-xl text-md max-w-2xl mx-auto text-center pb-20">
          Berikut adalah sertifikat yang saya peroleh dari program pemerintah
          maupun bootcamp secara mandiri.
        </p>

        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {certifications.map((cert, index) => (
            <CardSertificate
              key={index}
              title={cert.title}
              provider={cert.provider}
              year={cert.year}
              link={cert.link}
              icon={cert.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
