export default defineEventHandler(async (event) => {
  const token = getCookie(event, "X-AUTH-TOKEN");

  return {
    test: token,
  };
});
