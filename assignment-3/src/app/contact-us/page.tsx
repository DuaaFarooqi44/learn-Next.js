import Header from "@/app/components/header";
import Footer from "../footer/footer";

export default function Contact(){
    return(
        <div>
        <Header />
        
        <h1>Contact Me</h1>
        <div className="contact-links">
          <ul className="flex flex-col space-y-4">
            {/* GitHub */}
            <li>
              <a
                href="https://github.com/DuaaFarooqi44"
                target="_blank"
                className="text-blue-500"
              >
               Go to GitHub
              </a>
            </li>
  
            {/* LinkedIn */}
            <li>
              <a
                href="www.linkedin.com/in/duaa-farooqi-5b79b82b9"
                target="_blank"
                className="text-blue-500"
              >
                Go to LinkedIn
              </a>
            </li>
  
            {/* Gmail */}
            <li>
              <a
                href="duaafarooqui44@gmail.com"
                className="text-blue-500"
              >
                        Go to Gmail
              </a>
            </li>
          </ul>
        </div>
        <Footer/>
      </div>
      
  
    )
}
