import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import './App.css';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

export default () =>{

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);


  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o Featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random()*(originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];


    }

    loadAll();
  }, []);

  return (
    <div className="page">

      {featuredData &&
      <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key) =>(
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))
}
      </section>
    </div>
  );
}