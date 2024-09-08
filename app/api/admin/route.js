import ConnectDB from "@/lib/connectionDB";
import EventModel from "../../../lib/model/eventModel";


export const GET = async () => {

    try {


        //database connection
        ConnectDB();

        // geting one user 
        const found = await EventModel.find({});


        //response back to the front end
        return Response.json({
            message: "Fetching Event Successfull",
            status: 200,
            success: true,
            data: found
        })

    } catch (error) {



        //response back to the front end
        return Response.json({
            message: "Fetching Event Failed",
            status: 500,
            success: false
        })


    }

}