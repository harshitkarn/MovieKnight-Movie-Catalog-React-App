import PageLayout from "../components/layouts/PageLayout";

function TopRated(){
    return <PageLayout link="https://api.themoviedb.org/3/movie/top_rated?api_key=cf4568f3cedd6caae7e56b907fe23444" />
}

export default TopRated;