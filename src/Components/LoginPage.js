import Header from "./Header";

const LoginPage = () => {
  return (
    <div
      className="relative h-screen bg-auto bg-center"
      style={{
        backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/27f1b15d-79ed-43ca-8982-7faa9e4aa388/IN-en-20240819-TRIFECTA-perspective_WEB_3c576fa6-cd23-46b6-ac3f-1ad2bb0f66fb_small.jpg')"
      }}
    >
      <Header />
     
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-14 w-96 bg-black bg-opacity-75">
      <h1 className="text-white text-3xl pb-4">Sign in</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full text-black "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full text-black"
        />
       <button className=" font-semibold text-md p-2 m-5 mx-2 block rounded-sm bg-red-600 hover:bg-red-700 text-white w-full text-center">
  Sign In
</button>
<p className="text-slate-300 mx-32">OR</p>
<button className=" font-semibold text-md p-2 m-5 mx-2 block rounded-sm bg-slate-600 hover:bg-slate-600 bg-opacity-40 text-white w-full text-center">
  Use a sign-In code
</button>
<p className="text-white mx-[77px]">Forget Password</p>
<div className="flex flex-col gap-3 py-6 mx-4 items-start">
  <div><input type="checkbox" id="remember" className=" form-checkbox  h-4 w-4 text-white border-white focus:ring-0 focus:ring-offset-0" />
  <label htmlFor="remember" className="ml-2 text-white">
    Remember me
  </label>
</div>
  <div className="flex">
    <p className="text-slate-200 opacity-60">New to Netflix?</p>
    <button className="cursor-pointer text-white font-medium">Sign Up Now</button>
  </div>
</div>

<div className="flex">
<p className="gap-3 flex-col text-slate-300 opacity-60  text-xs">This page is protected by Google reCAPTCHA to ensure you're not a bot <button className="hover:text-blue-500 text-blue-400">Learn more</button></p>

</div>



      </form>
      
    </div>
  );
};

export default LoginPage;
