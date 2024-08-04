import mongoose from "mongoose";

const destructureErrorMessage = (error : mongoose.Error.ValidationError ) : string => {
    const destructuredErrorMessage = Object.values(error.errors)
    .map((error) => error.message)
    .join(", ");

    return destructuredErrorMessage
  }

  export default destructureErrorMessage