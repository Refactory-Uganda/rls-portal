import media from "../../../assets/mediaicons.json"

function Footer(){
    return(
        <>
            <div className="footer bg-purple ">
                <div className="wrapperfooter md:grid grid-cols-2 w-[90%] m-auto">
                    <div className="location ">
                        <img src="/img/refactoryWhite.png"  className="w-40 m-2 p-2" alt="Refactory" />
                        <p className="text-white p-2 ">
                        Refactory is a tech program developed in partnership with the tech sector.We are the industry&apos;s blueprint for hiring developers.
                        </p>
                        <span className="mediasvgs flex">
                            { media.map((icon)=>(
                                <a key={icon.id} href={icon.link} className="border-bluegreen border-solid border-2 p-2 rounded-5sm mx-2 my-1"> 
                                <img src={icon.src} className="h-5" alt="" />
                                </a>
                            ))   
                        } 
                        </span>
                    </div>
                    <div className="links p-1 md:p-4">
                        <h1 className="p-2 text-white text-sm">MORE ON REFACTORY</h1>
                        <ul className="p-2 text-white">
                            <li><a href="#" className="text-white">Contact</a></li>
                            <li><a href="#"  className="text-white">Blog</a></li>
                            <li><a href="#"  className="text-white">Help</a></li>
                            <li><a href="#"  className="text-white">Notifactions</a></li>
                            <li><a href="#"  className="text-white">Partners</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Footer