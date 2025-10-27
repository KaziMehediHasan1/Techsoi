import CommonWrapper from "./components/layouts/CommonWrapper";

export default async function Home() {
  return (
    <CommonWrapper>
      <div className="bg-black p-5">
        <h1 className="text-SuccessActive text-2xl font-bold">
          Lorem ipsum dolor sit amet.
        </h1>
      </div>
    </CommonWrapper>
  );
}
