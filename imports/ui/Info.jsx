import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { LinksCollection } from "../api/links";

export const Info = () => {
  const links = useTracker(() => {
    const noDataAvailable = { data: null };
    const handler = Meteor.subscribe("mycustompub");
    if (!handler.ready()) {
      return { ...noDataAvailable, loading: true };
    }

    const data = LinksCollection.find().fetch();
    console.log(data);
    return { data, loading: false };
  });

  return (
    <div>
      <p>check client logs for error / result</p>
    </div>
  );
};
