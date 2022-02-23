export const submitForm = (
  name,
  phone,
  address,
  input_0,
  input_1,
  agreement_0,
  handleLoading
) => {
  return new Promise((resolve, reject) => {
    const form = {
      name: name,
      phone: phone,
      address: address,
      input_0: input_0,
      input_1: input_1 ? input_1 : "",
      agreement_0: agreement_0,
    };
    console.log("waited 1 sec.");
    handleLoading(true);
    setTimeout(() => {
      handleLoading(false);
      if (agreement_0 === false)
        reject(new Error("제출에러! 사용자 동의 없음."));
      else {
        resolve(form);
      }
    }, 1000);
  });
};
