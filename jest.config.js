/** @type {import('jest').Config} */
const config = {
  transform: {
    "\\.css\\.ts$": "@vanilla-extract/jest-transform",
  },
};

module.exports = config;
