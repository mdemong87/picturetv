import getUserByEmail from "@/lib/helper/getUserByEmail";
import UIDGanarator from "@/lib/helper/uIdGanarator";
import UserModel from "@/lib/model/userModel";
import ConnectDB from "../../../../lib/connectionDB";

export const POST = async (req) => {


    //get sign up data from the frontend
    const { fullname, email, password, role } = await req.json();




    try {


        //database connection
        ConnectDB();


        //user object data formet
        const userObject = {
            uid: await UIDGanarator(),
            fullname,
            email,
            password,
            role
        }


        // check already user exist or not
        const found = await getUserByEmail(email);

        if (!found) {

            //create user in database
            await UserModel.create(userObject);

            //response back to the frontend
            return Response.json({
                message: "Registration Succesfull",
                status: 200,
                success: true
            })


        } else {
            //response back to the frontend
            return Response.json({
                message: "User Already Exists",
                status: 500,
                success: false
            })
        }





    } catch (err) {
        //response back to the frontend
        return Response.json({
            message: "There is a server side Error",
            status: 500,
            success: false
        })
    }


}