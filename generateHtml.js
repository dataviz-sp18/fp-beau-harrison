/* global d3 */

let optionsString = ''

d3.csv('data/unique-senators.csv', (error, data) => {
  data.forEach(datum => {
    optionsString += `<option className="thisvote" data-placement="bottom" data-senator="${datum.lis_member_id}" ${
      datum.member_full === 'Paul (R-KY)' ? 'selected' : ''
    }>
    <a href="#">${datum.member_full}</a>
  </option>`
  })

  document.querySelector('#senatorSelect').innerHTML = optionsString
})
