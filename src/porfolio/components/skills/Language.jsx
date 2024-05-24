import React from 'react'

const Language = () => {
  return (
    <section className="max w-[310px] rounded-lg overflow-hidden shadow-lg px-6 py-3 border">
    <div>
      <h2 className="text-sm font-medium mb-2 p-4">Language & Others</h2>
    </div>
    <div className="grid grid-cols-2 gap-5 p-4">
      <div className="flex gap-1 text-left">
        <i class="bx bx-badge-check text-sm"></i>
        <div>
          <h3 className="text-sm font-medium">C</h3>
          <span className="text-[10px] text-gray-500">Advanced</span>
        </div>
      </div>

      <div className="flex gap-1 text-left">
        <i class="bx bx-badge-check text-sm"></i>
        <div>
          <h3 className="text-sm font-medium">C++</h3>
          <span className="text-[10px] text-gray-500">Advanced</span>
        </div>
      </div>

      <div className="flex gap-1 text-left">
        <i class="bx bx-badge-check text-sm"></i>
        <div>
          <h3 className="text-sm font-medium">Java</h3>
          <span className="text-[10px] text-gray-500">Intermediate</span>
        </div>
      </div>

      <div className="flex gap-1 text-left">
        <i class="bx bx-badge-check text-sm"></i>
        <div>
          <h3 className="text-sm font-medium">Python</h3>
          <span className="text-[10px] text-gray-500">Intermediate</span>
        </div>
      </div>

      <div className="flex gap-1 text-left">
        <i class="bx bx-badge-check text-sm"></i>
        <div>
          <h3 className="text-sm font-medium">ML</h3>
          <span className="text-[10px] text-gray-500">Basic</span>
        </div>
      </div>

      <div className="flex gap-1 text-left">
        <i class="bx bx-badge-check text-sm"></i>
        <div>
          <h3 className="text-sm font-medium">Android Dev</h3>
          <span className="text-[10px] text-gray-500">Intermediate</span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Language