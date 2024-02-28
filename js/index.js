const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayData(data.data.tools));
};

const displayData = (data) => {
  const container = document.getElementById("tools-content");
  data.forEach((ele) => {
    let div = document.createElement("div");

    div.innerHTML = `
        <div class="card border border-gray-400 p-[25px]">
        <div class="image">
          <img src="${ele?.image || "./image/Rectangle 23.png"}" alt="Not Image Found" />
        </div>
        <div class="content">
          <h4
            class="text-[25px] font-[600] text-[#111111] mt-[25px] mb-[16px]"
          >
            Features
          </h4>
          <ol class="list-decimal ml-[15px] text-[#585858]">
          <li>${ele.features[0]}</li>
          <li>${ele.features[1]}</li>
          <li>${ele.features[2]}</li>
          </ol>
        </div>
        <hr class="my-[25px]" />
        <div class="flex justify-between items-center">
          <div class="date">
            <h2 class="text-[25px] font-[600] text-[#111111] mb-[16px]">
              ${ele.name}
            </h2>
            <p class="text-[#585858]">
              <i class="fa-solid fa-calendar-days"></i> ${ele.published_in}
            </p>
          </div>
          <div class="button">
            <button
              onclick="modalShowDetails('${ele.id}')"
              class="w-[50px] h-[50px] rounded-full bg-[#FEF7F7] text-[#EB5757]"
            >
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
        `;
        container.appendChild(div)
  });
};


const modalShowDetails = async (id)=>{
    let res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    let data = await res.json();
    displayModaldata(data.data);
}

const displayModaldata = (data)=>{
    const findMoadl = document.getElementById("modalDatas");
    console.log(data)
    findMoadl.innerHTML =  `
    <div class="flex gap-[20px]">
              <div
                class="card flex-1 border border-[#EB57570D] p-[30px] bg-[#EB57570D]"
              >
                <h4 class="text-[25px] font-[600] text-[#111111]">
                  ${data?.description}
                </h4>
                <div
                  class="flex gap-[16px] justify-between items-center mt-[25px]"
                >
                  <div
                    class="text-[16px] font-[800] p-[25px] rounded-lg bg-white text-[#03A30A]"
                  >
                    <span>${data?.pricing[0]?.price || "Not Done"}</span>
                    <span>${data?.pricing[0]?.plan || "not Done"}</span>
                  </div>
                  <div
                    class="text-[16px] font-[800] p-[25px] rounded-lg bg-white text-[#F28927]"
                  >
                    <span>${data.pricing[1].price}</span>
                    <span>${data.pricing[1].plan}</span>
                  </div>
                  <div
                    class="text-[16px] font-[800] p-[25px] rounded-lg bg-white text-[#EB5757]"
                  >
                  <span>${data.pricing[2].price}</span>
                  <span>${data.pricing[2].plan}</span>
                  </div>
                </div>
                <div class="flex justify-between items-center mt-[25px]">
                  <div class="part">
                    <h4 class="text-[25px] font-[600] text-[#111111]">
                      Features
                    </h4>
                    <ul class="list-disc ml-[18px] text-[#585858]">
                      <li>${data.features["1"].feature_name}</li>
                      <li>${data.features["2"].feature_name}</li>
                      <li>${data.features["3"].feature_name}</li>
                    </ul>
                  </div>
                  <div class="part">
                    <h4 class="text-[25px] font-[600] text-[#111111]">
                      Integrations
                    </h4>
                    <ul class="list-disc ml-[18px] text-[#585858]">
                      <li>${data.integrations[0]}</li>
                      <li>${data.integrations[1]}</li>
                      <li>${data.integrations[2]}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card flex-1 border border-[#E7E7E7] p-[30px]">
                <div class="relative">
                  <img class="w-full" src="${data?.image_link[0]}" alt="" />
                  <span class="bg-[#EB5757] text-white py-[5px] px-[15px] rounded-lg absolute top-4 right-4">${data?.accuracy?.score  || "No"} accuracy </span>
                </div>
                <div class="contetn">
                  <h4
                    class="text-[25px] font-[600] text-center mb-[16px] mt-[25px]"
                  >
                    ${data.input_output_examples[0].input}
                  </h4>
                  <p class="text-[16px] text-[#585858] text-center">
                  ${data.input_output_examples[0].output}
                  </p>
                </div>
              </div>
            </div>
    
    `
    details_modal_finds.showModal();
}
loadData();
