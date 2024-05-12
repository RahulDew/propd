import Image from "next/image";

interface btnData {
  buttonIcon: any;
  status: string;
  from: string;
}
export default function DownloadBtn({ btnData }: { btnData: btnData }) {
  return (
    <div className="w-48 md:w-56 flex justify-center gap-5 items-center bg-secondary shadow-2xl hover:shadow-blue-300 duration-300 text-white p-5 rounded-2xl cursor-pointer">
      <Image src={btnData.buttonIcon} alt={btnData.from} priority width={30} />
      <div className="flex flex-col justify-start items-start">
        <span className="text-xs">{btnData.status}</span>
        <p className="text-lg md:text-2xl tracking-tight">{btnData.from}</p>
      </div>
    </div>
  );
}
