import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getGenres } from "../utils/api";

const Categories = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGenres().then((res) => {
      setIsLoading(false);

      setCategoriesList(res);
    });
  }, []);

  return (
    <main>
      {isLoading ? (
        <h2>Loading . . . </h2>
      ) : (
        <>
          <ul>
            {categoriesList.map((category) => {
              return (
                <li key={category.slug}>
                  <Link className="NavLink" to={`/reviews/${category.slug}`}>
                    {category.slug}
                    <p>{category.description}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </main>
  );
};

export default Categories;
