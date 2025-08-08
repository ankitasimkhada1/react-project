"use client";
import { FormEvent } from "react";
import { login } from "../actions/login";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email")?.toString() || "";
        const password = formData.get("password")?.toString() || "";

        try {
            await login(email, password);
            router.push("/");
        } catch (error: any) {
            console.log("Login failed:", error.message);
        }
    }

    return (
        <div className="px-10 py-5 flex justify-center">
            <div className="w-[500px] border rounded-md p-5">
                <h1 className="text-2xl font-semibold uppercase">
                    Login
                </h1>

                <form
                    onSubmit={onSubmit}
                    className="mt-5 flex flex-col gap-5"
                    >
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
                            placeholder="*************"
                            className="w-full border border-white px-5 py-2 rounded-md"
                            />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-white text-black px-7 py-2 text-sm rounded-md">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;