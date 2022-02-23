export const submitForm = (formData, handleLoading) => {
  return new Promise((resolve, reject) => {
    console.log("waited 1 sec.");
    handleLoading(true);
    setTimeout(() => {
      handleLoading(false);
      if (!formData) reject(new Error("제출에러! 데이터 없음."));
      else {
        resolve(formData);
      }
    }, 1000);
  });
};
