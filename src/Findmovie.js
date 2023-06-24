import React from 'react';
import { useGlobleContext } from './context';

export default function Findmovie() {
  const { isErr, query, setQuery } = useGlobleContext();
  return (
    <>
      <section className="search-section">
        <h2>Search for movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isErr.show && isErr.msg}</p>
        </div>
      </section>
    </>
  );
}
