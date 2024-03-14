import React from "react";

const DropdownContent = ({ isOpen,setIsOpen }) => {


    const closeDropDown = () => {
        setIsOpen(false);
      }; 

  return (
    <div
      className={`absolute left-0 right-0 bg-white border border-gray-300  mt-[350px] h-[305px] w-full transition-all duration-300 z-[9999]  ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      
      <button
        className="absolute top-0 right-0 m-2 p-2 text-accent-white hover:text-gray-300"
        onClick={closeDropDown}
        
      ><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="26" role="presentation" alt="" data-testid="CloseCircleIcon" size="26" color="currentColor"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.735 8L16 13.735 10.265 8 8 10.265 13.735 16 8 21.735 10.265 24 16 18.265 21.735 24 24 21.735 18.265 16 24 10.265 21.735 8z" fill="currentColor" fill-rule="evenodd"></path></svg></button>
      
      
      
      <div className=" flex flex-row justify-center items-center w-full bg-red h-[70px]">
        <svg
          className="text-accent-white"
          viewBox="0 0 135 18"
          xmlns="http://www.w3.org/2000/svg"
          width="188"
          role="presentation"
          alt=""
          data-testid="MyNintendoStoreLogoIcon"
          size="188"
          color="currentColor"
        >
          <path
            d="M76.974 9.947c-.19-.58-.727-1.197-1.672-1.197-.67 0-1.337.342-1.632 1.197h3.304zm1.781.54c0 .641-.42.81-1.25.81h-3.862c.187.86.965 1.313 1.632 1.313.658 0 1.155-.24 1.561-.761l1.553.564c-.505 1.03-1.674 1.854-3.098 1.854-1.956 0-3.44-1.76-3.44-3.6 0-1.78 1.45-3.578 3.422-3.578 2.27 0 3.455 1.996 3.483 3.398zm4.316-3.397c-.713 0-1.35.298-1.738.784h-.02V7.3h-1.904v6.758h1.903v-3.29c0-1.314.692-1.88 1.477-1.88.545 0 1.375.357 1.375 1.686v3.48h1.903V10.43c0-2.273-1.52-3.339-2.996-3.339zM70.409 5.435H68.51v1.863h-1.27v1.593h1.27v5.165h1.9V8.891h1.286V7.298H70.41V5.435h-.001zm29.304 5.246c0-1.001-.773-1.816-1.724-1.816-.95 0-1.723.815-1.723 1.816 0 1.002.773 1.817 1.724 1.817.95 0 1.724-.815 1.724-1.817h-.001zm1.771-.002c0 1.978-1.564 3.588-3.494 3.588-1.931 0-3.494-1.61-3.494-3.588 0-1.98 1.563-3.59 3.494-3.59 1.93 0 3.494 1.612 3.494 3.59zm1.184 3.093l-.147-.518h-.267v.805h.183l-.006-.603.169.603h.132l.168-.603-.006.603h.183v-.805h-.268l-.141.518zM91.96 10.677c0-1.022-.736-1.83-1.732-1.83-.995 0-1.755.822-1.755 1.83s.76 1.829 1.755 1.829c.996 0 1.732-.808 1.732-1.829zm-.01-6.133h1.904v9.515H91.95v-.5h-.032c-.15.231-.854.708-1.753.708-1.877 0-3.458-1.617-3.458-3.59 0-1.973 1.58-3.588 3.458-3.588.9 0 1.602.474 1.753.705h.032v-3.25zM35.933 4.48c-.484 0-1.023.197-1.45 1.202-.292.69-2.296 5.375-2.296 5.375h-.038l-2.298-5.378c-.427-1.002-.994-1.198-1.45-1.198-.661 0-1.276.451-1.276 1.53v8.046h2.042V8.753h.04l1.903 4.464c.33.773.697.902 1.057.902.361 0 .729-.129 1.058-.902l1.903-4.464h.04v5.303h2.042V6.018c0-1.079-.56-1.54-1.277-1.54zm65.714 8.955h.153v.625h.2v-.625h.153v-.18h-.506v.18zm-59.967-1.95L40.086 7.29h-2.128l2.844 6.63c-.182.876-.727 1.218-1.488 1.218h-.279v1.687h.362c1.454 0 2.207-.269 2.66-1.412.112-.28 3.2-8.123 3.2-8.123h-2.143l-1.434 4.194zM17.73 5.156C16.182 2.24 13.406.515 10.203.515c-3.769 0-7.667 2.59-7.667 6.922 0 3.042 2.526 4.287 2.635 4.338a.825.825 0 0 0 1.091-.376l1.445-2.78 1.044 2.113c.144.29.431.472.747.472s.604-.182.747-.472l1.039-2.1 1.413 2.762a.826.826 0 0 0 1.132.362.88.88 0 0 0 .35-1.17l-2.166-4.237a.846.846 0 0 0-.749-.461.835.835 0 0 0-.74.472L9.498 8.435 8.473 6.36a.835.835 0 0 0-.739-.472.837.837 0 0 0-.748.456l-1.762 3.39C4.757 9.3 4.213 8.557 4.213 7.437c0-3.249 3.045-5.191 5.99-5.191 2.715 0 5.054 1.55 6.256 4.145.148.32.47.513.813.49.08-.005.11-.003.125-.003.028.002.049.002.066.002 2.086 0 3.54 1.94 3.54 3.68 0 2.11-1.605 3.763-3.652 3.763-.81 0-1.602-.338-1.998-.651a.815.815 0 0 0-1.028.005 9.116 9.116 0 0 1-5.639 1.965c-3.375 0-5.863-1.94-6.8-3.085a.82.82 0 0 0-1.182-.104.886.886 0 0 0-.1 1.219c.31.379 3.168 3.7 8.082 3.7 2.867 0 4.98-1.106 6.19-1.967a5.305 5.305 0 0 0 2.474.649c2.988 0 5.33-2.414 5.33-5.494 0-2.537-1.978-5.25-4.95-5.403zm39.372 8.902h1.903V7.297h-1.903v6.762zm6.802-6.969c-.713 0-1.35.298-1.738.784h-.02V7.3h-1.903v6.758h1.903v-3.29c0-1.314.69-1.88 1.476-1.88.545 0 1.375.357 1.375 1.686v3.48H66.9V10.43c0-2.273-1.521-3.339-2.997-3.339zm-5.85-2.972c-.615 0-1.112.514-1.112 1.147 0 .634.497 1.148 1.111 1.148s1.112-.514 1.112-1.148c0-.633-.498-1.147-1.112-1.147zm-4.332 6.308l-3.86-5.239c-.398-.54-.778-.706-1.086-.706-.727 0-1.11.453-1.11 1.101v8.474h2.043V8.173l3.86 5.24c.398.54.777.707 1.085.707.729 0 1.11-.453 1.11-1.102V4.545H53.72v5.882zm71.964-2.516h-.021v-.612h-1.902v6.758h1.902V11.01c0-1.28.667-2.01 1.694-2.01h.065V7.09c-.666 0-1.39.277-1.738.82zm-4.267 2.771c0-1.001-.773-1.815-1.724-1.815-.95 0-1.723.814-1.723 1.816 0 1 .773 1.815 1.724 1.815.95 0 1.723-.814 1.723-1.816zm1.77-.002c0 1.978-1.562 3.588-3.493 3.588-1.93 0-3.494-1.61-3.494-3.588 0-1.98 1.564-3.59 3.494-3.59 1.93 0 3.494 1.612 3.494 3.59zm-8.428-5.244h-1.898v1.863h-1.272v1.594h1.272v5.164h1.898V8.892h1.287V7.298h-1.287V5.435zm17.965 4.512c-.192-.579-.729-1.197-1.674-1.197-.669 0-1.324.342-1.62 1.197h3.294zm.53 1.35h-3.87c.235.871.987 1.311 1.639 1.311.66 0 1.156-.236 1.561-.76l1.556.565c-.506 1.028-1.675 1.854-3.1 1.854-1.955 0-3.441-1.76-3.441-3.6 0-1.78 1.452-3.578 3.422-3.578 2.272 0 3.457 1.995 3.485 3.398 0 .641-.42.81-1.252.81zm-21.82.08c0 1.374-1.178 2.962-3.155 2.962-1.562 0-2.744-.99-3.345-1.768l1.744-1.252c.474.495 1.071.866 1.651.866.51 0 .992-.331.992-.808 0-.674-.92-.933-1.922-1.324-1.7-.663-2.225-1.681-2.225-2.882 0-1.445 1.224-2.908 3.108-2.908 1.223 0 2.283.75 2.957 1.605l-1.609 1.162c-.506-.485-.943-.659-1.425-.659-.696 0-.98.433-.98.783 0 .732.972.95 1.927 1.322 1.93.748 2.284 1.858 2.284 2.9h-.001z"
            fill="currentColor"
            fill-rule="nonzero"
            mask="url(#b)"
          ></path>
        </svg>
      </div>

      <div className=" flex flex-row justify-center items-center w-full bg-accent-white ">
        <div className="grid grid-cols-6 h-[262px]  justify-center items-center px-20">
          <div className="col-span-1 h-[140px] p-4 ">
            <div className="inline-flex cursor-pointer">
              <svg
                className="text-red mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="18"
                role="presentation"
                alt=""
                data-testid="DPadIcon"
                size="18"
                color="currentColor"
              >
                <path
                  d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="text-accent-black text-base hover:text-red">
                Games
              </div>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-1 ">
              <a href="#"> Nintendo Switch games</a>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-2">
              <a href="#"> New releases</a>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-2">
              <a href="#"> Sales & deals</a>
            </div>
          </div>

          <div className="col-span-1 h-[140px] p-4 ">
            <div className="inline-flex cursor-pointer">
              <svg
                className="text-red mr-1"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                role="presentation"
                alt=""
                data-testid="ControllerIcon"
                size="18"
                color="currentColor"
              >
                <path
                  d="M27.136 12.803a1.187 1.187 0 1 1 0-2.373 1.187 1.187 0 0 1 0 2.373zm-2.506-2.17a1.186 1.186 0 1 1 0-2.372 1.186 1.186 0 0 1 0 2.372zm0 4.338a1.183 1.183 0 0 1-.837-2.022 1.183 1.183 0 0 1 2.022.838c0 .654-.53 1.184-1.185 1.184zm-2.507-2.168a1.185 1.185 0 1 1 0-2.37 1.185 1.185 0 0 1 0 2.37zm-1.903 5.692a1.805 1.805 0 1 1-.002-3.61 1.805 1.805 0 0 1 .002 3.61zm-6.805-1.805v.513a.255.255 0 0 1-.255.253c-.411-.002-.822-.003-1.233-.002a.1.1 0 0 0-.09.047.12.12 0 0 0-.015.059v1.233c0 .14-.112.253-.252.254h-1.027a.254.254 0 0 1-.253-.254l.001-1.233a.115.115 0 0 0-.017-.059.09.09 0 0 0-.087-.047c-.412 0-.824 0-1.234.002a.253.253 0 0 1-.253-.253v-1.028c0-.14.113-.252.253-.252l1.234.002a.108.108 0 0 0 .053-.015.093.093 0 0 0 .051-.09l-.001-1.235c0-.14.113-.253.253-.253h1.027c.14 0 .253.114.253.253l-.001 1.234c0 .028.01.055.03.075a.1.1 0 0 0 .075.03l1.233-.001c.14 0 .254.112.255.252v.515zm-6.4-3.269a1.804 1.804 0 1 1 0-3.608 1.804 1.804 0 0 1 0 3.608zm24.949 8.973c-.174-2.068-.594-4.118-.933-6.163-.335-2.022-.674-4.07-1.194-6.053a5.393 5.393 0 0 0-1.079-2.342.872.872 0 0 0-.209-.168c-.163-.254-.326-.89-.487-1.147-.813-1.227-2.611-1.557-3.946-1.725a4.29 4.29 0 0 0-2.24.06c-.417.166-.827.738-1.238.92-.256-.006-.51-.01-.762-.017a184.9 184.9 0 0 0-6.45-.023c-.685.008-1.379.013-2.075.028-.403-.177-.805-.746-1.213-.907a4.268 4.268 0 0 0-2.24-.06c-1.336.167-3.133.497-3.946 1.724-.16.256-.324.893-.487 1.147a.94.94 0 0 0-.21.168 3.594 3.594 0 0 0-.72 1.163 38.585 38.585 0 0 0-1.342 5.988C.83 17.023.456 19.076.188 21.126c-.231 1.777-.512 4.005.93 5.377.613.621 1.49.907 2.351.766a3.268 3.268 0 0 0 2.058-1.797c.489-.833.902-1.705 1.326-2.573.398-.816.847-1.933 1.851-2.112a10.19 10.19 0 0 1 1.755-.046h11.786c.849-.15 1.71.193 2.22.887a26.38 26.38 0 0 1 1.465 2.829c.81 1.551 1.999 3.54 4.066 2.644 1.864-.807 2.118-2.922 1.968-4.707z"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <div className="text-accent-black text-base hover:text-red">
                Hardware
              </div>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-1 ">
              <a href="#"> Nintendo Switch systems</a>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-2">
              <a href="#"> Joy-Con & controllers</a>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-2">
              <a href="#"> Cases & more</a>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-2">
              <a href="#"> Replacement parts</a>
            </div>
          </div>

          <div className="col-span-1  h-[140px] p-4 ">
            <div className="inline-flex cursor-pointer">
              <svg
                className="text-red mr-1"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                role="presentation"
                alt=""
                data-testid="TShirtIcon"
                size="18"
                color="currentColor"
              >
                <path
                  d="M7.735 29.333V11.101l-4.428 2.82L0 8.282l6.704-4.705a4.913 4.913 0 0 1 2.825-.891c.922 0 2.034-.005 2.66-.018.415 1.682 2.402 2.107 3.81 2.107 1.41 0 3.397-.425 3.812-2.107.626.013 1.738.019 2.66.018a4.906 4.906 0 0 1 2.825.891L32 8.281l-3.307 5.64-4.427-2.82v18.232H7.735z"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>{" "}
              <div className="text-accent-black text-base hover:text-red">
                Merchandise
              </div>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-1 ">
              <a href="#"> Appare & Accessories</a>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-2">
              <a href="#"> Home & office</a>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-2">
              <a href="#"> Plush</a>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-2">
              <a href="#"> Toys </a>
            </div>
          </div>

          <div className="col-span-1  h-[140px] p-4 ">
            <div className="inline-flex cursor-pointer">
              <svg
                className="text-red mr-1"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                role="presentation"
                alt=""
                data-testid="StarFilledIcon"
                size="18"
                color="currentColor"
              >
                <path
                  d="M31.993 12.369c-.107-.34-1.43-.62-5.599-1.09-2.626-.297-5.15-.455-5.175-.456a.577.577 0 0 1-.504-.37 137.666 137.666 0 0 0-1.982-4.837C17.093 1.821 16.428.71 15.973.713c-.412-.005-1.027 1.122-2.767 4.975a112.804 112.804 0 0 0-2.014 4.781.58.58 0 0 1-.506.367c-.025.002-2.527.146-5.13.43-4.145.453-5.48.706-5.552 1.069-.073.398.774 1.333 3.88 4.163a114.143 114.143 0 0 0 3.921 3.393.58.58 0 0 1 .193.594c-.006.025-.645 2.472-1.183 5.06-.615 2.958-1.072 5.368-.709 5.66.447.364 1.796-.484 5.182-2.416A123.355 123.355 0 0 0 15.75 26.1a.58.58 0 0 1 .622 0c.022.014 2.163 1.355 4.448 2.68 3.45 1.998 4.747 2.668 5.163 2.42.422-.301.042-2.118-.706-5.708a121.87 121.87 0 0 0-1.189-5.106.58.58 0 0 1 .195-.595c.019-.015 1.946-1.588 3.873-3.333 3.055-2.765 3.932-3.734 3.837-4.09"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>{" "}
              <div className="text-accent-black text-base hover:text-red">
                Store exclusives
              </div>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-1 ">
              <a href="#"> Exclusive products</a>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-2">
              <a href="#"> My Nintendo rewards</a>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-2">
              <a href="#"> Nintendo Switch Online offers</a>
            </div>
          </div>

          <div className="col-span-1 h-[140px]  p-4 ">
            <div className="inline-flex cursor-pointer">
              <svg
                className="text-red mr-1"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                role="presentation"
                alt=""
                data-testid="CharacterIcon"
                size="18"
                color="currentColor"
              >
                <path
                  d="M29.399 25.007a5.387 5.387 0 0 0-.539-.329 1.978 1.978 0 0 0-1.844-1.78 2.688 2.688 0 0 0-2.383 1.43.834.834 0 0 0-1.218.222 20.438 20.438 0 0 0-2.64-1.37 6.13 6.13 0 0 0 .37-3.363c.58.065 1.117.116 1.27.12.347.02.692-.053 1-.211.632-.352 1.238-.75 1.813-1.189a.769.769 0 0 0 1.138-.814 3.835 3.835 0 0 0 2.865-2.689c.244-.795.047-1.342-.258-1.53a1.045 1.045 0 0 0-.975-1.343.963.963 0 0 0-1.241-.945c-.055-.397-.456-.644-.984-.546a2.55 2.55 0 0 0-1.647 1.42.916.916 0 0 0-1.11.15 2.786 2.786 0 0 0-.233 2.614c-.397-.14-.968.41-.606 1.097l-.347.215c-.171.11-.171.11-.562.078a10.434 10.434 0 0 1-2.21-.64 2.688 2.688 0 0 0 2.027-1.465.812.812 0 0 0 .597-1.159c.605-.206.944-.848.773-1.463a2.574 2.574 0 0 0 1.989-1.19c.992-1.84-.385-3.705-2.043-3.261a4.432 4.432 0 0 0-1.89 1.066c-.268-.679-.57-1.354-.808-1.909.902-.561 3.233-3.42 2.73-3.966-.493-.535-2.798.185-3.842.805A5.003 5.003 0 0 0 17.372.72c-.87-.87-2.28-1.046-3.887 0A10.588 10.588 0 0 0 9.48 7.816c-3.033 1.276-2.201 4.364 1.046 4.895.151.452.44.846.828 1.124-.78.219-.473 1.068.296 1.073-.944.073-1.88.22-2.802.438a.893.893 0 0 0-1.594.024 3.87 3.87 0 0 0-2.708-.288 2.192 2.192 0 0 0-1.826 2.44 1.252 1.252 0 0 0 .126 1.781.975.975 0 0 0 .757 1.458c-.183.918 1.05 1.592 2.657.532 1.05.977 2.412.052 2.599-1.652.457.248 1.007-.012 1.066-.689a19.002 19.002 0 0 1 2.963-.433c0 .493-.091.981-.27 1.44a3.973 3.973 0 0 0-.444 4.064.67.67 0 0 1-.223.187 14.946 14.946 0 0 0-.738-.363.681.681 0 0 0-.984-.609 1.634 1.634 0 0 0-2.02-.76 2.25 2.25 0 0 0-.649-.177.52.52 0 0 0-.548.231 7.972 7.972 0 0 0-.818 1.792.288.288 0 0 0 .084.333c.074.062.154.117.24.162a9.789 9.789 0 0 0-2.058 4.078c-.08.359-.045.583.126.691.183.123.38.226.585.307.196.98 1.08 1.67 2.079 1.622a3.013 3.013 0 0 0 2.417-2.06c.272.003.53-.12.698-.335a6.07 6.07 0 0 0 3.456.771 5.93 5.93 0 0 0 3.13-2.516 22.596 22.596 0 0 1 5.152 2.5c.054.52.51.903 1.03.867.36.859 1.445 1.358 2.015 1.007.223.083.45.154.68.211.328.077.377.04.526-.14.364-.457.667-.958.9-1.492.114-.259.125-.423.014-.546a1.667 1.667 0 0 0-.234-.193 8.894 8.894 0 0 0 2.529-4.01c.07-.329.013-.44-.164-.575"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>{" "}
              <div className="text-accent-black text-base hover:text-red">
                Characters
              </div>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-1 ">
              <a href="#"> Pikmin</a>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-2">
              <a href="#"> Splatoon</a>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-2">
              <a href="#"> Super Mario</a>
            </div>

            <div className="text-accent-black font-normal hover:text-red mt-2">
              <a href="#"> The Legend of Zelda</a>
            </div>
          </div>

          <div className="col-span-1 h-[140px]  p-4 ">
            <div className="inline-flex cursor-pointer">
              <svg
                className="text-red mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="18"
                role="presentation"
                alt=""
                data-testid="SalesTagIcon"
                size="18"
                color="currentColor"
              >
                <path
                  d="M16.5.4c.2-.3.6-.4 1-.4l9.4.2c.4 0 .7.2 1 .4l3.5 3.5c.3.3.4.6.4 1l.2 9.4c0 .4-.1.8-.4 1.1l-16 16c-.6.6-1.5.6-2.1 0L.4 18.5c-.6-.6-.6-1.5 0-2.1L16.5.4zm6.7 4.1c-1.2 1.2-1.2 3.1 0 4.3s3.1 1.2 4.3 0c1.2-1.2 1.2-3.1 0-4.3-1.2-1.2-3.2-1.2-4.3 0z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              <div className="text-accent-black text-base hover:text-red">
                Sales & deals
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-row justify-center items-center w-full bg-accent-white ">
        <button
  className="w-[115px] h-[47px] mb-2 border border-red rounded-lg transition-transform hover:bg-pink-200 hover:border-red hover:scale-105"
  
        >
          <div className="text-red font-bold text-lg ">Shop all</div>
        </button>
      </div>
    </div>
  );
};

export default DropdownContent;
