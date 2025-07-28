import FormInput from "../components/FormInput";

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userName = formData.get("userName");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({ userName, email, password });
  };
  return (
    <main>
      <div className="relative h-screen">
        {/* Wrapper: faqat lg:da flex bo'ladi */}
        <div className="lg:flex h-full">
          {/* Background image */}
          <div className="lg:w-1/2 w-full h-full bg-[url('https://picsum.photos/1200/800')] bg-cover bg-center bg-no-repeat"></div>

          {/* Form container */}
          <div
            className="
          lg:w-1/2 w-full
          flex items-center justify-center
          h-full
          lg:static absolute inset-0
          z-10
          max-lg:bg-black/60 
        "
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
            >
              <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

              <FormInput label="User Name" name="userName" type="text" />
              <FormInput label="Email" name="email" type="email" />
              <FormInput label="Password" name="password" type="password" />

              <button type="submit" className="w-[320px] btn btn-primary ">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
// sm	 (640px)
// md	 (768px)
// lg	 (1024px)
// xl	 (1280px)
// 2xl (1536px)
export default Signup;
