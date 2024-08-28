import Container from "@/app/componnent/clientcomponnent/Container";

const ChangePassword = () => {
    return (
        <main className="pt-28">
            <Container>
                <div>
                    <h2 className="text-center text-4xl py-6 font-bold">Change Password</h2>

                    <div className="p-7 w-full flex justify-center items-center">
                        <div className="rounded-md border border-gray-300 p-5">
                            <input type="password" className="w-full p-3 rounded-md" placeholder="Enter New Password" />

                            <input type="password" className="w-full p-3 mt-4 rounded-md" placeholder="Confarm New Password" />

                            <button className="pbg2 w-full p-3 mt-4 text-white font-bold text-xl rounded-md">Change Password</button>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default ChangePassword;