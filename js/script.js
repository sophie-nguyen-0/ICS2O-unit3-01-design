// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit3-01-design/sw.js", {
    scope: "/ICS2O-unit3-01-design/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  const base1 = parseInt(document.getElementById("base-1").value)
  const base2 = parseInt(document.getElementById("base-2").value)
  const height = parseInt(document.getElementById("height-number").value)

  const area = (( base1 + base2 ) / 2) * height

  document.getElementById("area").innerHTML = "<h5>The area is " + area + "</h5>"
}
