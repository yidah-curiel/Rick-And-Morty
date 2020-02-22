import React from "react";

export default function ({ page, totalPages, changePage }) {
    return (
        <div className="page-navigation">
            { page > 1 ? <button className="page-btn page-btn-prev" onClick={ changePage }>Prev Page</button> : null }
            { page < totalPages ? <button className="page-btn page-btn-next" onClick={ changePage }>Next Page</button> : null }
        </div>
    );
  }