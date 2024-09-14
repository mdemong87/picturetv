import MakePayment from "@/lib/helper/payment";

export const POST = async (req) => {
    //get login data from the frontend
    const { price } = await req.json();


    try {

        const ispayment = await MakePayment(price);

        return Response.json({
            message: "Payment was Successfull",
            status: 200,
            success: true,
            paymentData: ispayment
        })

    } catch (error) {
        return Response.json({
            message: "Payment was Failed",
            status: 500,
            success: false
        })
    }














}