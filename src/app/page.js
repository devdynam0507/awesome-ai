import Navbar from "./navbar";

function EmailBox() {
  return (
    <div className="flex flex-col p-4 bg-blue-50 mt-4 rounded-md">
      <p className="text-xl font-bold sm:text-base text-black">👋 새로운 AI 제품 알림을 받아보실래요?</p>
      <p className="mt-2 text-sm sm:text-xs text-black">AwesomeAI 팀은 매일 AI 제품을 추적하고 번역합니다.</p>
      <p className="mt-2 text-sm sm:text-xs text-black">새로운 제품을 찾으면 메일로 제일 먼저 알려드릴게요!</p>
      <div className="mt-6 flex flex-row items-center gap-4">
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="john.doe@company.com"
          required
        />
        <div className="pb-2 utems-center jusitfy-center">
          <button
            className="mt-2 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-semibold text-sm py-2 px-4 rounded align-top"
            type="button">
            알림받기
          </button>
        </div>
      </div>
    </div>
  );
}

function Product({ labels, productName, href, description, like, img }) {
  return (
    <a href={href} target="_blank">
      <li className="flex justify-between gap-x-6 py-5 cursor-pointer border-b-gray-200 border-b">
        <div className="flex min-w-0 gap-x-4 max-h-max">
          <div className="flex flex-row items-center">
            <img
              width={48}
              height={48}
              style={{
                minWidth: 48,
                minHeight: 48,
              }}
              className="flex-none rounded-full bg-gray-50"
              src={img}
              alt=""
            />
          </div>
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">{productName}</p>
            <p className="mt-1 text-xs leading-5 text-gray-500 break-all">{description}</p>

            <div className="flex flex-row mt-2 items-center gap-2">
              <div className={`bg-black w-fit p-1 rounded`}>
                <p className="text-xs font-semibold text-white">GPT</p>
              </div>
              <div className={`bg-lime-600 w-fit p-1 rounded`}>
                <p className="text-xs font-semibold text-white">생산성</p>
              </div>
              {/* {labels.map((labelProps, index) => {
                return (
                  <div key={index} className={`bg-${labelProps.color} w-fit p-1 rounded`}>
                    <p className="text-xs font-semibold text-white">{labelProps.label}</p>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
        <div className="hidden shrink-0 flex flex-row items-end justify-center">
          <div className="w-fit p-1.5 rounded border border-zinc-200 flex flex-row gap-2 items-center">
            <p className="">👍</p>
            <p className="text-sm text-black">{like}</p>
          </div>
        </div>
      </li>
    </a>
  );
}

function ProductList() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      <Product
        like={1}
        img={
          "https://files.oaiusercontent.com/file-gk3ACPm7Tvy5DHe5aE9fqJ0W?se=2123-12-19T11%3A10%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3DFrame%2520612.png&sig=dTPAPU4773Mz4PPaC6kCzsTf7ZiFgLSs/z3%2B3uGxkqY%3D"
        }
        href={"https://chat.openai.com/g/g-kZ0eYXlJe-scholar-gpt"}
        productName={"Scholar GPT"}
        description={"Enhance research with 200M+ resources and built-in critical reading skills. Access Google Scholar, PubMed, JSTOR, Arxiv, and more, effortlessly."}
        labels={[
          {
            color: "black",
            label: "Chat GPT",
          },
          {
            color: "lime-600",
            label: "생산성",
          },
        ]}
      />

      <Product
        like={"100+"}
        img={
          "https://files.oaiusercontent.com/file-QW7YvSgT3rmHt0Iy06gizKqV?se=2123-12-14T22%3A32%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202024-01-08%252005.17.36%2520-%2520Cute%2520and%2520adorable%2520little%2520dragon%2520dancing%2520with%2520fireworks%252C%2520designed%2520in%2520the%2520style%2520of%2520watercolor%2520clipart%2520with%2520the%2520phrase%2520_2024%2520Happy%2520New%2520Year_%2520written%2520in%2520c.png&sig=gXSIsqA69Y3/BJnVvGx%2Ba1%2BQVhOWbV9sUy/gFnKdypI%3D"
        }
        href={"https://chat.openai.com/g/g-xoFFkpsLi-supercute-greeting-card"}
        productName={"Supercute Greeting Card"}
        description={"Supercute Greeting Card Generator (Easy to use)"}
        labels={[
          {
            color: "black",
            label: "Chat GPT",
          },
          {
            color: "lime-600",
            label: "생산성",
          },
        ]}
      />
    </ul>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="flex flex-col w-full items-center justify-center">
        <div className="flex flex-col w-3/5 sm:w-4/5 justify-center">
          <EmailBox />
        </div>
        <div className="w-3/5 sm:w-4/5 mt-10">
          <h1 className="text-xl font-bold">핫한 AI 제품 목록</h1>
          <ProductList />
        </div>
      </div>
    </main>
  );
}
