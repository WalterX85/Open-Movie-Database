import React, { useState, Fragment } from "react";

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

const Links = ({ active, handleClick }) => (
  <nav>
    {["search", "favorites"].map(link => {
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      return <a className={`hover ${active === link && 'active'}`} onClick={() => handleClick(link)}>{link.toUpperCase()}</a>;
    })}
  </nav>
);

const FavoriteBtn = ({toggleFavorite, active}) => {
  const [isFavorite, setFavorite] = useState(false);
  return (
    <button className={isFavorite ? 'favorite' : 'not-favorite'} onClick={() => {
      toggleFavorite()
      setFavorite(!isFavorite)
    }}>
      {isFavorite ? 
      <Fragment>
        <i className="fas fa-star"></i><span>&nbsp;Remove</span>
      </Fragment> :
      <Fragment>
        <i className="far fa-star"></i><span>&nbsp;Add Favorites</span>
      </Fragment>
    }

    </button>
  );
};

const Result = ({toggleFavorite, active}) => {
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
      <FavoriteBtn flex="p-1" toggleFavorite={toggleFavorite} active={active}/>
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
          onChange={e => onTextChange(e.target.value)}
        />
        <button type="submit" className="btn btn-danger">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <p class="error"></p>
    </form>
  );
};

const Results = ({ movies, favorites, isSearching, active, toggleFavorite }) => {
  if (active === "favorites" && favorites.length < 0) {
    return <p>No Favorites in the list :(</p>;
  }
  if (active === "favorites" && favorites.length > 0) {
    return favorites.map(favorite => {
      return <Result toggleFavorite={toggleFavorite} active={active}/>;
    })
  }
  if (!isSearching) {
    return <p>No results :(</p>;
  }
  return movies.map(movie => {
    return <Result toggleFavorite={toggleFavorite}/>;
  });
};
export { Links, Results, SearchForm };
