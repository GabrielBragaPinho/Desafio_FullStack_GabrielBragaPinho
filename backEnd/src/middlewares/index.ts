import { pagination } from "./pagination.middleware";
import { uniqueName } from "./uniqueName.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { handleErrors } from "./handleErrors.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyIdExists } from "./verifyIdExists.middleware";
import { verifyNameExists } from "./verifyNameExists.middleware";

export default {
    uniqueName,
    pagination,
    uniqueEmail,
    verifyToken,
    validateBody,
    handleErrors,
    verifyIdExists,
    verifyNameExists,
};