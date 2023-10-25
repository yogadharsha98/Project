import Featured from "../../components/featured/featured";
import FeaturedProperties from "../../components/FeaturedProperties/featuredProperties";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/gallery";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import NavBar from "../../components/navbar/NavBar";
import PropertyList from "../../components/propertyList/propertyList";
import "./Home.css";

export const HomeScreen = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <Gallery />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
