import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
export const Contact = ()=>{

    const [loading , setLoding] = useState(false)
    const formRef = useRef();
    const [form , setForm] = useState({
        name : '', 
        email : '',
        message : ''
    })
    const handleOnChange = ({target : {name ,value}}) =>{
        setForm({...form , [name]: value})
        // service_d3cdzae
    }
    const handleOnSumbit = async(e) =>{
        e.preventDefault();
        setLoding(true)

        try {
           await emailjs.send('service_d3cdzae','template_oj46d4p',{
                from_name : form.name,
                to_name : 'Punit',
                from_email : form.email,
                to_email : 'chawlapunit79@gmail.com',
                message : form.message
            },'jo3jDEFHVH-V0Lwql'
            )
            setLoding(false)
            alert('your message has been sent!')
            setForm({
                name : '',
                email : '',
                message : ''
            })
        } catch (error) {
            setLoding(false)
            console.log(error)
            alert('Something went wrong')
        }
    }
    return(
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal_background" className="absolute inset-0 mih-h-screen"/>
                <div className="contact-container">
                 <h3 className="head-text">let's talk </h3>
                 <p className="text-lg text-white-600">
                    Whether you're looking to build a new website improve your existing platform or bring a unigue project to life , I'm here to help
                 </p>

                 <form ref={formRef} onSubmit={handleOnSumbit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleOnChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleOnChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleOnChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
                </div>
            </div> 
        </section>
    )
}