import mockup from "./images/image-mockups.png";

export default function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col-reverse lg:h-screen lg:flex-row bg-gray-50"
    >
      {/* left */}
      <div className="flex flex-col items-start justify-center xl:justify-start mt-10 xl:mt-40 lg:items-start gap-10 w-full xl:w-1/2 px-10 lg:p-20 lg:px-30 ">
        <h1 className="text-5xl text-neutral-800 text-wrap">
          Next generation digital banking
        </h1>
        <p className="text-neutral-400">
          Take your financial life online. Your Digitalbank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="self-center lg:self-start bg-gradient-to-r from-green-400 to-blue-400 rounded-full text-white px-8 py-3">
          Request invite
        </button>
      </div>

      {/* right */}
      <div
        style={{
          backgroundImage: `url("/bg-intro-desktop.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full bg-center flex justify-center items-center"
      >
        <img src={mockup} className="w-full  max-w-[600px]" alt="App mockups" />
      </div>
    </div>
  );
}
