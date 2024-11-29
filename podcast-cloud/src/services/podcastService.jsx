const API_URL = "https://podcast-api.netlify.app/"; //base url
const SHOW_ID_PATH = "id/"; //spesific show details
const GENRE_ID_PATH = "genre/"; //spesific genre details

export const podcastService = {
  fetchAllShows: async () => {
    //fetching previews
    try {
      const res = await fetch(API_URL); //fetching show previews
      if (!res.ok) throw new Error("Failed to fetch shows.");

      const data = await res.json(); // returning array of previews
      //sorts title of shows alphabetically
      return data.sort((a, b) => a.title.localeCompare(b.title));
    } catch (error) {
      console.error("Fetching shows failed:", error);
      throw error;
    }
  },

  //fetching data from a spesific show
  showById: async (id) => {
    try {
      const res = await fetch(`${API_URL}${SHOW_ID_PATH}${id}`);
      if (!res.ok) throw new Error("Failed to fetch show details.");

      return await res.json();
    } catch (error) {
      console.error("Fetching show details failed:", error);
      throw error;
    }
  },

  //fetching data for a spesific genre
  genreById: async (id) => {
    try {
      const res = await fetch(`${API_URL}${GENRE_ID_PATH}${id}`);
      if (!res.ok) throw new Error("Failed to fetch genre details.");

      return await res.json();
    } catch (error) {
      console.error("Fetching genre details failed:", error);
      throw error;
    }
  },
};
