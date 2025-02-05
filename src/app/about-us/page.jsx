import Logo from "@/components/navbar/Logo";
import Navbar from "@/components/navbar/Navbar";

export default function AboutUs() {
    return (
        <div className="w-[1512px] h-[3691px] relative bg-white  overflow-hidden">
            <Logo />
            <Navbar />
            <div className="w-[1326px] h-[664px] left-[93px] top-[219px] absolute">
                <div className="w-[470px] h-[411px] left-[856px] top-[42px] absolute bg-[#c4c4c4] rounded-[17px]" />
                <div className="w-[420.42px] h-[291.64px] left-[657px] top-[307.42px] absolute bg-[#4974ce] rounded-[17px]" />
                <div className="w-[466px] h-[85px] left-0 top-0 absolute text-black text-[56.81px] font-semibold font-['Montserrat']">Quiénes somos</div>
                <div className="w-[637px] h-[576px] left-0 top-[88px] absolute text-black text-lg font-normal font-['Montserrat'] leading-loose">Somos un equipo apasionado por la tecnología, dedicados a crear soluciones de software innovadoras que impulsan el éxito empresarial. Con una rica trayectoria en la entrega de productos personalizados y de alta calidad, nos enorgullecemos de nuestra capacidad para combinar creatividad con experiencia técnica.<br /><br />Nuestros servicios de Outsourcing están diseñados para ofrecer a su empresa acceso a talento de desarrollo de software de primer nivel, sin la necesidad de mantener un equipo interno. Ofrecemos soluciones flexibles y escalables adaptadas a sus necesidades específicas, ya sea que busque reforzar su equipo existente o externalizar un proyecto completo. Nuestros profesionales altamente capacitados aportan experiencia en diversas tecnologías e industrias, asegurando que su proyecto sea manejado con precisión y eficiencia. Al asociarse con nosotros, obtiene la ventaja de nuestros ágiles procesos de desarrollo, soluciones rentables y el compromiso de entregar resultados de alta calidad a tiempo. Deje que nosotros nos encarguemos de las complejidades técnicas, para que usted pueda enfocarse en llevar su negocio al siguiente nivel.<br /></div>
            </div>



            <div className="w-[1510px] h-[702px] left-[1px] top-[1669px] absolute">
                <div className="w-[1510px] h-[702px] left-0 top-0 absolute bg-[#4974ce]" />

                <div className="w-[505px] h-[93px] left-[506px] top-[55px] absolute text-white text-[56.81px] font-semibold font-['Montserrat']">
                    Nuestros Valores
                </div>

                <div className="flex justify-center gap-10 absolute left-[50%] top-[182px] translate-x-[-50%]">
                    {/* card 1 */}
                    <div className="w-[310px] h-[441px] bg-white rounded-[30px] shadow-[5px_4px_16.6px_4px_rgba(0,0,0,0.25)] flex flex-col items-center p-5">
                        <h2 className="text-[#272727] text-3xl font-semibold font-['Montserrat'] min-h-[80px] flex items-center text-center">
                            Calidad
                        </h2>
                        <p className="text-black text-lg font-normal font-['Montserrat'] leading-loose text-center">
                            Nos enfocamos en entregar soluciones de software con altos estándares de excelencia, asegurando funcionalidad, confiabilidad, eficiencia y durabilidad a través de rigurosos procesos de calidad.
                        </p>
                    </div>

                    {/* card 2 */}
                    <div className="w-[310px] h-[441px] bg-white rounded-[30px] shadow-[5px_4px_16.6px_4px_rgba(0,0,0,0.25)] flex flex-col items-center p-5">
                        <h2 className="text-[#272727] text-3xl font-semibold font-['Montserrat'] min-h-[80px] flex items-center text-center">
                            Transparencia
                        </h2>
                        <p className="text-black text-lg font-normal font-['Montserrat'] leading-loose text-center">
                            Promovemos comunicación abierta y constante para garantizar visibilidad total de los proyectos, fortaleciendo la confianza y la colaboración con nuestros clientes.
                        </p>
                    </div>

                    {/* card 3 */}
                    <div className="w-[310px] h-[441px] bg-white rounded-[30px] shadow-[5px_4px_16.6px_4px_rgba(0,0,0,0.25)] flex flex-col items-center p-5">
                        <h2 className="text-[#272727] text-3xl font-semibold font-['Montserrat'] min-h-[80px] flex items-center text-center">
                            Responsabilidad
                        </h2>
                        <p className="text-black text-lg font-normal font-['Montserrat'] leading-loose text-center">
                            Asumimos el compromiso de cumplir nuestras promesas y garantizar que nuestras soluciones generen un impacto positivo, alineándose con los objetivos de nuestros clientes.
                        </p>
                    </div>

                    {/* card 4 */}
                    <div className="w-[310px] h-[441px] bg-white rounded-[30px] shadow-[5px_4px_16.6px_4px_rgba(0,0,0,0.25)] flex flex-col items-center p-5">
                        <h2 className="text-[#272727] text-3xl font-semibold font-['Montserrat'] min-h-[80px] flex items-center text-center">
                            Enfoque en <br />el cliente
                        </h2>
                        <p className="text-black text-lg font-normal font-['Montserrat'] leading-loose text-center">
                            Ponemos al cliente en el centro de nuestras operaciones, priorizando sus necesidades y colaborando estrechamente para lograr soluciones alineadas con su visión y éxito compartido.
                        </p>
                    </div>
                </div>
            </div>





            <div className="w-[1300px] h-[607px] left-[106px] top-[925px] absolute">
                <div className="w-[466px] h-[85px] left-[663px] top-0 absolute text-black text-[56.81px] font-semibold font-['Montserrat']">Misión</div>
                <div className="w-[466px] h-[85px] left-[663px] top-[315px] absolute text-black text-[56.81px] font-semibold font-['Montserrat']">Visión</div>
                <div className="w-[637px] h-[204px] left-[663px] top-[88px] absolute text-black text-lg font-normal font-['Montserrat'] leading-loose">Nuestra misión es empoderar a las empresas proporcionándoles las herramientas que necesitan para prosperar en un entorno digital competitivo. Guiados por nuestros valores fundamentales de calidad, transparencia y enfoque en el cliente, abordamos cada proyecto con un compromiso con la excelencia y una profunda comprensión de las necesidades únicas de nuestros clientes.</div>
                <div className="w-[637px] h-[204px] left-[663px] top-[403px] absolute text-black text-lg font-normal font-['Montserrat'] leading-loose">Nuestra visión en Q'allta es ser el socio preferido para las empresas que buscan soluciones de software innovadoras y de alta calidad que impulsen el éxito a largo plazo. Aspiramos a establecer el estándar en la industria del software al entregar de manera constante soluciones personalizadas, escalables y rentables que permitan a nuestros clientes prosperar en un panorama digital en constante evolución. Nuestro objetivo final es convertirnos en un líder confiable en la comunidad tecnológica global, reconocidos por nuestra dedicación a la excelencia, la transparencia y la satisfacción del cliente.</div>
            </div>
            <div className="w-[1289.28px] h-[428px] left-[111px] top-[2438px] absolute">
                <div className="w-[610px] h-[93px] left-0 top-0 absolute text-black text-[56.81px] font-semibold font-['Montserrat']">¿Cómo Trabajamos?</div>
                <div className="w-[303px] h-[310px] left-[524px] top-[118px] absolute bg-[#c4c4c4] rounded-[20px]" />
                <div className="w-[195px] h-[200px] left-[1063px] top-[158px] absolute bg-[#c4c4c4] rounded-[20px]" />
                <div className="w-[196px] h-[200px] left-[847px] top-[158px] absolute bg-[#c4c4c4] rounded-[20px]" />
                <div className="w-[131px] h-[46px] left-[869px] top-[369.50px] absolute text-[#1c1c1c] text-base font-medium font-['Poppins']">Colaboraciones a Largo Plazo    </div>
                <div className="left-[1083px] top-[375px] absolute text-[#1c1c1c] text-base font-medium font-['Poppins']">Flexibilidad</div>
            </div>

            <div className="w-[455px] h-[258px] left-[111px] top-[2576px] absolute">
                <div className="w-[455px] left-0 top-0 absolute text-[#1c1c1c] text-3xl font-semibold font-['Montserrat']">Nuestro Enfoque para el Desarrollo de Software Productivo</div>
                <div className="w-[401px] left-[4px] top-[130px] absolute text-[#515151] text-lg font-normal font-['Montserrat'] leading-loose">En Q'allta, garantizamos que nuestras soluciones te ayuden a superar obstáculos, fomentando un proceso de desarrollo efectivo y eficiente.</div>
            </div>
        </div>

    )
}
