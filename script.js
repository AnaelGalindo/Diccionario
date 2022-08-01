
const fetchInfo = search =>
{
  return fetch('https://api.dictionaryapi.dev/api/v2/entries/en/<>')
    .then(res => res.json())
    .then(response => 
      {
        console.log(response)
      })

}


const $Form = document.querySelector('#form')
const $Input = document.querySelector('#input')
const $Submit = document.querySelector('#submit')
const $Searchs = document.querySelector('#searchs')

$Form.addEventListener('submit', async(event) => 
{
  event.preventDefault()
  const{value} = $Input
  if (!value) return

  $Submit.setAttribute('dissabled', '')
  $Submit.setAttribute('aria-busy', 'true')

  const searchInfo = await fetchInfo(value)

  if (searchInfo)
    {
      $Searchs.innerHTML = JSON.stringify(searchInfo,null,2)
    }  

  $Submit.removeAttribute('dissabled')
  $Submit.removeAttribute('aria-busy')


})





