import React from 'react'



const Publications = () => {
  
  return (
    
    <section id='publications' className='p-8 mb-10 md:mb-20'>
       <h2 className='text-2xl font-bold text-center ml-2 md:ml-0'>Publications</h2> 
       <span className='text-xs text-gray-500 text-center ml-2 md:ml-0'>Papers</span>

       
       <div className="border-l-4 border-s-slate-600 bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 w-full max-w-6xl mt-6 md:ml-40">
      <p className="text-gray-800 font-normal text-left">
        <a href="https://ieeexplore.ieee.org/abstract/document/10914454" className="hover:underline text-blue-600 font-semibold">
        Deep Learning Based Bangladeshi Currency Coin Recognition.
        </a> Serajum Monira, <strong>Nurun Nahar Fiha</strong>, Md. Golam Moazzam, Md. Musfique Anwar. <i className='text-sm'>4th International Conference on Robotics, Electrical and Signal Processing Techniques 2025 (4th ICREST’25)
        </i>   
      </p>
      <div className="flex justify-between gap-2 mt-2">
        <div>
        <span className="bg-blue-500 text-white font-bold text-xs px-2 py-1 rounded-md">Published</span>
        </div>
        <div>
        <button 
  data-modal-target="default-modal" 
  data-modal-toggle="default-modal"
  className="border border-green-700 text-green-700 px-3 py-1 mr-2 text-sm rounded-md hover:bg-green-700 hover:text-white"
  type="button"
>
  <i className='bx bxs-quote-single-right'></i> Citation
</button>

        <a href="https://ieeexplore.ieee.org/abstract/document/10914454" className="border border-blue-700 text-blue-700 px-3 py-1 text-sm rounded-lg hover:bg-blue-700 hover:text-white">
        <i class='bx bx-link'></i> Source
        </a>
        </div>
        
      </div>
    </div>

    {/* Modal */}
<div id="default-modal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
<div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
  <div className="relative p-4 w-full max-w-4xl max-h-full">
    <div className="relative bg-white rounded-lg shadow-sm">
      {/* Modal header */}
      <div className="flex items-center justify-between p-2 md:p-3 border-b rounded-t  border-gray-200">
        <h3 className="text-xl font-medium">
          Citation
        </h3>
        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      {/* Modal body */}
      <div className="p-4 md:p-5 space-y-4">
      <p className="text-sm text-left leading-relaxed font-mono whitespace-pre-wrap bg-gray-50 p-4">
  {`@INPROCEEDINGS{10914454,
  author={Monira, Serajum and Fiha, Nurun Nahar and Moazzam, Md. Golam and Anwar, Md. Musfique},
  booktitle={2025 4th International Conference on Robotics, Electrical and Signal Processing Techniques (ICREST)}, 
  title={Deep Learning Based Bangladeshi Currency Coin Recognition}, 
  year={2025},
  pages={161-166},
  keywords={Accuracy;Shape;Face recognition;Visual impairment;Feature extraction;Robustness;Convolutional neural networks;Currencies;Standards;Testing;Visually Impaired;Currency Exchange;Coin Recognition;Convolutional Neural Networks;ResNet-50},
  doi={10.1109/ICREST63960.2025.10914454}
  }`}
</p>

      </div>
      <div class="flex justify-end p-2 md:p-3 border-t border-gray-200 rounded-b">
                <button data-modal-hide="default-modal" type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center">Close</button>
                
            </div>
      
    </div>
  </div>
</div>




      
    
    </section>

    


  )
}

export default Publications