import emailjs from "emailjs-com";

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
        if(response.status === 200){console.log("Success")}
    } catch (error) {
        console.log("Failed to send Email", error)
    }
};

export default SendEmail;