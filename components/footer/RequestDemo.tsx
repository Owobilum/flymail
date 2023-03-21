import { FC } from 'react'

const RequestDemo: FC = () => (
  <div
    className="absolute -top-[9.25rem] flex h-[14.375rem] w-full flex-col items-center rounded-xl bg-primary
  px-[5%] lg:flex-row"
    style={{ backgroundImage: "url('/images/zig-zag.svg')" }}
  >
    <div className="py-4 font-lato text-3xl font-bold text-white lg:flex-grow lg:text-[2.5rem] lg:leading-[3.125rem] xl:min-w-[25rem]">
      <span>Your Brand.</span>
      <br />
      <span>Your Products.</span>
    </div>
    <div className="w-full lg:flex-grow-[2]">
      <div className="relative h-[3.5rem] w-full rounded-full">
        <input
          type="email"
          className="h-full w-full rounded-full pl-4 outline-primary placeholder:font-lato placeholder:text-sm active:outline lg:placeholder:text-base xl:pr-[35%]"
          placeholder="Enter Email Address"
        />
        <button className="absolute top-1 right-1 bottom-1 block rounded-full bg-[#442b3d] px-4 font-lato text-sm text-white hover:bg-primary lg:px-[2.0625rem] lg:text-lg">
          Request for Demo
        </button>
      </div>
    </div>
  </div>
)

export default RequestDemo
