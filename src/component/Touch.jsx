import React, { useState, useEffect, useRef } from 'react';
import '../component/style/touch.css';

export default function Touch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tele: '',
    notice:''
    
  });

  

  const textareaRef = useRef(null);
  const handleSubmit =(e)=>{
    return
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    const handleKeyUp = (e) => {
      e.target.style.height = "auto"; 
      let scrollHeight = e.target.scrollHeight;
      e.target.style.height = `${scrollHeight}px`;
    };

    if (textarea) {
      textarea.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener('keyup', handleKeyUp);
      }
    };
  }, []);

  return (
    <>
      <p className='text-4xl text-slate-600 text-center pb-10'>Get in touch with us</p>
      <div className='TouchContainer'>
        <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill" />
          </svg>
        </div>
        <form  className='ClasseForm' action='' onSubmit={(e)=>handleSubmit(e)} >
        <div className="dataClient">
          
                      <div className='input-group'>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder='Put Your Name'
                        />
                        <label htmlFor="name">Name</label>
                      </div>

                      <div className='input-group'>
                        <input 
                          type="text"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder='Put Your Email Address'
                        />
                        <label htmlFor="email">Email Address</label>
                      </div>
                      <div className='input-group'>
                        <input
                          type="text"
                          name="tele"
                          id="tele"
                          value={formData.tele}
                          onChange={handleChange}
                          placeholder='Put Your Phone Number'
                        />
                        <label htmlFor="tele">Phone Number</label>
                      </div>
        </div>
        <div className='reviewclasse'>
                  <div className="notice">
                    <div >Review || MSG</div>
                    <textarea name="message" id="message" placeholder='Type Something Here' required ref={textareaRef}></textarea>
                  </div>
                  <input className='submitBtn' type="submit" value="Submit"  />
        </div>
       
        </form>
        
      </div>
    </>
  );
}
