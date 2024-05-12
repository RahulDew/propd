interface headingData {
  title: string;
  desc: string;
}

export default function Heading({ headingData }: { headingData: headingData }) {
  return (
    <div className="space-y-5 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">{headingData.title}</h2>
      <p className="text-base font-light m-auto md:w-8/12 text-secondary">
        {headingData.desc}
      </p>
    </div>
  );
}
