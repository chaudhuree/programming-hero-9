// select the elements
const leftDiv = document.getElementById("leftDiv");
const rightDiv = document.getElementById("rightReadBox");
const readCount = document.getElementById("readCound");
readCount.innerHTML = 0;
const loaderLeft = document.getElementById("loader-left");

// Function to perform a two-second loading timer
function wait() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
// format number with commas
function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// Function to fetch all posts
async function fetchPosts() {
  loaderLeft.style.display = "block";

  await wait(); // Simulate loading time

  fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
    .then((response) => response.json())
    .then((data) => {
      loaderLeft.style.display = "none";
      displayPosts(data.posts);
    })
    .catch((error) => console.error("Error fetching posts:", error));
}

// Function to display posts in the left div
function displayPosts(posts) {
  leftDiv.innerHTML = "";

  posts.forEach((post, index) => {
    const card = document.createElement("div");
    card.classList.add(
      "ch-card-bg",
      "rounded-3xl",
      "border",
      "hover:border-[#797DFC]",
      "p-10",
      "hover:ch-card-bg-hover",
      "flex",
      "gap-6"
    );

    card.innerHTML = `
    <div class="image-box">
                <span class="relative inline-block">
                  <img
                    class="h-[72px] w-[72px] rounded-2xl"
                    src="${post?.image}"
                    alt=""
                  />
                  <span
                    class="absolute right-1 top-1 block h-4 w-4 -translate-y-1/2 translate-x-1/2 transform rounded-full  ring-2 ring-white ${
                      post?.isActive ? "bg-green-400" : "bg-red-400"
                    }"
                  ></span>
                </span>
              </div>
              <div class="data-box flex-1">
                <div
                  class="hashtag-box flex max-md:flex-col max-md:gap-2 gap-5 inter text-sm font-medium text-[rgba(18, 19, 45, 0.80)] mb-3"
                >
                  <p># <span id="category">${post?.category}</span></p>
                  <p>Author : <span id="author">${post.author.name}</span></p>
                </div>
                <h2 class="text-xl font-bold ch-text-primary mb-4">
                  ${post?.title}
                </h2>
                <p
                  class="inter text-base font-normal ch-text-secondary leading-[26px] mb-5"
                >
                  ${post?.description}
                </p>
                <img
                  src="assetes/card-hr-line.svg"
                  class="mb-5"
                  alt="horizontal line"
                />
                <div class="flex justify-between items-center">
                  <div
                    class="icon-box flex gap-6 text-[rgba(18, 19, 45, 0.60)] inter"
                  >
                    <div class="comments flex gap-3">
                      <img src="assetes/msg.svg" alt="message" />
                      <span>${post.comment_count}</span>
                    </div>
                    <div class="views flex gap-3  max-md:hidden">
                      <img src="assetes/views.svg" alt="views" />
                      <span>${formatNumberWithCommas(post.view_count)}</span>
                    </div>
                    <div class="watch flex gap-3 max-md:hidden">
                      <img src="assetes/watch.svg" alt="watch" />
                      <span>${post.posted_time} min</span>
                    </div>
                  </div>
                  <button id="readbutton" class="pointer">
                  
                  <img src="assetes/read.svg" alt="read" />
                  </button>
                </div>
              </div>
    `;

    // Add click event to create a card on the right side
    const button = card.querySelector("#readbutton");
    button.addEventListener("click", (event) => {
      // Prevent the click event from propagating to the card
      event.stopPropagation();
      createCardOnRight(post);
    });
    leftDiv.appendChild(card);
  });
}

// Function to show mark as read card on the right side
function createCardOnRight(data) {
  readCount.innerHTML = parseInt(readCount.innerHTML) + 1;
  const card = document.createElement("div");
  card.classList.add("read-card", "bg-white", "p-4", "flex", "rounded-2xl");
  card.innerHTML = `
  <p class="w-[72%] font-semibold ch-text-primary leading-6">
  ${data.title}
</p>
<div
  class="icon-box flex-1 flex items-center ch-text-secondary inter max-md:gap-2 max-md:justify-end"
>
  <img src="assetes/views.svg" alt="views" /> <span>${formatNumberWithCommas(
    data.view_count
  )}</span>
</div>
  `;

  rightDiv.appendChild(card);
}

// Function to search posts based on category
async function searchPosts() {
  const categoryInput = document.getElementById("categoryInput");
  const categoryName = categoryInput.value;

  leftDiv.innerHTML = `<div id="loader-left">
  <div
    class="ch-card-bg rounded-3xl border p-10 hover:ch-card-bg-hover flex gap-6 mb-6"
  >
    <div class="image-box">
      <span class="relative inline-block">
        <div class="h-[72px] w-[72px] rounded-2xl skeleton"></div>
        <span
          class="skeleton absolute right-1 top-1 block h-4 w-4 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-purple-400 ring-2 ring-white"
        ></span>
      </span>
    </div>
    <div class="data-box flex-1">
      <div
        class="hashtag-box flex gap-5 inter text-sm font-medium text-[rgba(18, 19, 45, 0.80)] mb-3"
      >
        <p class="skeleton h-4 w-20"></p>
        <p class="skeleton h-4 w-36"></p>
      </div>
      <h2 class="skeleton h-4 w-[60%] mb-4"></h2>
      <p class="skeleton h-4 w-[70%] mb-2"></p>
      <p class="skeleton h-4 w-[40%] mb-5"></p>
      <div class="mb-5 skeleton h-1 w-full"></div>
      <div class="flex justify-between items-center">
        <div
          class="icon-box flex gap-6 text-[rgba(18, 19, 45, 0.60)] inter"
        >
          <div class="comments flex gap-3 items-center max-md:hidden">
            <span class="w-7 h-7 skeleton rounded-md"></span>
            <span class="skeleton h-4 w-10"></span>
          </div>
          <div class="views flex gap-3 items-center max-md:hidden">
            <span class="w-7 h-7 skeleton rounded-md"></span>
            <span class="skeleton h-4 w-10"></span>
          </div>
          <div class="watched flex gap-3 items-center">
            <span class="w-7 h-7 skeleton rounded-md"></span>
            <span class="skeleton h-4 w-10"></span>
          </div>
        </div>
        <div class="comments flex gap-3 items-center">
          <span class="w-7 h-7 skeleton"></span>
        </div>
      </div>
    </div>
  </div>
</div>`;

  try {
    await wait(); // Wait for the loading simulation

    const response = await fetch(
      `https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`
    );

    const data = await response.json();

    // loaderLeft.style.display = "none";
    displayPosts(data.posts);
  } catch (error) {
    console.error("Error searching posts:", error);
    loaderLeft.style.display = "none";
  }
}

//  latest post section
async function fetchLatestPosts() {
  const latestPostLoader = document.getElementById("latest-post-loader");

  latestPostLoader.style.display = "grid";

  await wait(); // Simulate loading time

  try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
    );
    const data = await response.json();
    latestPostLoader.style.display = "none";
    displayLatestPosts(data);
  } catch (error) {
    latestPostLoader.style.display = "none";
    console.error("Error fetching latest posts:", error);
  }
}

// Function to display latest posts in the latest post section
function displayLatestPosts(posts) {
  const latestPostSection = document.getElementById("latest-post-main-section");
  latestPostSection.innerHTML = "";

  posts.forEach((post) => {
    const latestPost = document.createElement("div");
    latestPost.classList.add(
      "card",
      "bg-white",
      "col-span-12",
      "md:col-span-6",
      "lg:col-span-4",
      "shadow-xl",
      "border",
      "rounded-3xl",
      "border-[#DBDCDF]",
      "p-6"
    );
    latestPost.innerHTML = `
    <figure class="rounded-[20px] mb-6">
              <img
                src="${post.cover_image}"
                alt="post"
                class="rounded-[20px]"
              />
            </figure>
            <div class="text-left">
              <div class="flex gap-2 items-center mb-3">
                <img src="assetes/calender.svg " alt="calender" />
                <p class="ch-text-secondary">${
                  post?.author?.posted_date
                    ? `${post.author.posted_date}`
                    : "No publish date"
                }</p>
              </div>
              <h2 class="text-lg font-extrabold leading-7 ch-text-primary mb-3 truncate">${
                post.title
              }</h2>
              <p class="leading-6 ch-text-secondary">${post.description}</p>
              <div class="mt-4 flex gap-4 items-center ">
                <img class="size-11 rounded-full object-cover" src="${
                  post.profile_image
                }" alt="author">
                <div class="flex flex-col gap-[5px]">
                  <p class="ch-text-primary font-bold">${post.author.name}</p>
                  <p class="ch-text-secondary text-sm">${
                    post.author.designation
                      ? post.author.designation
                      : "Unknown"
                  }</p>
                </div>
              </div>
            </div>
    `;

    latestPostSection.appendChild(latestPost);
  });
}

// Call the fetchPosts and fetchLatestPosts functions
fetchPosts();
fetchLatestPosts();
