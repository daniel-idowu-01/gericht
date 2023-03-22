import { CiLocationOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineClockCircle } from 'react-icons/ai'
import ContactItem from './ContactItem'

function Contact() {

    const deadLInk = (event) => {
        event.preventDefault()
    }
    
    return (
        <div className="bg-black text-white h-full pb-40 pt-5">
            <h1 className="text-4xl text-center text-goldcolor">Contact Us</h1>
            <div className='mt-5 md:flex p-10'>
                <div className="grid grid-flow-row md:grid-cols-2 md:w-1/2">
                    <ContactItem icon={<CiLocationOn />} title='Address' desc='17 ABC Road, Fina, QUA'  />
                    <ContactItem icon={<BsTelephone />} title='Call Us' desc='(555) 123-4567' desc2='(888) 555-7890'  />
                    <ContactItem icon={<MdOutlineEmail />} title='Email' desc='testuser1@gmail.com' desc2='testuser2@gmail.com'  />
                    <ContactItem icon={<AiOutlineClockCircle />} title='Opening Hours' desc='Monday - Saturday' desc2=' 7:00AM - 8:00PM' />
                </div>

                <div className='mt-10 md:mt-5 h-auto'>
                    <form>
                        <input className='bg-transparent border p-2 px-5 outline-none mr-2 w-full md:w-auto' type="text" placeholder='Your Name' />
                        <input className='bg-transparent border p-2 px-5 outline-none mt-5 md:mt-0 w-full md:w-auto' type="email" placeholder='Your Email' /> <br /><br />
                        <input className='bg-transparent border p-2 px-5 outline-none w-full' type="text" placeholder='Subject' /> <br /><br />
                        <textarea className='h-48 bg-transparent border p-2 px-5 outline-none w-full'  placeholder='Message' /> <br /><br />
                        <button onClick={deadLInk} className='bg-goldcolor text-black p-2 px-5 hover:opacity-75 hover:text-white' type="submit">Submit</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;