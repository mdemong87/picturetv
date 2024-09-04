import { issingleormultipulUpload } from "@/lib/cloudinaryConfig";
import getUserByEmail from "@/lib/helper/getUserByEmail";
import EventModel from "@/lib/model/eventModel";

export const POST = async (req) => {


    //get login data from the frontend
    const { user, title, type, dis, file } = await req.json();

    try {

        //get user profile for know whick user try to create event
        const userProfile = await getUserByEmail(user?.email);



        // get ready for the crete database recoard
        const objectData = {
            uid: userProfile.uid,
            fullname: userProfile.fullname,
            email: userProfile.email,
            role: userProfile.role,
            title: title,
            type: type,
            dis: dis,
            file: await issingleormultipulUpload(file, type)
        }


        //create Event in database
        await EventModel.create(objectData);


        //response back to the front end
        return Response.json({
            message: "Event Posted Successfully",
            status: 200,
            success: true
        })


    } catch (error) {

        console.log(error);

        //response back to front end 
        return Response.json({
            message: "Event Posted Failed",
            status: 500,
            success: false
        })
    }






}


