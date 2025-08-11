import { useRouter } from "next/router";
import { FormEvent } from "react";
import { register } from "../actions/register";

const RegisterPage = () => {

    const router = useRouter();
    
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get("name")?.toString() || "";
        const email = formData.get("email")?.toString() || "";
        const password = formData.get("password")?.toString() || "";
        const password_confirmation = formData.get("password_confirmation")?.toString() || "";

        try {
            await register(name, email, password, password_confirmation);
            router.push("/login");
        } catch (error: any) {
            console.log("Login failed:", error.message);
        }
    }


    return (
        <div className="px-10 py-5 flex justify-center">
            <div className="w-[500px] border rounded-md p-5">
                <h1 className="text-2xl font-semibold uppercase">
                    Register
                </h1>

                <form
                    onSubmit={onSubmit}
                    className="mt-5 flex flex-col gap-5"
                    >
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            className="w-full border border-white px-5 py-2 rounded-md"
                            />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            className="w-full border border-white px-5 py-2 rounded-md"
                            />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            className="w-full border border-white px-5 py-2 rounded-md"
                            />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password_confirmation"
                            placeholder="Password Confirmation"
                            className="w-full border border-white px-5 py-2 rounded-md"
                            />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-white text-black px-7 py-2 text-sm rounded-md">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default RegisterPage;