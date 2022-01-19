const provinces = document.querySelectorAll(".province")


function getDays(date) {
  const now = new Date().getTime();
  const dateMiliseconds = date.getTime();
  const MilisecondsAtDay = 1000*60*60*24;
  const diffMiliseconds = dateMiliseconds - now;
  const diffDays = Math.ceil(diffMiliseconds / MilisecondsAtDay)
  if (diffDays >= 0) {
    return diffDays + ' dias'
  } else {
    return 'Ya empezaron'
  }
}

function addDays() {
  provinces.forEach(province => {
    const textoProvincia = province.children[1];
    const nombreProvincia = textoProvincia.children[0].textContent;
    const startDate = province.getAttribute('start')
    const days = province.children[1].children[1]
    days.textContent = `${getDays(new Date(startDate))}`
  })
}

document.addEventListener('DOMContentLoaded', () =>  {
  addDays()
})
