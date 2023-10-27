import appYup from "shared/validation/appYup";
import shouldBeValidError from "shared/validation/errors/shouldBeValidError";
import shouldEnterError from "shared/validation/errors/shouldEnterError";


const loginValidation = appYup.object().shape({
    email: appYup
        .string()
        .required(shouldEnterError("Email"))
        .email(shouldBeValidError("Email")),
    password: appYup
        .string()
        .required(shouldEnterError("Password")),
});
export default loginValidation;