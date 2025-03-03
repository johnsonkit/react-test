import { useState } from "react";
import Card from "./Card";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
const Schools = () => {
  const [searchText, setSearchText] = useState("");
  const [queryText, setQueryText] = useState("");
  const [limit, setLimit] = useState(5);

  const {
    data: schools,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["schools", limit, queryText],
    queryFn: async () => {
      const url = queryText
        ? `https://api.csdi.gov.hk/apim/dataquery/api/?id=edb_rcd_1629267205213_58940&layer=asfps&limit=${limit}&offset=0&Address=${queryText}`
        : `https://api.csdi.gov.hk/apim/dataquery/api/?id=edb_rcd_1629267205213_58940&layer=asfps&limit=${limit}&offset=0`;

      const response = await fetch(url);
      const data = await response.json();
      console.log("Fetched data:", data);
      return data;
    },
    placeholderData: keepPreviousData,
  });

  const handleOnClick = () => {
    console.log("searchText:", searchText);
    setQueryText(searchText);
  };

  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 5);
  };

  return (
    <main className="schools">
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, x: "-50%", y: "-250%" }}
          whileInView={{
            opacity: 1,
            x: "-50%",
            y: "-208%",

            transition: { delay: 0.8, duration: 1 },
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="search--wrapper"
        >
          <div className="search--item">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <i className="icon icon-search"></i>
          </div>
          <button
            className="button button-coffee search--button"
            type="button"
            onClick={handleOnClick}
            disabled={isLoading}
          >
            Search
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0, duration: 0.8 },
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          <h2 className="title special--font">
            Popular schools <i className="icon icon-inquiry"></i>
          </h2>

          {isSuccess &&
            schools.features.map(({ properties: school }) => (
              <Card key={school.OBJECTID} school={school} />
            ))}
        </motion.div>

        {isSuccess && schools.numberReturned < schools.numberMatched && (
          <div className="show-more--wrapper">
            <button
              className="button show-more"
              type="button"
              onClick={handleShowMore}
              disabled={isLoading}
            >
              <i className="icon icon-plus icon--left"></i>
              More
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Schools;
