import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const serviceId = "service_0gx2apt";
const templateId = "template_oe2h7un";
const userId = "vjd1qgcqtL0ih13FP";

const SendEmail = async(name,email,message) => {
    try {
        const response = await emailjs.send(
            serviceId,
            templateId,
            {name,email,message},
            userId
        )
        if(response.status === 200){toast.success("Sent Mail Successfully")}
    } catch (error) {
        console.log("Failed to send Email", error)
        toast.error("Failed to sent Mail. Try again!")
    }
};

export default SendEmail;