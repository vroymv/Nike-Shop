import Button from "../../Shared/Button";
export default function Newsletter(props) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between my-20">
      <h2 className="text-3xl mx-auto lg:mx-0 lg:w-96 pb-4 md:pb-0  w-full sm:text-4xl font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates</span> & NewsLetter
      </h2>
      <div>
        <form>
          <div className="flex flex-col lg:flex-row lg:border lg:border-slate-gray lg:w-[850px] pr-2 pl-10 py-2 rounded-full lg:justify-between">
              <input className="h-fit lg:py-2 sm:w-[400px] sm:px-4 sm:py-4 sm:border sm:border-slate-gray sm:rounded-full pr-40 self-center" type="text" placeholder="subscribe@nike.com" />
            <div className="w-fit sm:mx-auto lg:mx-0 sm:pt-4 lg:pt-0 cursor-pointer">
              <Button content="Sign Up" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
