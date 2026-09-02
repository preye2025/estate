import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col  p-10 bg-[#FFF8DB] gap-8">
      <div className="flex flex-row items-center justify-between gap-15">
        <p className="text-[#EE7421] text-xl font-bold">EstateEaze</p>
        <Link href="/createAccount" className="bg-[#EE7421] rounded-2xl text-white p-2 text-[14px]">Create Account</Link>
      </div>
      <div className="flex flex-col gap-3">
        <p>Everything at your fingertips</p>
        <Image src="/line.png" alt="hero" width={250} height={10} />
        <p className="text-[#EE7421] text-3xl font-bold">Living with ease at the touch of a button...</p>
      </div>
      <div className="flex flex-col gap-10 items-center">
        <Image src="/buildingandgirl.svg" alt="hero" width={250} height={10} />
      </div>
      <p className="text-[14px]">EstateEaze gives you a feel of heaven</p>
      <div className="flex flex-row items-center gap-3">
        <Link href="/login" className="bg-[#fff7f2] rounded-2xl text-black p-3 pl-12 pr-12 border-[#EE7421] border-2 ">Login</Link>
        <Link href="/createAccount" className="bg-[#EE7421] rounded-2xl text-white p-3.5 text-[14px]">Create Account</Link>
      </div>
    </div>
  );
}
