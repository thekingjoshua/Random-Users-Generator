'use strict';
const details = document.querySelector('.details');
const imgContainer = document.querySelector('.img__container');
const getUserBtn = document.querySelector('#get-user-btn');
const url = 'https://random-data-api.com/api/v2/users?response_type=json';

const getData = async () => {
	const response = await fetch(url);
	const data = await response.json();
	imgContainer.innerHTML = `<img src=${data.avatar}>`;
	details.innerHTML = `
    <h2>${data.first_name} ${data.last_name}</h2>
    <h3>${data.employment.title}</h3>
    <h4><i class="fa fa-map-marker"></i> ${data.address.city}</h4>
    <h3>Date of Birth: ${data.date_of_birth}</h3>
    <h3>${data.email}</h3>
    `;
	const randomColors = '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, 0);
	document.documentElement.style.setProperty('--theme-color', randomColors);
};

window.addEventListener('load', getData);

getUserBtn.addEventListener('click', getData);
