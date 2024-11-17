import { useStore } from "@/lib/store";
import { FaDollarSign } from "react-icons/fa";

const PaymentAmmount = ({ isfull }) => {


    const paymentAmount = useStore((state) => state.paymentAmount);
    const setpaymentAmount = useStore((state) => state.setpaymentAmount);


    return (
        <div className="flex flex-col items-start mt-8">
            <label htmlFor="payment-ammount text-lg font-semibold">Payment Amount:</label>
            <div className="w-fit h-fit relative">
                <input readOnly={isfull} onChange={(e) => { setpaymentAmount(e.target.value) }} name="payment-ammount" className="w-[300px] p-2 pl-8 font-semilbold text-xl mt-2 border border-gray-900 rounded-md" type="number" value={paymentAmount} />
                <FaDollarSign className="absolute top-5 text-xl left-1" />
            </div>
        </div>
    )
}

export default PaymentAmmount;


