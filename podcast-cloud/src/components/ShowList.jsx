import React from "react";
import Card from "./Card";
import Button from "./Button";

const ShowList = ({ filteredShows, fetchShowInfo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <h2>All Shows</h2>
      {filteredShows.map((show) => (
        <Card key={show.id} className="mb-4">
          <h3 className="text-lg font-semibold">{show.title}</h3>
          <img src={show.image} alt={show.title} />
          <p className="text-sm text-gray-700">{show.description}</p>
          <Button onClick={() => fetchShowInfo(show.id)}>
            View Show Details
          </Button>
        </Card>
      ))}
    </div>
  );
};
export default ShowList;
