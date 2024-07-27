import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { useFormStatus as useFormStatus } from 'react-dom';

export default function SubmitBtn() {
    const { pending } = useFormStatus();
  return (
    <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-green-700 text-white rounded-full outline-none transition-all hover:scale-110 hover:bg-green-800 disabled:bg-opacity-65 font-bold' disabled={pending}
      >{pending ? (
              <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
          ) : (
            <>
                Odeslat{" "}
                <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 hover:scale-110' />{" "} 
            </>
        ) 
    }
    </button>
  )
}
