"use client";
import React from "react";

const ShortenHero = () => {
  const shortLink = () => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "x-api-key": "PT9gpxCkiS7MdL5PnYg9Ubx0qmMqF",
        "Content-Type": "application/json",
      },
      body: '{"url":"https://www.reddit.com/r/opensource/comments/187krxn/minimalist_url_shortener_with_analytics_all_free/"}',
    };
    fetch("https://ishortn.ink/api/v1/links", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <form
      onSubmit={shortLink}
      className="bg-bgGrey rounded-full flex items-center gap-4 w-1/3 p-1 pl-5 border-[3px] border-gray-600">
      <svg
        width="19"
        height="19"
        viewBox="0 0 26 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.5859 9.5L18.7031 14.3828C16.75 16.3359 13.5859 16.3359 11.6719 14.3828C9.79688 12.5078 9.67969 9.53906 11.3984 7.58594L11.6328 7.35156C11.8281 7.07812 12.2578 7.03906 12.4922 7.27344C12.7656 7.50781 12.8047 7.89844 12.5703 8.17188L12.375 8.40625C11.0859 9.89062 11.1641 12.1172 12.5312 13.4844C14.0156 14.9688 16.3594 14.9688 17.8438 13.4844L22.6875 8.64062C24.1719 7.15625 24.1719 4.8125 22.6875 3.32812C21.2422 1.88281 18.8594 1.88281 17.4141 3.32812L16.5156 4.22656C16.2812 4.46094 15.8906 4.46094 15.6172 4.22656C15.3828 3.95312 15.3828 3.5625 15.6172 3.32812L16.5156 2.42969C18.4688 0.476562 21.6328 0.476562 23.5859 2.42969C25.5391 4.38281 25.5391 7.54688 23.5859 9.5ZM2.375 9.5L7.25781 4.65625C9.21094 2.70312 12.3359 2.70312 14.3281 4.65625C16.1641 6.49219 16.2812 9.46094 14.5625 11.4531L14.3281 11.6875C14.1328 11.9609 13.7422 12 13.4688 11.7656C13.1953 11.5312 13.1562 11.1406 13.3906 10.8672L13.625 10.6328C14.875 9.14844 14.7969 6.92188 13.4297 5.55469C11.9453 4.07031 9.60156 4.07031 8.11719 5.55469L3.27344 10.3984C1.78906 11.8828 1.78906 14.2266 3.27344 15.7109C4.71875 17.1562 7.10156 17.1562 8.54688 15.7109L9.44531 14.8125C9.67969 14.5781 10.0703 14.5781 10.3438 14.8125C10.5781 15.0469 10.5781 15.4766 10.3438 15.7109L9.44531 16.5703C7.49219 18.5234 4.32812 18.5234 2.375 16.5703C0.421875 14.6172 0.421875 11.4531 2.375 9.5Z"
          fill="#C9CED6"
        />
      </svg>
      <input
        type="url"
        className="focus-visible:outline-none text-paragraphGrey bg-transparent font-light text-sm flex-grow"
        placeholder="Enter the link here"
      />
      <button
        type="submit"
        className="bg-brandPrimary text-white rounded-full px-6 py-3.5 text-sm font-semibold">
        Shorten Now!
      </button>
    </form>
  );
};

export default ShortenHero;
