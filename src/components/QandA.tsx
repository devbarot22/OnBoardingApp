import { useState, useEffect} from 'react'
import { IoMdCheckmark } from 'react-icons/io'
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import ScrollProgressBar from 'react-scroll-progress-bar';


const options = [
  'Create an online course',
  'Create a coaching program',
  'Create a digital downloads',
  'Create a community or forum',
  'Create a pre-sell',
  "I'm not sure yet",
  'Something else (please tells us more)'
];

const questions = [
  {
    label: 'Do you currently run an online business?',
    options: ['Yes, I run a full-time online business', 'Yes, but its a side business', 'No', 'planning to start one', 'No, just exploring!']
  },
  {
    label: 'I primarily identify as a:',
    options: ['Entrepreneur', 'Freelancer or consultant (project based work)', 'Content Creator', 'self-employed']
  },
  {
    label: 'Are you already teaching or offering content online?',
    options: ['Yes, Creating content online', 'No, I am just getting started sharing my knowledge']
  },
  {
    label: 'How big is your current audience (email list, social media followers, subscribers, etc.)?',
    options: ['0-1000 people', '1k-10k people', '10k-100k people', '100k-1M people', 'More than 1M people']
  },
  {
    label: 'Which topic is most relevant to your business or content?',
    options: ['Marketing', 'Finance', 'Sales', 'Technology', 'Photo & Video', 'Other']
  },
  {
    label: 'Approximately how much money do you make charging for your knowledge today (in courses, consulting, books, speaking, etc.)? We ask this so that we can provide you with relevant resources for the size and stage of your business.',
    options: ['$10-$50 per hour', '$50-$200 per hour', '$200-$500 per hour', 'I prefer not to answer']
  }
  // Just need to update data here and it will render in UI....Clean and Understandable.
];


const QandA = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [isInitialRender, setIsInitialRender] = useState(true);

  const handleChange = (event: any) => {
    setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialRender(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);



  return (
    <>
    <div style={{borderTopRightRadius:"20px", borderBottomRightRadius:"10px", overflow: "hidden"}}>
      <ScrollProgressBar bgcolor="#7FFFD4" height="7px" />
    </div>
      <div className="w-screen h-screen flex flex-col items-center">
        <div className="flex flex-col w-[49vw] max-md:w-[90vw] h-screen">
          <div className="">
            <h1 className="text-4xl mt-12 mb-6 font-medium">Tell us little more about yourself</h1>
            <p className="font-medium mb-8">Your answer will help us build an experience to match your needs</p>
          </div>
          <div className="flex flex-col">
            {questions.map((question, index) => (
              <div key={index} className='mt-5'>
                <label htmlFor={`question${index}`} className='mt-6'>{question.label}</label>
                <select className="block w-full py-2 rounded-md pl-5 bg-transparent cursor-pointer border-2 mt-3">
                  <option value="" disabled selected>Please choose an option...</option>
                  {question.options.map((option, i) => (
                    <option key={i} value={`option${i + 1}`}>{option}</option>
                  ))}
                </select>
              </div>
            ))}

            <label htmlFor="" className='mt-6'>What are you hoping to do first in Teachable? (Select up to 3 to get started as quickly as possible)</label>
            {options.map((option: any, index: any) => (
              <div className='flex' key={index}>
                <label className="relative border w-[18px] mt-1 h-[18px] p-0 rounded-[4px] flex justify-center items-center">
                  <input
                    type="checkbox"
                    name={option}
                    className="opacity-0 absolute cursor-pointer"
                    checked={checkedItems[option] || false}
                    onChange={handleChange}
                  />
                  {checkedItems[option] && <IoMdCheckmark size={20} style={{ backgroundColor: "#0FFF50", color: "white", borderRadius: "4px" }} />}
                </label>
                <label htmlFor={option} className='ml-2  text-wrap'>{option}</label>
              </div>
            ))}


            <label htmlFor="business" className='mt-6'>How much content or training material (videos, worksheets, downloads, etc.) have you already prepared?</label>
            <select className="block w-full py-2 rounded-md pl-5 bg-transparent cursor-pointer border-2 mt-1">
              <option value="" disabled selected className='text-gray-400'>Please choose an option...</option>
              <option value="option3">Enough for multiple courses.</option>
              <option value="option2">Enough for one full course.</option>
              <option value="option1">Some, but not enough for a full course.</option>
              <option value="option4">None, I am just getting started.</option>
            </select>
            <div className="flex justify-end">
              <button type='submit' className="py-[6px] px-10 rounded-md mt-10 mb-16 border-2 border-black outline-none"><a href="# ">Next</a></button>
            </div>
          </div>
        </div>
        <div className='fixed right-0 top-1/2 -translate-y-1/2'>
          <a href="#">
          <button type='button' className={`flex bg-black text-white py-2 max-sm:hidden ${isInitialRender ? 'w-auto px-4' : 'w-2 pl-3 max-md:pl-[7px] hover:px-4 hover:w-auto'} rounded-md mr-5 transition-all ease-out duration-300`} >
            <HiOutlineQuestionMarkCircle size={26} /><h1 className='ml-2'>Help</h1>
          </button>
          <button type='button' title='Help' className={`flex bg-black text-white py-2 sm:hidden ${isInitialRender ? 'w-auto px-4' : 'w-2 pl-3 max-md:pl-[7px] hover:px-4 hover:w-auto'} rounded-md mr-2 transition-all ease-out duration-300`} >
            <HiOutlineQuestionMarkCircle size={26} />
          </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default QandA