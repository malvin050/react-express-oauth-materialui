export const createCustomPageCall = (data: object) => ({
  method: "post",
  url: "/customPageSubmit",
  data,
});
