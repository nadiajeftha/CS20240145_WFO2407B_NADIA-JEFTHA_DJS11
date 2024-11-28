const API_URL = "https://podcast-api.netlify.app/"; //fetch show data from endpoint
const SHOW_ID_PATH = "id/";

export const podcastService = {
  fetchAllShows: async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch shows.");

      const data = await res.json();
      //sorts title of shows alphabetically
      const aplhSorted = data.sort((a, b) => a.title.localeCompare(b.title));
      setShows(aplhSorted);
    } catch (err) {
      console.error("Fetching shows failed:", err);
      throw err;
    }
  },

  //fetching data from a spesific show
  showById: async (id) => {
    try {
      const res = await fetch(API_URL + SHOW_ID_PATH + id);
      if (!res.ok) throw new Error("Failed to fetch show details.");

      return await res.json();
    } catch (err) {
      console.error("Fetching show details failed:", err);
      throw err;
    }
  },
};
