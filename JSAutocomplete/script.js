const search = document.getElementById('search');
const matchList = document.getElementById('match-list');


// Search states.json and filter it

const searchStates = async searchText => {
    const res = await fetch('states.json');

    const states = await res.json();

    // Get match to current text input

    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`,'gi');
        return state.name.match(regex) || state.abbr.match(regex);
    });

    if(searchText.length === 0){
        matches = []
    }

    console.log(matches);
    outputHTML(matches);

}

// Show result in HTML

const outputHTML = matches => {
    if(matches.length > 0){
        const html = matches.map(match => `
        <div style="cursor:pointer; text-align:center;" class="card card-body mb-1">
        <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></h4>
        <small> Lat : ${match.lat} / Long : ${match.long} </small>
        </div>
        `).join('');
        console.log(html);
        matchList.innerHTML = html;
    }else{
        matchList.innerHTML = '';
    }


}


search.addEventListener('input',() => searchStates(search.value));