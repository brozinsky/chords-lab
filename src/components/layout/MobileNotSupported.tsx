import MobileNotSupportedSVG from "../elements/svg/MobileNotSupportedSVG";

export default function MobileNotSupported() {
  return (
    <main className="px-8 container flex flex-col text-center items-center justify-center h-screen w-full">
      <MobileNotSupportedSVG />
      <h1 className="text-3xl mb-4 font-bold">Oops</h1>
      <p>This website is not supported for mobile devices yet.</p>
    </main>
  );
}
