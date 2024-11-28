const API_URL = "https://podcast-api.netlify.app/"; //fetch show data from endpoint
const SHOW_ID_PATH = "id/";

export const podcastService = {
  fetchAllShows: async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch shows.");

      const data = await res.json();
      const aplhSorted = data.sort(
        (
          a,
          b //sorts title of shows alphabetically
        ) => a.title.localeCompare(b.title)
      );
      setShows(aplhSorted);
    } catch (err) {
      console.error("Fetching shows failed:", error);
      throw error;
    }
  },

  //fetching data from a spesific show
  showById: async (id) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL + SHOW_ID_PATH + id);
      if (!res.ok) throw new Error("Failed to fetch show details.");
      return await res.json();
      setShowId(data);
    } catch (err) {
      console.error("Fetching show details failed:", error);
      throw error;
    }
  },
};
