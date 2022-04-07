import React from "react";
import { ImPhone } from "react-icons/im";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import BackgroundMain from "../Components/BackgroundMain";
import MainWP from "../Components/Asset/WomanMaking.jpg";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import AboutImg from "../Components/Asset/bakeTogether.jpg";
import "../Styles/Home.css";
import { Box } from "../Components/Box";
import Delivery from "../Components/Asset/iconsDelivry.png";
import Affordeble from "../Components/Asset/iconsAffordeble.png";
import Desain from "../Components/Asset/iconsDesign.png";
import CookingDessert from "../Components/Asset/CookingDessert.jpg";
import Birthday from "../Components/Asset/birtyday.jpg";
import Delevery from "../Components/Asset/delevery.jpg";
import CakeOne from "../Components/Asset/cake1.jpeg";
import CakeTwo from "../Components/Asset/cake2.jpeg";
import CakeThree from "../Components/Asset/cake3.jpeg";
import CakeFour from "../Components/Asset/cake4.jpeg";
import Contact from "../Components/Asset/ContactUs.png";
import Icons from "../Components/Icons";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="container-main">
      <Navbar />
      <BackgroundMain width={"600px"} src={MainWP} />
      <div className="main-content">
        <div className="main-greating">
          <p>Welcome to Ninu's Cake!</p>
        </div>
        <p className="main-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit eius
          laborum magnam explicabo, reprehenderit consectetur adipisci quam,
          tempore quis aliquam, maiores nam dolorum? Earum aperiam corporis
          commodi, ea vel eos?
        </p>
        <div className="main-button">
          <Button className="button-main" />
        </div>
      </div>
      <div className="about-container">
        <div className="about-box-content">
          <BackgroundMain
            className={"aboutImg"}
            width={"400px"}
            src={AboutImg}
          />
          <div className="about-title">
            <p>About Ninu's Cake</p>
          </div>
          <p>
            Ninu's cake dapat menerima pesanan kue atau bolu ulangtahun dengan
            selera atau dekorasi kue sesuai ke inginan para pelanggan.
            <br />
            <br />
            Pemesanan bisa secara online, dan cash. Ayo! tunggu apalagi!
          </p>
          <Button className="about-btn">Sales</Button>
        </div>
      </div>
      <div className="info-container">
        <div className="info-content-wrapper">
          <div className="info-content">
            <Icons width="45px" src={Delivery} />
            <p>Online Delivery</p>
          </div>
          <div className="info-content">
            <Icons width="45px" src={Affordeble} />
            <p>Harga Terjangkau</p>
          </div>
          <div className="info-content">
            <Icons width="45px" src={Desain} />
            <p>Desain Sendiri</p>
          </div>
        </div>
      </div>
      <div className="about-pt3-container">
        <div className="about-pt3-content">
          <p className="about-pt3-title">Buat Kue Ulang Tahun Mu!</p>
          <p className="about-pt3-text">
            Disini dapat memesan kue ulang tahun untuk teman atau keluarga
            kalian, Pesan Kue ulang tahun mun sekarang! dengan desain kue yang
            anda inginkan.
          </p>
          <BackgroundMain
            className={"about-pt3-bg"}
            width="500px"
            src={Birthday}
          />
        </div>
      </div>
      <div className="about-pt4-container">
        <div className="about-pt4-content">
          <p className="about-pt4-title">
            Dekorasi Kue Sesuai yang di inginkan!
          </p>
          <p className="about-pt4-text">
            Pilih dekorasi kue mu, atau request dekorasimu sesuai yang anda
            inginkan!
          </p>
          <BackgroundMain
            className={"about-pt4-bg"}
            width="500px"
            src={CookingDessert}
          />
        </div>
      </div>
      <div className="about-pt5-container">
        <div className="about-pt5-content">
          <p className="about-pt5-title">Bisa di antarkan kerumah anda!</p>
          <p className="about-pt5-text">
            Pengambilan barang bisa menggunakan Grab Food, dan Shoope Food.
          </p>
          <div className="about-pt5-icons"></div>
          <BackgroundMain
            className={"about-pt5-bg"}
            width="500px"
            src={Delevery}
          />
        </div>
      </div>
      <div className="about-pt2-container">
        <div className="about-pt2-content">
          <div className="about-pt2-title">
            <p>Product</p>
          </div>
          <Box src={CakeOne} />
          <Box src={CakeTwo} />
          <Box src={CakeThree} />
          <Box src={CakeFour} />
          <div className="about-pt2-text-container">
            <hr className="hr-container" />
            <div className="about-pt2-text-wrapper">
              <p className="about-pt2-titleText">Mini Cake Dan BirthDay Cake</p>
              <p className="about-pt2-text">
                Di atas adalah contoh product dari Ninu's Cake, pelanggan bisa
                request cake nya sendiri atau pun desain cake yang tersedia di
                sini.
              </p>
            </div>
          </div>
          <div className="about-pt2-text-container">
            <div className="about-pt2-text-wrapper">
              <p className="about-pt2-titleText">Price List:</p>
              <p className="about-pt2-text">
                Mini Cake: 25k <br />
                BirthDay Cake: 50k
                <hr className="underline-about-pt2" width="400px" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-title">
          <p>Hubungi Kami!</p>
          <p>
            Ada Pertanyaan mengenain Ninu's Cake? atau ingin pesan sekarang?
            hubungi kami untuk info lebih lanjut!
          </p>
        </div>
        <div className="contact-box">
          <p className="contact-title-box">Contact Information</p>
          <p className="contact-textDetail">
            Info contact ada di bawah berikut, pembalasan akan di lakukan selama
            24 jam
          </p>
          <div className="contact-content">
            <p>
              <ImPhone
                style={{
                  height: "26px",
                  width: "26px",
                  color: "white",
                  marginRight: "10px",
                }}
              />{" "}
              +62 8956 320 35020
            </p>
            <p>
              <HiOutlineMailOpen
                style={{
                  height: "26px",
                  width: "26px",
                  color: "white",
                  marginRight: "16px",
                }}
              />
              Ninu's_Cake@gmail.com
            </p>
            <p>
              <MdLocationOn
                style={{
                  height: "26px",
                  width: "26px",
                  color: "white",
                  marginRight: "16px",
                }}
              />
              Bandung, Soreang, Cihaur RT 01 RW 08
            </p>
          </div>
          <BackgroundMain className="contact-bg" src={Contact} />
          <div className="contact-detail-more">
            <BsInstagram
              className="contact-icons"
              style={{
                height: "26px",
                width: "26px",
                color: "white",
                marginRight: "16px",
              }}
            />
            <AiOutlineFacebook
              className="contact-icons"
              style={{
                height: "28px",
                width: "28px",
                color: "white",
                marginRight: "16px",
              }}
            />
            <BsWhatsapp
              className="contact-icons"
              style={{
                height: "26px",
                width: "26px",
                color: "white",
                marginRight: "16px",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
