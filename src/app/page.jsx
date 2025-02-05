import Logo from "@/components/navbar/Logo";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="w-full h-[4474px] relative bg-white  overflow-hidden">

      <Logo />
      <Navbar />

      <div className="w-[169px] h-9 left-[109px] top-[89.13px] absolute">
        <div className="w-[35.08px] h-[34.41px] left-0 top-[1.60px] absolute">
        </div>
      </div>


      <div className="w-[498px] h-[249px] left-[937px] top-[232px] absolute bg-[#272727] rounded-[29px]">
        <img src="/images/arrow-7.svg" alt="Arrow" className="absolute top-5 right-5" />
      </div>



      <div className="w-[344px] h-[301px] left-[485px] top-[672px] absolute bg-[#6f34d8] rounded-[29px]" />
      <svg className="w-[432px] h-[468px] left-[687px] top-[263px] absolute rounded-[20px]" xmlns="http://www.w3.org/2000/svg" width="432" height="468" viewBox="0 0 432 468" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 20C0 8.95431 8.9543 0 20 0H205C216.046 0 225 8.95432 225 20V188.128C225 192.62 226.512 196.982 229.293 200.51L256.783 235.382C260.575 240.192 266.364 243 272.49 243H412C423.046 243 432 251.954 432 263V448C432 459.046 423.046 468 412 468H227C215.954 468 207 459.046 207 448V289.908C207 285.416 205.488 281.055 202.707 277.527L167.305 232.618C163.513 227.808 157.725 225 151.599 225H20C8.95431 225 0 216.046 0 205V20Z" fill="#4974CE" />


        <image href="/images/arrow-7.svg" x="175" y="20" />
      </svg>

      {/* Best services */}

      <div className="w-[452px] h-[163px] left-[887px] top-[824px] absolute">
        <div className="w-[192.74px] h-[45px] left-0 top-0 absolute bg-[#5096ca]/0 rounded-[36px] border border-black flex items-center justify-center">
          <p className="text-center text-base font-normal font-['Poppins'] capitalize leading-tight">Desarrollo Back-End</p>
        </div>
        <div className="w-[192.74px] h-[45px] left-0 top-[60px] absolute bg-[#5096ca]/0 rounded-[36px] border border-black flex items-center justify-center bg-[#d9d9d9]" >
          <p className="text-center text-base font-normal font-['Poppins'] capitalize leading-tight">Desarrollo Full stack</p>
        </div>
        <div className="w-[192.74px] h-[45px] left-0 top-[118px] absolute bg-[#5096ca]/0 rounded-[36px] border border-black flex items-center justify-center" >
          <p className="text-center text-base font-normal font-['Poppins'] capitalize leading-tight">Dev-Ops</p>
        </div>
        <div className="w-[192.74px] h-[45px] left-[223px] top-0 absolute bg-[#5096ca]/0 rounded-[36px] border border-black flex items-center justify-center">
          <p className="text-center text-base font-normal font-['Poppins'] capitalize leading-tight">Desarrollo Front-End</p>
        </div>
        <div className="w-[192.74px] h-[45px] left-[223px] top-[60px] absolute bg-[#5096ca]/0 rounded-[36px] border border-black flex items-center justify-center">
          <p className="text-center text-base font-normal font-['Poppins'] capitalize leading-tight">Aseguramiento de calidad</p>
        </div>
        <div className="w-[192.74px] h-[45px] left-[223px] top-[118px] absolute bg-[#5096ca]/0 rounded-[36px] border border-black flex items-center justify-center">
          <p className="text-center text-base font-normal font-['Poppins'] capitalize leading-tight">Otros roles</p>
        </div>
      </div>





      <div className="w-[429px] h-[39px] left-[887px] top-[771px] absolute text-[#5096ca] text-[32px] font-normal font-['Poppins'] capitalize leading-10">Nuestros mejores Servicios</div>
      <div className="w-[201px] h-[303px] left-[936px] top-[179px] absolute bg-[#e8e8e8]" />
      <div className="w-[546px] h-48 left-[109px] top-[243px] absolute text-black text-[70px] font-semibold font-['Montserrat'] capitalize">Potenciamos<br />tu negocio</div>
      <div className="w-[502px] h-[47px] left-[109px] top-[450px] absolute"><span className="text-black text-lg font-light font-['Montserrat']">Con soluciones de diseño, construcción y <br />pruebas de software.<br /><br /></span><span className="text-black text-lg font-normal font-['Montserrat']">Empecemos un nuevo proyecto de software juntos.</span></div>
      <div className="w-[169px] h-[54px] left-[109px] top-[570px] absolute">
        <div className="w-[169px] h-[54px] left-0 top-0 absolute bg-gradient-to-r from-[#55b6c5] via-[#4974ce] to-[#6f34d8] rounded-[15px]" />
        <div className="w-[124px] h-[30px] left-[23px] top-[12px] absolute text-center text-white text-base font-semibold font-['Poppins'] capitalize">contáctanos</div>
      </div>
      <div className="w-[169px] h-[54px] left-[109px] top-[1700px] absolute">
        <div className="w-[169px] h-[54px] left-0 top-0 absolute bg-gradient-to-r from-[#55b6c5] via-[#4974ce] to-[#6f34d8] rounded-[15px]" />
        <div className="w-[124px] h-[30px] left-[23px] top-[12px] absolute text-center text-white text-base font-semibold font-['Poppins'] capitalize">contáctanos</div>
      </div>
      <div className="w-[119px] h-[119px] left-[1206px] top-[586px] absolute">
        <div className="w-[113px] h-[113px] left-[6px] top-[6px] absolute bg-[#4974ce] rounded-full" />
        <div className="w-[113px] h-[113px] left-0 top-0 absolute bg-[#222222] rounded-full" />
      </div>
      <div className="w-[1299px] h-[615px] left-[114px] top-[1053px] absolute">
        <div className="w-[660px] h-[90px] left-0 top-0 absolute text-black text-[56.81px] font-semibold font-['Montserrat']">Sobre Nosotros</div>
        <div className="w-[731px] h-[496px] left-[3px] top-[90px] absolute text-black text-lg font-normal font-['Montserrat'] leading-loose">Somos un equipo apasionado por la tecnología, dedicados a crear soluciones de software innovadoras que impulsan el éxito empresarial. Con una rica trayectoria en la entrega de productos personalizados y de alta calidad, nos enorgullecemos de nuestra capacidad para combinar creatividad con experiencia técnica.<br />Nuestros servicios de Outsourcing están diseñados para ofrecer a su empresa acceso a talento de desarrollo de software de primer nivel, sin la necesidad de mantener un equipo interno. Ofrecemos soluciones flexibles y escalables adaptadas a sus necesidades específicas, ya sea que busque reforzar su equipo existente o externalizar un proyecto completo. Nuestros profesionales altamente capacitados aportan experiencia en diversas tecnologías e industrias, asegurando que su proyecto sea manejado con precisión y eficiencia. Al asociarse con nosotros, obtiene la ventaja de nuestros ágiles procesos de desarrollo, soluciones rentables y el compromiso de entregar resultados de alta calidad a tiempo. Deje que nosotros nos encarguemos de las complejidades técnicas, para que usted pueda enfocarse en llevar su negocio al siguiente nivel.</div>
        <div className="w-[511px] h-[558px] left-[788px] top-[57px] absolute bg-gradient-to-b from-[#d6d6d6] via-[#d6d6d6] to-[#55b6c5] rounded-[78px]"></div>
      </div>

      <div className="w-full h-[369px] absolute top-[1840px] bg-[#4974ce]" />

      <div className="w-[1317px] h-[593.71px] left-[115px] top-[3191px] absolute">
        <div className="w-[1317px] h-[593.71px] left-0 top-0 absolute">
          <div className="w-[558.66px] h-[438.65px] left-[758.34px] top-0 absolute bg-[#c4c4c4] rounded-3xl" />
          <div className="w-[121.08px] h-[28.68px] left-[7.43px] top-[16.99px] absolute text-[#1e1e1e] text-lg font-normal font-['Poppins']">Testimonios</div>
          <div className="w-[751.96px] h-[140.20px] left-0 top-[82.84px] absolute text-[#1e1e1e] text-[55px] font-medium font-['Lato']">100+ Lorem ipsum</div>
          <div className="w-[500.25px] h-[311.19px] left-[521.49px] top-[282.52px] absolute">
            <div className="w-[500.25px] h-[311.19px] left-0 top-0 absolute bg-white rounded-[30px]">
              <img src="/images/quotes.svg" alt="quote" className="absolute left-10 top-10" />
            </div>
            <div className="w-[431.20px] h-[50.98px] left-[42.70px] top-[85.34px] absolute text-[#313131] text-sm font-medium font-['Public Sans']">Lorem ipsum dolor amet, consectetur adipiscing elit, sed</div>
            <div className="w-[109.40px] h-[20.18px] left-[123.13px] top-[252.58px] absolute text-[#313131] text-base font-normal font-['Public Sans']">ipsum</div>
            <div className="w-[98.78px] h-[20.18px] left-[123.13px] top-[228.37px] absolute text-[#1e1e1e] text-base font-bold font-['Public Sans']">Lorem</div>
            <div className="w-[50.98px] h-[50.98px] left-[47.79px] top-[225.16px] absolute bg-[#c4c4c4] rounded-full" />
          </div>
          <div className="w-[500.25px] h-[311.19px] left-0 top-[282.52px] absolute">
            <div className="w-[500.25px] h-[311.19px] left-0 top-0 absolute">
              <img src="/images/quotes.svg" alt="quote" className="absolute left-10 top-10" />
            </div>
            <div className="w-[431.20px] h-[50.98px] left-[42.70px] top-[85.34px] absolute text-[#313131] text-sm font-medium font-['Public Sans']">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
            <div className="w-[56.29px] h-[20.18px] left-[123.13px] top-[252.58px] absolute text-[#313131] text-base font-normal font-['Public Sans']">ipsum</div>
            <div className="w-[112.58px] h-[20.18px] left-[123.13px] top-[228.37px] absolute text-[#1e1e1e] text-base font-bold font-['Public Sans']">Lorem</div>
            <div className="w-[50.98px] h-[50.98px] left-[47.79px] top-[225.16px] absolute bg-[#c4c4c4] rounded-full" />
          </div>
        </div>
        <div className="w-[169px] h-[54px] left-[1118px] top-[487px] absolute">
          <div className="w-[169px] h-[54px] left-0 top-0 absolute bg-gradient-to-r from-[#55b6c5] via-[#4974ce] to-[#6f34d8] rounded-[15px]" />
          <div className="w-[124px] h-[30px] left-[23px] top-[12px] absolute text-center text-white text-base font-semibold font-['Poppins'] capitalize">contáctanos</div>
        </div>
      </div>




      <div className="w-[1400px] h-[850px] left-[78px] top-[2262px] absolute">

        <div className="w-[671px] h-[432.72px] left-0 top-0 absolute">
          <div className="w-[640px] h-[69px] left-[31px] top-0 absolute text-black text-[56.81px] font-semibold font-['Montserrat']">Soluciones</div>
        </div>


        <div className="top-[125px] absolute"> <img src="/images/folder.png" alt="folder" /> </div>
        <div className="top-[125px] left-[455px] absolute"> <img src="/images/folder.png" alt="folder" /> </div>
        <div className="top-[125px] left-[910px] absolute"> <img src="/images/folder.png" alt="folder" /> </div>
        <div className="top-[490px] left-[665px] absolute"> <img src="/images/folder.png" alt="folder" /> </div>
        <div className="top-[490px] left-[205px] absolute"> <img src="/images/folder.png" alt="folder" /> </div>





      </div>

      <div className="w-[198px] h-[58px] left-[322px] top-[2369px] absolute text-[#272727] text-3xl font-semibold font-['Montserrat']">Desarrollo de Software</div>
      <div className="w-[198px] h-[58px] left-[774px] top-[2369px] absolute text-[#272727] text-3xl font-semibold font-['Montserrat']">Desarrollo Front-end</div>
      <div className="w-[198px] h-[58px] left-[1226px] top-[2369px] absolute text-[#272727] text-3xl font-semibold font-['Montserrat']">Desarrollo Back-end</div>
      <div className="w-[215px] h-[58px] left-[530px] top-[2734px] absolute text-[#272727] text-3xl font-semibold font-['Montserrat']">Desarrollo Full-stack</div>
      <div className="w-[403px] h-[74px] left-[996px] top-[2734px] absolute text-[#272727] text-3xl font-semibold font-['Montserrat']">Desarrollo de Aplicaciones Móviles</div>
    </div>
  );
}
