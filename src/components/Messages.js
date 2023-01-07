import React from "react";
import SharingFeature from "./Sharing";

const MessageList = () => {
  return (
    <div className="h-screen flex p-10 space-x-4">
      <div className="h-full w-64 bg-gray-200">
        <div className="px-4 py-6 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User profile"
              className="w-12 h-12 rounded-full mx-auto mb-4"
            />
            <h1 className="text-gray-700 text-lg font-semibold mb-2">
              John Doe
            </h1>
            <div className="text-gray-600 text-xs">Online</div>
          </div>
        </div>
        <div className="px-4 py-2 bg-white rounded-lg shadow-lg mt-4">
          <h1 className="text-gray-700 text-lg font-semibold mb-2">
            Discussions
          </h1>
          <div className="text-gray-600 text-xs font-semibold py-2 px-4 rounded-lg bg-gray-300 mb-2">
            Group 1
          </div>
          <div className="text-gray-600 text-xs font-semibold py-2 px-4 rounded-lg bg-gray-300 mb-2">
            Group 2
          </div>
          <div className="text-gray-600 text-xs font-semibold py-2 px-4 rounded-lg bg-gray-300 mb-2">
            Group 3
          </div>
        </div>
      </div>
      <div className="h-full p-14">
        <div className="h-full overflow-y-scroll w-[80rem]">
          <div className="space-x-2 py-2 flex  w-full px-10">
            <div className="text-gray-700 text-sm font-semibold mb-2">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User profile"
                className="w-10 h-10 rounded-2xl mb-4 "
              />
            </div>
            <div className="text-gray-600 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              molestiae debitis fugit qui necessitatibus ullam, autem, dolores
              illum fugiat voluptatem asperiores ipsum voluptatibus ipsa eaque,
              sunt quis ea earum nesciunt! Repudiandae id error itaque vel qui
              fuga, obcaecati distinctio fugiat dolorum temporibus harum facere
              voluptatem pariatur commodi vitae nihil ut non quisquam
              reprehenderit in iste accusamus fugit laudantium vero. Fugit!
              Voluptates vitae hic quam nihil, itaque nostrum inventore error
              perferendis a deleniti repellendus dolores aperiam deserunt iure
              dolore sunt enim impedit amet facere, possimus nobis ex harum.
              Veniam, dolorem possimus? Magnam, facere accusantium! Commodi
              soluta iusto fuga neque, hic reiciendis! Illum, reprehenderit nam,
              neque ipsa dolores, ratione veniam unde odio pariatur est laborum
              iusto quos soluta earum doloribus! Necessitatibus, nihil.
            </div>
          </div>
          <div className="py-2 space-x-2 flex  mt-4 w-full">
            <div className="text-gray-700 text-sm font-semibold mb-2">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User profile"
                className="w-10 h-10 rounded-2xl mb-4"
              />
            </div>
            <div className="text-gray-600 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              fuga voluptate optio nihil aliquid aut numquam veniam impedit
              tempore cupiditate beatae culpa repellendus, tempora quam ad eum.
              Debitis, cumque nesciunt! Dignissimos sapiente molestias
              reprehenderit, tempora adipisci ad expedita, recusandae, nisi
              distinctio alias quidem? Molestiae quidem accusamus nihil
              perspiciatis suscipit ducimus nobis inventore, at aperiam facere
              dolorem distinctio laudantium dicta voluptates.
            </div>
          </div>
          <div className="py-2 space-x-2 flex  mt-4 w-full">
            <div className="text-gray-700 text-sm font-semibold mb-2">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User profile"
                className="w-10 h-10 rounded-2xl mb-4"
              />
            </div>
            <div className="text-gray-600 text-xs ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis magni eum nesciunt expedita natus? Quia cum earum eius
              cupiditate magnam quos voluptate doloribus consequatur libero.
              Sapiente, atque! Enim, quaerat earum! Nulla saepe, doloribus
              sapiente provident odio optio? Deleniti, quo dicta. Obcaecati
              ratione aliquam molestias voluptatem voluptatum ut praesentium
              sit. Fugiat veritatis optio consequatur nostrum ipsa facere minima
              sapiente, quam nemo. Ut cumque unde libero. Soluta harum repellat
              aliquam fuga, fugiat id atque illum consequatur ipsa nulla
              incidunt explicabo ducimus alias. Reprehenderit debitis voluptas
              amet illo vel, quas optio. Nihil, at. Non cumque dignissimos velit
              quas, accusamus suscipit corrupti ab facilis illo! Id veniam minus
              nam! Quaerat asperiores natus sequi nostrum est, cumque ut dolor,
              doloremque distinctio libero consequuntur sunt earum. Quidem rerum
              doloremque molestiae quaerat a. Ut unde praesentium doloribus
              dicta assumenda quam voluptas deserunt cumque dolorem eum odio aut
              recusandae reiciendis a autem eius, molestias libero quae
              veritatis. Voluptates!
            </div>
          </div>
        </div>
        <div>
          <form className="flex justify-between items-center px-4 py-2 bg-white rounded-lg shadow-lg">
            <SharingFeature />
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-3 py-2 leading-tight text-gray-700 rounded-lg focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageList;
