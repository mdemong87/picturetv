import { FaDollarSign } from "react-icons/fa";

const PaymentAmmount = () => {
    return (
        <div className="flex flex-col items-start mt-8">
            <label htmlFor="payment-ammount text-lg font-semibold">Payment Amount:</label>
            <div className="w-fit h-fit relative">
                <input name="payment-ammount" className="w-[300px] p-2 pl-8 font-semilbold text-xl mt-2 border border-gray-900 rounded-md" type="number" />
                <FaDollarSign className="absolute top-5 text-xl left-1" />
            </div>
        </div>
    )
}

export default PaymentAmmount;


