<template>
  <button
    class="rounded-full w-11 h-11 bg-transparent border-2 border-gelap hover:border-base flex items-center justify-center hover:bg-gelap hover:text-base transition-colors duration-500"
  >
    <span class="w-6 h-6 group justify-center items-center flex">
      <slot>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="text-gelap group-hover:text-base transition-colors duration-300 cursor-default"
        >
          <g clip-path="url(#clip0_70_109)">
            <path
              d="M14.5833 5.41663H14.5916M5.83329 1.66663H14.1666C16.4678 1.66663 18.3333 3.53211 18.3333 5.83329V14.1666C18.3333 16.4678 16.4678 18.3333 14.1666 18.3333H5.83329C3.53211 18.3333 1.66663 16.4678 1.66663 14.1666V5.83329C1.66663 3.53211 3.53211 1.66663 5.83329 1.66663ZM13.3333 9.47496C13.4361 10.1685 13.3177 10.8768 12.9948 11.4991C12.6718 12.1215 12.1609 12.6261 11.5346 12.9414C10.9084 13.2566 10.1987 13.3663 9.50645 13.2549C8.81423 13.1435 8.17476 12.8167 7.67899 12.3209C7.18322 11.8252 6.8564 11.1857 6.74502 10.4935C6.63363 9.80125 6.74335 9.09154 7.05856 8.46527C7.37378 7.839 7.87845 7.32808 8.50078 7.00516C9.12311 6.68224 9.83142 6.56378 10.525 6.66663C11.2324 6.77153 11.8873 7.10118 12.393 7.60688C12.8987 8.11258 13.2284 8.76752 13.3333 9.47496Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_70_109">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </slot>
    </span>
  </button>
</template>
