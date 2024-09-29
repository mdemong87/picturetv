const { default: Container } = require("@/app/componnent/clientcomponnent/Container")

const MyCart = () => {
    return (
        <main className="py-28 pb-6">
            <Container>
                <div className="w-full h-fit grid grid-cols-12 gap-4">
                    <div className="rounded-md bg-white col-span-8 p-6">fadfasd</div>
                    <div className="col-span-4 bg-white rounded-md p-6">
                        fdsf
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default MyCart;