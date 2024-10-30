export default defineEventHandler(async (event) => {
  setCookie(event, "X-AUTH-TOKEN", "TOKEN");

  return {
    test: "test",
  };
});
