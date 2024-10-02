import React from 'react'
import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"
import { FeaturedMovie } from '@/components/featured-movie'
import {Categories} from '@/components/categories'
import { MoviesSection } from '@/components/movies-section'

function HomeContainer({
  topRatedMovies=[],
  popularMovies = [],
  categories = [],
  selectedCategory
}) {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[0]}/>
      <Categories categories={categories.slice(0,5)}/>
        
        {
          selectedCategory.movies.length > 0 &&(
          <MoviesSection 
          title= {categories.find(category => category.id.toString() === selectedCategory.id).name} 
          movies={selectedCategory.movies}/>
        )
        }

        <MoviesSection title= "Popular" movies={popularMovies.slice(1,7)}/>
        <MoviesSection title= "Top Rated" movies={topRatedMovies.slice(7,13)}/>
    
    </div>
  )
}

export default HomeContainer
