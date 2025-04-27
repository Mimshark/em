
import { useEffect, useState } from 'react'
import Toast from 'react-bootstrap/Toast';
import { Helmet } from 'react-helmet';

export default function Contact() {
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showB, setShowB] = useState(false);
  const [alertMessageB, setAlertMessageB] = useState('');

  const [inputs, setInputs] = useState({
    fullname: '',
    email: '',
    phoneno: '',
    subject: '', // Provide a default value for the title
    messsage: '', // Provide a default value for the post_id
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.put('http://localhost/rest_api/classes/userMaster.php?f=send_email', inputs)
      .then((response) => {
        if (response.data.status === 1) {
          setAlertMessage(response.data.message)
          setShow(true);
          document.getElementById('fullname').value = '';
          document.getElementById('email').value = '';
          document.getElementById('phoneno').value = '';
          document.getElementById('subject').value = '';
          document.getElementById('messsage').value = '';
    
        } else {
          setAlertMessageB(response.data.message)
          setShowB(true)
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
}, [])

const logo = window.location.origin+'/flickloaded.jpg';

  return (
    <>

     {/* Set meta tags using Helmet */}
     <Helmet>
      
      <title>mimshark | Contact</title>
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Flickloaded | Contact" />
      <meta property="og:image" content={logo} />
      <meta property="og:description" content="Welcome to the FlickLoaded, your gateway to the latest updates and thrilling content from the dynamic world of news. Explore, stay informed, and immerse yourself in the excitement of the ever-evolving stories we bring to you." />
      <meta property="og:url" content="https://flickloaded.com/#/page/contact/" />

      <meta name="twitter:card" content={`summary_large_image`} />
      <meta name="twitter:title" content="Flickloaded | Contact" />
      <meta name="twitter:description" content="Welcome to the FlickLoaded, your gateway to the latest updates and thrilling content from the dynamic world of news. Explore, stay informed, and immerse yourself in the excitement of the ever-evolving stories we bring to you." />
      <meta name="twitter:image" content={logo} />
      <meta name="twitter:url" content="https://flickloaded.com/#/page/contact/" />

  </Helmet>

    <div class="blog-area pb-5" style={{marginTop: '10rem'}}>


<div class="themeix-page-title-area py-4 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  </div>
<div class="container pt-5">
    <div class="row">
        <div class="col-xl-7 col-lg-7">
            <div class="contact-info-block mb-3 pe-5">
               
                <p class="pb-2  ">Welcome to the FlickLoaded, your gateway to the latest updates and thrilling content from the dynamic world of news. Explore, stay informed, and immerse yourself in the excitement of the ever-evolving stories we bring to you.</p>
                <ul class="list-unstyled">
                    <li class="mb-2"><i class="fas fa-map-marker-alt me-2"></i>Lagos ,Lagos Nigeria
                    </li>
                    <li class="mb-2"><i class="fas fa-phone me-2"></i>+2348142915643 / +2348165745043</li>
                    <li class="mb-2"><a href="mailto:info@flickloaded.com"><i class="fas fa-envelope me-2"></i>info@flickloaded.com</a></li>
                </ul>
            </div>

            {/* <div id="accordion-faq">
                <div class="card">
                  <div class="card-header  mb-1" id="headingOne">
                      <button class="btn btn-link bg-light" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                        Pork kevin burgdoggen swine?
                      </button>
                  </div>

                  <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
                    <div class="card-body">
                      Short ribs tri-tip shankle, pork biltong bacon porchetta burgdoggen rump pork chop short loin tenderloin meatball spare ribs shoulder porchetta.
                    </div>
                  </div>
                </div> 
                <div class="card">
                  <div class="card-header  mb-1" id="headingTwo">
                      <button class="btn btn-link bg-light collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false">
                       Capicola short ribs sausage turducken?
                      </button>
                  </div>
                  <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                      Et pri affert debitis alienum, libris impetus ex ludus ex democritum adolescens mea et, te quot has mundi posidonium has
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header mb-1" id="headingThree">
                      <button class="btn btn-link bg-light collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false">
                        meatloaf biltong burgdoggen?
                      </button>
                  </div>
                  <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                         Et pri affert debitis alienum, libris impetus ex ludus ex democritum adolescens mea et, te quot has mundi posidonium has
                    </div>
                  </div>
                </div>
              </div> */}
        </div>
                         
        <div class="col-xl-5 col-lg-5">
            <div class="contact-form">
                <h2 class="text-secondary mb-2">Send Us Message</h2>
                <p>Please fill up the form bellow with your valuable opinion, feedback or any suggession to us
                </p>
                <form onSubmit={handleSubmit} data-aos="fade-in" class="form pt-2">
                    <div class="row">
                        <div class="col-xl-6 mb-2">
                            <input class="form-control contact-input" name="fullname" id="fullname" onChange={handleChange} type="text" placeholder="Full Your Name" required/>
                        </div>
                        <div class="col-xl-6 mb-2">
                            <input class="form-control contact-input" name="email" id="email"  onChange={handleChange} type="email" placeholder="Email Address" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 mb-2">
                            <input class="form-control contact-input" name="phoneno" id="phoneno" onChange={handleChange} type="tel" placeholder="Phone Number" required />
                        </div>
                        <div class="col-xl-6 mb-2">
                            <input class="form-control contact-input" name="subject" id="subject" onChange={handleChange} type="text" placeholder="Subject" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mb-2">
                            <textarea class="form-control contact-input" name="messsage" id="messsage" onChange={handleChange}
                                placeholder="Write Message" required></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="subs-btn">
                                <button type="submit" class="btn btn-danger bg-hover-danger text-white">Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>




</div>
   {/* <!-- Toast Container --> */}
   <div className="position-fixed top-0 end-0 p-3" style={{zIndex: '100000'}}>
                <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                    />
                    <strong className="me-auto">Sucess ✔️</strong>
                    
                </Toast.Header>
                <strong>
                <Toast.Body>{alertMessage}</Toast.Body></strong>
                </Toast>
             </div>

             <div className="position-fixed top-0 end-0 p-3" style={{zIndex: '100000'}}>
                <Toast onClose={() => setShowB(false)} show={showB} delay={5000} autohide>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                    />
                    <strong className="me-auto">Error ⚠️❗</strong>
                    
                </Toast.Header>
                <strong>
                <Toast.Body>{alertMessageB}</Toast.Body></strong>
                </Toast>
             </div>
    </>
  )
}
