import '../assets/ApplicationPopup.css'

 function ApplicationPopup({setShowPopup}) {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center pop-up  ">
        <div className='pop-content text-center bg-secondary'>
           <div>
             <p>Thanks for contacting us</p>
            <p>Your request will be reviewed in the next 24 hours</p>
             <i
            className="bi bi-x-lg cancel-btn "
            onClick={() => setShowPopup(false)}
          ></i>
           </div>
        </div>

    </div>
    
    </>
  )
}
export default ApplicationPopup