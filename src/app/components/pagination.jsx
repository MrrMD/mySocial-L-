import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { usersCount, pageSize } = props;
  const pageCount = Math.ceil(usersCount / pageSize);
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li className="page-item" key={"page_" + page}>
            <a href="" className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
