import React, { useState } from 'react';

const Publications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id='publications' className='p-8 mb-10 md:mb-20'>
      <h2 className='text-2xl font-bold text-center ml-2 md:ml-0'>Publications</h2> 
      <span className='text-xs text-gray-500 text-center ml-2 md:ml-0'>Papers</span>

      <div className="border-l-4 border-s-slate-600 bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 w-full max-w-6xl mt-6 md:ml-40">
        <p className="text-gray-800 font-normal text-left">
          <a href="https://ieeexplore.ieee.org/abstract/document/10914454" className="hover:underline text-blue-600 font-semibold">
            Deep Learning Based Bangladeshi Currency Coin Recognition.
          </a> Serajum Monira, <strong>Nurun Nahar Fiha</strong>, Md. Golam Moazzam, Md. Musfique Anwar. 
          <i className='text-sm'> 4th International Conference on Robotics, Electrical and Signal Processing Techniques 2025 (4th ICREST’25)</i>   
        </p>

        <div className="flex justify-between gap-2 mt-2">
          <div>
            <span className="bg-blue-500 text-white font-bold text-xs px-2 py-1 rounded-md">Published</span>
          </div>
          <div>
            {/* Open Modal Button */}
            <button 
              onClick={openModal}
              className="border border-green-700 text-green-700 px-3 py-1 mr-2 text-sm rounded-md hover:bg-green-700 hover:text-white"
              type="button"
            >
              <i className='bx bxs-quote-single-right'></i> Citation
            </button>

            <a href="https://ieeexplore.ieee.org/abstract/document/10914454" className="border border-blue-700 text-blue-700 px-3 py-1 text-sm rounded-lg hover:bg-blue-700 hover:text-white">
              <i className='bx bx-link'></i> Source
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-8 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>

            {/* Modal Content */}
            <h3 className="text-xl font-semibold mb-4 text-left">Citation</h3>
            <div className="p-4 md:p-5 space-y-4 border-t">
              <p className="text-sm text-left leading-relaxed font-mono whitespace-pre-wrap bg-gray-50 p-4 rounded">
                {`@INPROCEEDINGS{10914454,
  author={Monira, Serajum and Fiha, Nurun Nahar and Moazzam, Md. Golam and Anwar, Md. Musfique},
  booktitle={2025 4th International Conference on Robotics, Electrical and Signal Processing Techniques (ICREST)}, 
  title={Deep Learning Based Bangladeshi Currency Coin Recognition}, 
  year={2025},
  pages={161-166},
  keywords={Accuracy;Shape;Face recognition;Visual impairment;Feature extraction;Robustness;Convolutional neural networks;Currencies;Standards;Testing;Visually Impaired;Currency Exchange;Coin Recognition;Convolutional Neural Networks;ResNet-50},
  doi={10.1109/ICREST63960.2025.10914454}
                `}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-2 md:p-3 border-t border-gray-200 rounded-b">
              <button
                onClick={closeModal}
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Publications;
