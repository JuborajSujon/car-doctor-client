import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="py-10 lg:py-20">
      <div className="bg-[#151515] text-white py-10 md:py-16 lg:py-20 flex flex-col md:flex-row  items-center justify-around gap-6">
        <div className="flex gap-2 items-center">
          <FaRegCalendarAlt />
          <div>
            <p className="text-[10px]">We are open monday-friday</p>
            <h4 className="font-bold">7:00 am - 9:00 pm</h4>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <FaPhoneAlt />
          <div>
            <p className="text-[10px]">Have a question?</p>
            <h4 className="font-bold">+2546 251 2658</h4>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <IoLocationSharp />
          <div>
            <p className="text-[10px]">Need a repair? our address</p>
            <h4 className="font-bold">Liza Street, New York</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
