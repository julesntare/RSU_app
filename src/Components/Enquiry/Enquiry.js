import React , {useRef, useState} from "react";
import "./Enquiry.scss";

const Enquiry = () => {
  const namesRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const commentRef = useRef();
  const [verifySent, setVerifySent] = useState(false)
  const handleEnquirySubmit=(e)=>{
    e.preventDefault();
    const dataMessage={
      name: namesRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      comment: commentRef.current.value
    }
    console.log(dataMessage);
    if(dataMessage){
      setVerifySent(true);
      setTimeout(()=>setVerifySent(false), 2000);
    }
  }

  return (
      <div className='container-fluid  comment-section mt-5 row h-100 w-100'>
        <div className=" col-12 col-sm-4 col-md-6 d-flex flex-column align-items-center fw-bold">
          <div className="anvelope-box mt-3">
              <i className="bi anvelope display-1 text-primary bi-envelope-at"></i>
          </div>
          <div className="mt-auto contacts d-flex flex-column align-items-center justify-content-center">
              <p className=" text-center mb-3">Contact us here </p>
              <div className=" d-flex flex-column px-1 px-md-5 py-2">
                    <a className="mb-3"  href="tel:+6494461709">
                        <span className="me-1 me-md-3"><i className="bi bi-telephone "></i></span>
                        <span >+25078 00 00 00</span>
                    </a>
                    <a className="mb-3" href="mailto:cst@ac.rw?Subject=My%20Query">
                         <span className="me-1 me-md-3"><i className="bi  bi-envelope-at-fill"></i></span>
                          <span>cst@ac.rw</span>
                      </a>
                </div>
          </div>
        </div>
        <div className="col-12 col-sm-8 col-md-6 bg-white border  ">
        { verifySent &&<p className="  verified p-2 px-3 position-absolute t-0 text-white fw-bold text-center fs-md bg-success">
                <i className="bi bi-check2-all me-4"></i>
                Thank you so much for the message
               </p>}
        <h1 className="my-3 text-center fw-bold text-primary h3">Get in touch</h1>
        <form onSubmit={handleEnquirySubmit} className="d-flex flex-column justify-content-center form-enquiry p-2">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Names</label>
            <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Eg: John Doe "  ref={namesRef} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Eg: johndoe@gmail.com"  ref={emailRef} required />
          </div>
          <div className="mb-3">
          <label htmlFor="phone" className="form-label">Enter a phone number:</label>
          <input type="tel"  className="form-control" id="phone" name="phone" placeholder="Eg: +250 -- -- --- " required  ref={phoneRef} />
          </div>
          <div className="form-group mb-2">
          <label htmlFor="exampleFormControlTextarea1">Comment</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write us a message" ref={commentRef} required></textarea>
        </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
      </div>
  )
}
export default Enquiry
