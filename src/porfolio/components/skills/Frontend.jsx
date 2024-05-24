import React from "react";

const Frontend = () => {
  return (
    <section className="max w-[310px] rounded-lg overflow-hidden shadow-lg px-6 py-3 border">
      <div>
        <h2 className="text-sm font-medium mb-2 p-4">Frontend Development</h2>
      </div>
      <div className="grid grid-cols-2 gap-5 p-4">
        <div className="flex gap-1 text-left">
          <i class="bx bx-badge-check text-sm"></i>
          <div>
            <h3 className="text-sm font-medium">HTML5</h3>
            <span className="text-[10px] text-gray-500">Advanced</span>
          </div>
        </div>

        <div className="flex gap-1 text-left">
          <i class="bx bx-badge-check text-sm"></i>
          <div>
            <h3 className="text-sm font-medium">CSS3</h3>
            <span className="text-[10px] text-gray-500">Advanced</span>
          </div>
        </div>

        <div className="flex gap-1 text-left">
          <i class="bx bx-badge-check text-sm"></i>
          <div>
            <h3 className="text-sm font-medium">JavaScript</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
        </div>

        <div className="flex gap-1 text-left">
          <i class="bx bx-badge-check text-sm"></i>
          <div>
            <h3 className="text-sm font-medium">React JS</h3>
            <span className="text-[10px] text-gray-500">Intermediate</span>
          </div>
        </div>

        <div className="flex gap-1 text-left">
          <i class="bx bx-badge-check text-sm"></i>
          <div>
            <h3 className="text-sm font-medium">Tailwind</h3>
            <span className="text-[10px] text-gray-500">Advanced</span>
          </div>
        </div>

        <div className="flex gap-1 text-left">
          <i class="bx bx-badge-check text-sm"></i>
          <div>
            <h3 className="text-sm font-medium">Bootstrap5</h3>
            <span className="text-[10px] text-gray-500">Advanced</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frontend;
