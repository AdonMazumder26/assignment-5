document.getElementById('blog-btn').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = './blog.html';
})


document.getElementById('history-btn').addEventListener('click', function (event) {
    event.preventDefault();

    // document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');
    document.getElementById('donation-btn').classList.add('bg-gray-100');
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    // event.stopImmediatePropagation();
    event.stopPropagation();
})

document.getElementById('donation-btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]');
    // document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn').classList.add('bg-gray-100');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');
    // event.stopImmediatePropagation();
    event.stopPropagation();
})

// noakhali start

document.getElementById('donate-btn-noakhali').addEventListener('click', function (event) {
    event.preventDefault();
    let balance = getInnerTextById('balance');
    let totalDonationNoakhali = getInnerTextById('donation-noakhali');
    let balanceNumber = parseFloat(balance);
    let totalDonationNoakhaliNumber = parseFloat(totalDonationNoakhali);
    let donationForNoakhali = getInputValueById('donation-amount-noakhali');
    let donationForNoakhaliNumber = parseFloat(donationForNoakhali);
    

    if (typeof donationForNoakhaliNumber === 'number') {
        // console.log(donationForNoakhaliNumber);

        let newBalance = balanceNumber - donationForNoakhaliNumber;
        document.getElementById('balance').innerText = newBalance;
        // console.log(newBalance);

        let newTotalforNoakhali = totalDonationNoakhaliNumber + donationForNoakhaliNumber;
        document.getElementById('donation-noakhali').innerText = newTotalforNoakhali;

        // update the history
        const time = new Date();

        const div = document.createElement('div');
        div.classList.add('border-2');
        div.classList.add('rounded-lg');
        div.classList.add('p-5');
        div.classList.add('flex');
        div.classList.add('flex-col');
        div.classList.add('gap-10');

        div.innerHTML = `
        <h4 class="font-bold text-xl">${donationForNoakhaliNumber} Taka is Donated to Donate for Flood at Noakhali, Bangladesh </h4>
        <p> ${time} </p>
        `
        document.getElementById('history-section').appendChild(div);

        alert('you have donated for humankind');


    }
    else {
        alert('hi');
    }
    event.stopPropagation();
})


// feni start

document.getElementById('donate-btn-feni').addEventListener('click', function (event) {
    event.preventDefault();
    let balance = getInnerTextById('balance');
    let totalDonationNoakhali = getInnerTextById('donation-feni');
    let balanceNumber = parseFloat(balance);
    let totalDonationNoakhaliNumber = parseFloat(totalDonationNoakhali);
    let donationForNoakhali = getInputValueById('donation-amount-feni');
    let donationForNoakhaliNumber = parseFloat(donationForNoakhali);
    

    if (typeof donationForNoakhaliNumber === 'number') {
        // console.log(donationForNoakhaliNumber);

        let newBalance = balanceNumber - donationForNoakhaliNumber;
        document.getElementById('balance').innerText = newBalance;
        // console.log(newBalance);

        let newTotalforNoakhali = totalDonationNoakhaliNumber + donationForNoakhaliNumber;
        document.getElementById('donation-feni').innerText = newTotalforNoakhali;

        // update the history
        const time = new Date();

        const div = document.createElement('div');
        div.classList.add('border-2');
        div.classList.add('rounded-lg');
        div.classList.add('p-5');
        div.classList.add('flex');
        div.classList.add('flex-col');
        div.classList.add('gap-10');

        div.innerHTML = `
        <h4 class="font-bold text-xl">${donationForNoakhaliNumber} Taka is Donated to Donate for Flood Relief in Feni,Bangladesh </h4>
        <p> ${time} </p>
        `
        document.getElementById('history-section').appendChild(div);

        alert('you have donated for humankind');


    }
    else {
        alert('hi');
    }
    event.stopPropagation();

})


// quota start

document.getElementById('donate-btn-quota').addEventListener('click', function (event) {
    event.preventDefault();
    let balance = getInnerTextById('balance');
    let totalDonationNoakhali = getInnerTextById('donation-quota');
    let balanceNumber = parseFloat(balance);
    let totalDonationNoakhaliNumber = parseFloat(totalDonationNoakhali);
    let donationForNoakhali = getInputValueById('donation-amount-quota');
    let donationForNoakhaliNumber = parseFloat(donationForNoakhali);
    

    if (typeof donationForNoakhaliNumber === 'number') {
        // console.log(donationForNoakhaliNumber);

        let newBalance = balanceNumber - donationForNoakhaliNumber;
        document.getElementById('balance').innerText = newBalance;
        // console.log(newBalance);

        let newTotalforNoakhali = totalDonationNoakhaliNumber + donationForNoakhaliNumber;
        document.getElementById('donation-quota').innerText = newTotalforNoakhali;

        // update the history
        const time = new Date();

        const div = document.createElement('div');
        div.classList.add('border-2');
        div.classList.add('rounded-lg');
        div.classList.add('p-5');
        div.classList.add('flex');
        div.classList.add('flex-col');
        div.classList.add('gap-10');

        div.innerHTML = `
        <h4 class="font-bold text-xl">${donationForNoakhaliNumber} Taka is Donated to Aid for Injured in the Quota Movement </h4>
        <p> ${time} </p>
        `
        document.getElementById('history-section').appendChild(div);

        alert('you have donated for humankind');


    }
    else {
        alert('hi');
    }
    event.stopPropagation();
})
