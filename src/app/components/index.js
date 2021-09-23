import React from "react";

export const Header = props => {
  return (
    <header>
      <span>
        OMDb Movie Search <i className="fas fa-video video"></i>
      </span>
    </header>
  );
};
export const Modal = props => (
  <div
    className="modal fade"
    id="modal"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">... Content Here</div>
      </div>
    </div>
  </div>
);

const Links = props => (
  <nav>
    {["search", "favorites"].map(link => {
      return <a>{link.toUpperCase()}</a>;
    })}
  </nav>
);

const FavoriteBtn = props => {
  return (
    <button className="not-favorite">
      <i className="fas fa-star"></i>&nbsp; Add Favorites
    </button>
  );
};

const Result = props => {
  return (
    <article className="movie d-flex">
      <div className="p-4 movie d-flex flex-fill">
        <div
          className="p-1 poster"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL +
              `/placeholder.png`}`,
            backgroundSize: "cover"
          }}
        ></div>
        <div className="p-4">
          <h2>
            <a target="_blank" href="#">
              Title
            </a>
            <span>(2018)</span>
          </h2>
          <p>tt0390521</p>
        </div>
      </div>
      <FavoriteBtn flex="p-1" />
    </article>
  );
};
const SearchForm = ({ onTextChange }) => {
  return (
    <form className="search" onSubmit={e => console.log(`searching query`)}>
      <div>
        <input
          type="text"
          id="title"
          placeholder="Search movie title..."
          defaultValue=""
        />
        <button type="submit" className="btn btn-danger">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <p class="error"></p>
    </form>
  );
};

const Results = ({ results, isSearching, activeLink }) => {
  if (activeLink === "favorites") {
    return <p>No Favorites in the list :(</p>;
  }
  if (!isSearching) {
    return <p>No results :(</p>;
  }
  return results.map(movie => {
    return <Result />;
  });
};
export { Links, Results, SearchForm };