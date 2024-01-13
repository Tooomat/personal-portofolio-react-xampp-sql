import imageBoy from "../images/Boy.png";
import imageFoto from "../images/foto.jpeg";
import imageTerarium from "../images/Terarium.jpeg";
import imageOrigami from "../images/Origami.jpg";
import imageGantunganKunci from "../images/GnatunganKunciMotif.jpeg";
import imageGame from "../images/game.jpg";
import imageKapal from "../images/kapal.jpg";
import imageVoli from "../images/voli.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "./Contact";
export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <!-- Home Section --> */}
      <section className="home" id="home">
        <div className="home_pic_container">
          <img src={imageBoy} alt="Nigg" />
        </div>

        <div className="home-content">
          <p className="section_intro">Hello, I'm</p>
          <h1 className="nama">
            Hadi Dwi Ardiansyah <br />
            And i'm a
          </h1>
          <div className="text-animation">
            <h3 className="multiple-text">i</h3>
          </div>

          <div className="btn-container">
            <button
              className="btn btn_box_CV"
              onClick="window.open('./assets/resume-example.pdf')"
            >
              Download CV
            </button>

            <button
              className="btn btn_box_info"
              onClick="location.href('./#contact')"
            >
              Contact Info
            </button>
          </div>
        </div>
      </section>
      {/* <!-- Home Section End --> */}

      {/* <!-- About Section --> */}
      <section className="about" id="about">
        <h2 className="heading">
          About <span>Me</span>
        </h2>

        <div className="about-img">
          <img src={imageFoto} alt="foto Ardiansyah" />
          <span className="circle-spin"></span>
        </div>

        <div className="about-content">
          <h3>Seorang Mahasiswa</h3>
          <p>
            Halo, saya Hadi Dwi Ardiansyah! Saya seorang Mahasiswa. Saya percaya
            bahwa setiap hari adalah kesempatan untuk belajar dan tumbuh, dan
            itulah yang mendorong saya untuk terus mengejar pengetahuan baru dan
            tantangan kreatif. Saat ini, saya kuliah di Muhammadiyah Malang.
            Saya masuk dalam jurusan informatika. Di luar dunia perkuliahan,
            saya memiliki berbagai minat dan hobi. Saya sangat menyukai olahraga
            dan permainan yang mengasah otak, yang tidak hanya memberikan
            hiburan, tetapi juga membantu saya menjaga keseimbangan hidup. Saat
            terdapat waktu senggang waktu kuliah, saya selalu mencari kegiatan
            agar selalu produktif. Filosofi hidup saya dapat disimpulkan dalam
            satu kalimat: "Selalu berusaha menjadi versi terbaik dari diri
            sendiri." Saya percaya bahwa kehidupan adalah perjalanan untuk terus
            belajar, berkembang, dan memberikan dampak positif kepada orang di
            sekitar. Saya berusaha untuk selalu membuka pikiran terhadap peluang
            baru dan memperjuangkan kemajuan, baik secara pribadi maupun
            profesional. Saya senang berkenalan dengan orang baru dan berbagi
            pengalaman. Jika Anda ingin berbicara lebih lanjut, atau sekadar
            berbagi ide dan cerita, jangan ragu untuk menghubungi saya melalui
            media sosial saya. Saya selalu terbuka untuk kolaborasi dan
            kesempatan baru. Terima kasih telah mengunjungi halaman "About Me"
            saya. Saya berharap dapat berinteraksi dengan Anda segera! --- Hadi
            Dwi Ardiansyah
          </p>
        </div>
      </section>
      {/* <!-- About Section End --> */}

      {/* <!-- Section education --> */}
      <section className="education" id="education">
        <h2 className="heading">
          My <span>Journey</span>
        </h2>

        <div className="education-row">
          <div className="education-column">
            <h3 className="title">2009 - 2018</h3>

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i data-feather="calendar"></i>2009-2015
                  </div>
                  <h3>SD Negeri Blimbing</h3>
                  <p>
                    SD Negeri Blimbing adalah sekolah dasar yang berkomitmen
                    untuk memberikan pendidikan berkualitas kepada siswa-siswa
                    kami. Kami percaya bahwa setiap anak memiliki potensi yang
                    unik dan kami berdedikasi untuk mengembangkan potensi
                    tersebut
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i data-feather="calendar"></i>2015-2018
                  </div>
                  <h3>SMP Negeri 1 Jombang</h3>
                  <p>
                    SMP Negeri 1 Jombang adalah lembaga pendidikan menengah yang
                    berkomitmen untuk memberikan pengalaman belajar yang bermutu
                    dan mendukung perkembangan holistik siswa-siswi kami. Kami
                    berupaya menciptakan lingkungan belajar yang inspiratif dan
                    mendukung pertumbuhan intelektual, sosial, dan emosional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="education-column">
            <h3 className="title">2018 - 2023</h3>

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i data-feather="calendar"></i>2018-2021
                  </div>
                  <h3>SMA PGRI 1 Jombang</h3>
                  <p>
                    SMA PGRI 1 Jombang memiliki misi untuk menyediakan
                    pendidikan tinggi berkualitas yang mempersiapkan siswa untuk
                    menghadapi tantangan masa depan. Kami berkomitmen untuk
                    menciptakan lingkungan belajar yang stimulatif, di mana
                    siswa dapat mengembangkan potensi akademis, keterampilan
                    sosial, dan kepemimpinan.
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i data-feather="calendar"></i>2021-2023
                  </div>
                  <h3>Universitas Muhammadiyah Malang</h3>
                  <p>
                    Universitas Muhammadiyah Malang berkomitmen untuk
                    menyediakan pendidikan tinggi yang bermutu tinggi dan
                    relevan dengan tuntutan zaman. Kami memberikan perhatian
                    khusus pada pengembangan akademis, karakter, dan
                    keterampilan praktis siswa-siswa kami. Di sini, kami
                    mengutamakan pembelajaran aktif dan kolaboratif, serta
                    mempersiapkan mahasiswa untuk menjadi pemimpin yang berdaya
                    saing di berbagai bidang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section education end --> */}

      {/* <!-- Section Hobbie --> */}
      <section className="hobbie" id="hobbie">
        <h2 className="heading">
          My <span>Hobbies</span>
        </h2>

        <div className="hobbie-container">
          <div className="hobbie-box">
            <img src={imageTerarium} alt="Terarium" />

            <div className="hobbie-layer">
              <h4>Terarium</h4>
              <p>
                Membuat dan merawat terarium merupakan kepuasan tersendiri,
                karena bisa melatih kesabaran dan bisa mengenal alam
              </p>
              <a href="#a">
                <i data-feather="external-link"></i>
              </a>
            </div>
          </div>

          <div className="hobbie-box">
            <img src={imageOrigami} alt="Terarium" />

            <div className="hobbie-layer">
              <h4>Origami</h4>
              <p>
                Melipat origami ga bisa menjadi kegiatan yang menenangkan,
                memberikan waktu untuk merenung dan bersantai.
              </p>
              <a href="#a">
                <i data-feather="external-link"></i>
              </a>
            </div>
          </div>

          <div className="hobbie-box">
            <img src={imageGantunganKunci} alt="Terarium" />

            <div className="hobbie-layer">
              <h4>Membuat Kerajinan Tangan</h4>
              <p>
                Bagi saya hobbie ini sangat mahal, karena tidak semua orang
                mempunyai kemauan untuk membuat dan kerajinan tangan memiliki
                nilai jual yang tinggi
              </p>
              <a href="#a">
                <i data-feather="external-link"></i>
              </a>
            </div>
          </div>

          <div className="hobbie-box">
            <img src={imageGame} alt="Terarium" />

            <div className="hobbie-layer">
              <h4>Bermain Game</h4>
              <p>
                Bermain game bisa mengilangkan stress jika dimainkan tanpa
                keinginan untuk menang dan tekanan yang tinggi
              </p>
              <a href="#a">
                <i data-feather="external-link"></i>
              </a>
            </div>
          </div>

          <div className="hobbie-box">
            <img src={imageKapal} alt="Terarium" />

            <div className="hobbie-layer">
              <h4>Miniatur</h4>
              <p>
                Membuat miniatur bisa meningkan kreativitas, ketelitian, dan
                kesabaran karena tidak mudah untuk membuat sebuah miniatur
              </p>
              <a href="#a">
                <i data-feather="external-link"></i>
              </a>
            </div>
          </div>

          <div className="hobbie-box">
            <img src={imageVoli} alt="Terarium" />

            <div className="hobbie-layer">
              <h4>Bola Volly</h4>
              <p>
                Olahraga yang digemari banyak orang karena sangat menyenangkan
                dan banyak teknik untuk bermain
              </p>
              <a href="#a">
                <i data-feather="external-link"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section Hobbie End --> */}

      {/* <!-- Section Skills --> */}
      <section className="skills" id="skills">
        <h2 className="heading">
          My <span>Skills</span>
        </h2>

        <div className="skills-row">
          <div className="skills-column">
            <h3 className="title">Coding Skills</h3>

            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                    HTML <span>5%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    CSS <span>5%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    JavaScript <span>1%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    Java <span>70%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    C <span>40%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    Python <span>10%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section Skills End --> */}

      <Contact />
      <Footer />
    </div>
  );
}
