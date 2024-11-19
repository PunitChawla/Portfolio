import Globe from "react-globe.gl"
import { Button } from "../components/Button"
import { useState } from "react"

export const About = ()=>{

    const[hascopied, sethascopied] = useState(false);
    const handleCopy = ()=>{
        navigator.clipboard.writeText('chawlapunit79@gmail.com')
        sethascopied(true)

        setTimeout(() => {
            sethascopied(false)
        }, 2000);
    }
    return <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/public/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                    <div>
                        <p className="grid-headtext">
                            Hey i am Punit
                        </p>
                        <p className="grid-subtext">
                            With 1 year of experience , I have honed my skills in frontend and backend development</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-contanier">
                    <img src="/assets/grid2.jpg" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
                    <div>
                        <p className="grid-headtext">Tech stack </p>
                        <p className="grid-subtext">I spcialize in JavaScripts/TypeScripts with a focus on React and Next.js ecosystem  </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-4">
                <div className="grid-contanier">
                    <div className="rounded-3xl w-full sm:h-[326x]  h-fit  justify-center items-center">
                    <Globe
                        height={326}
                        width={326}
                        backgroundColor="rgba(0, 0, 0, 0)"
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        labelsData={[{ lat: 26, lng:  73, text: 'i am here ', color: 'black', size: 15 }]}
                        />
                    </div>
                    <div>
                    <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                   
                    <a href="#contact" className="w-fit">
                <Button name = "contact-me" isBeam  containerClass = "w-full mt-20" ></Button>
                </a>
                 
                    </div>
                </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        
            <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hascopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">chawlapunit79@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
}