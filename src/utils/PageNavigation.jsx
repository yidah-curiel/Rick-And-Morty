import React from "react";
import { connect } from "react-redux";
import { changePage } from '../redux-saga/actions';

function PageNavigation ({ page, searchURL, totalPages, changePage }) {
    const onClick = e => {
        Array.from(e.target.classList).includes('page-btn-next') ?
            changePage("next", page, searchURL) :
            changePage("prev", page, searchURL);
    }
    return (
        <div className="page-navigation">
            { page > 1 ? <button className="page-btn page-btn-prev" onClick={ onClick }>Prev Page</button> : null }
            { page < totalPages ? <button className="page-btn page-btn-next" onClick={ onClick }>Next Page</button> : null }
        </div>
    );
  }

  
const mapStateToProps = state => {
    return {
        totalPages: state.totalPages,
        page: state.page,
        searchURL: state.searchURL
    };
};


const mapDispachToProps = dispatch => {
return {
    changePage: (param, page, URL) => dispatch(changePage(param, page, URL))
};
};

export default connect(
mapStateToProps,
mapDispachToProps
) (PageNavigation)