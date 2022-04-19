import PageLayout from "../components/layouts/PageLayout";

function Upcoming(){
    return <PageLayout link="https://api.themoviedb.org/3/movie/upcoming?api_key=cf4568f3cedd6caae7e56b907fe23444" />
}

export default Upcoming;