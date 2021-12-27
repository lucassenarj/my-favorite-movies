export const wrapPromise = (promise: Promise<any>) => {
  let status = "pending";
  let result = "";
  let suspender = promise.then((response: any) => {
    status = "success";
    result = response;
  }, (error: any) => {
    status = "error";
    result = error;
  });

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      }

      return result;
    }
  }
};
