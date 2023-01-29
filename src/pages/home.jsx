import Banner from "../components/banner/banner"
import BannerImg from "../components/banner/img/home-banner.png"
import Post from "../components/post/post"

function Home() {
    return(
        <main>
            <Banner img={BannerImg} alt="Bord de mer montagneux" title="Chez vous, partout et ailleurs" />
            <section className="ksa-post-section">
                <Post />
            </section>
            
        </main>
    )
}

export default Home;