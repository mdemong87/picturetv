import getRouteSideId from "@/lib/helper/getRoutesideId";

export const GET = async (req) => {



    console.log('hello get data');


    try {



        const id = getRouteSideId(req);

        console.log(id);


        //get single event by event id from the database
        // const event = await EventModel.findOne({ eventid: id });


        //response back to the front end
        return Response.json({
            message: "Fetching Event Successfull",
            status: 200,
            success: true,
            // data: event
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