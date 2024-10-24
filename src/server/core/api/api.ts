import ApiClient from "./init";

const api = new ApiClient("http://localhost:3002/api/v1", {
  "Content-Type": "application/json",
});

// Request interceptor
api.addRequestInterceptor(async (config) => {
  return config;
});

// Response interceptor
api.addResponseInterceptor(async (response) => {
  if (response.status === 401) {
    console.error("Unauthorized:", response.status);
  }

  return response;
});

// Error handling interceptor
api.addResponseInterceptor(async (response) => {
  return response;
});

export { api };