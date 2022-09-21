"use strict";

fetch("books.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    console.log(obj);
  })
  .catch(function (error) {
    console.error("Something went wrong with retrieving the books...");
    console.error(error);
  });
