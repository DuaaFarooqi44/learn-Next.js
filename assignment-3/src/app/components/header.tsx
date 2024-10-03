import Link from "next/link";
import Footer from "../footer/footer";



export default function Header(){
            return(
                <div className="header">
<ul className="header-buttons">

    <Link href={"/"}>
    <li>Home</li>
    </Link>


    <Link href={"/contact-us"}>
    <li>Contact us</li>
    </Link>

    <Link href={"/portfolio"}>
    <li>Portfolio</li>
    </Link>

    

    
</ul>

                
<Footer/>
                </div>
                
            )
}